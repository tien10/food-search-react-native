import React from "react";
import { View, Button } from "react-native";
const HomeScreen = (props) => {
  return (
    <View>
      <Button
        title="Go to Food"
        onPress={() => {
          props.navigation.navigate("SearchScreen");
        }}
      ></Button>
      {/* <Button
        title="Go to dspb"
        onPress={() => props.navigation.navigate("DspbScreen")}
      /> */}
    </View>
  );
};
export default HomeScreen;
