import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/components/HomeScreen";
import DspbScreen from "./src/screens/DspbScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";
import SearchScreen from "./src/screens/SearchScreen";
const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
    HomeScreen: HomeScreen,
    ResultShowScreen: ResultShowScreen,
    DspbScreen: DspbScreen,
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "Home",
    },
  }
);

export default createAppContainer(navigator);
