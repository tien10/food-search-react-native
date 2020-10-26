import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'
import { ScrollView } from 'react-native-gesture-handler'

const SearchScreen = (props) => {
    // console.log(props);
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();
    // console.log(results);

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return <View style={{ flex: 1 }}>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text>We have found {results.length} results</Text> */}
        <ScrollView>
            <ResultList
                results={filterResultByPrice('$')}
                title="Cost Effective"
            // navigation={props.navigation}
            />
            <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
            <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
        </ScrollView>
    </View>
}

export default SearchScreen