import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import useResultsDspb from "../hooks/useResultsDspb";
const DspbScreen = () => {
  const [term, setTerm] = useState("");
  const [dspbApi, results] = useResultsDspb();
  // console.log(results);
  const filterResultByCode = (code) => {
    return results.filter((result) => {
      return result.deP_CODE === code;
    });
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Mã phòng ban"
          value={term}
          onChangeText={setTerm}
          onEndEditing={() => {
            dspbApi(term);
          }}
        />
      </View>
      <ScrollView>
        <FlatList
          data={filterResultByCode(term)}
          keyExtractor={(item) => item.deP_ID}
          renderItem={({ item }) => {
            return (
              <>
                <Text>Deparment ID: {item.deP_ID}</Text>
                <Text>Deparment Name: {item.deP_NAME}</Text>
                <Text>Branch Name: {item.brancH_NAME}</Text>
              </>
            );
          }}
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  container: {
    backgroundColor: "#dfebe2",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
});
export default DspbScreen;
