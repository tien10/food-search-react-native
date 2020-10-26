import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View
        style={{
            backgroundColor: '#dfebe2',
            height: 50,
            marginHorizontal: 15,
            borderRadius: 5,
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10
        }}
    >
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            style={styles.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        color: 'black',
        marginHorizontal: 15
    }
})

export default SearchBar