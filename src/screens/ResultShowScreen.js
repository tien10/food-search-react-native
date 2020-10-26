import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    // console.log(id);
    // console.log(result)
    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`)
        // console.log(res.data);
        setResult(res.data)
    }
    useEffect(() => {
        getResult(id)
    })
    if (!result) {
        return null;
    }
    return <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
                return (
                    <Image
                        style={{
                            height: 200,
                            width: 300
                        }}
                        source={{ uri: item }}
                    />
                )
            }}
        />
    </View>
}

export default ResultShowScreen;