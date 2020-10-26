import React from 'react'
import { View, Button } from 'react-native'
const HomeScreen = (props) => {
    return <View>
        <Button
            title="Go to Food"
            onPress={() => { props.navigation.navigate('SearchScreen') }}
        ></Button>
    </View>
}
export default HomeScreen;