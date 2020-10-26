import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation'

const ResultList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return <View style={styles.container}>
        <Text
            style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 15,
                marginBottom: 5
            }}
        >
            {title}
        </Text>
        {/* <Text>Results: {results.length}</Text> */}
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResultShowScreen', {
                            id: item.id
                        })}
                    >
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    }
})
export default withNavigation(ResultList);