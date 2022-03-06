import { Dimensions } from "react-native";

const AppConstants = {
  SCREEN_WIDTH: Dimensions.get("window").width,
  SCREEN_HEIGHT: Dimensions.get("window").height,
  tabBarHeight: Dimensions.get("window").height * 0.12,
};

export default AppConstants;
