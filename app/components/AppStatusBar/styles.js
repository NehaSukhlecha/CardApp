import { StyleSheet, Platform, StatusBar } from "react-native";
import AppConstants from "../../utills/AppConstants";
import AppColor from "../../utills/AppColors";

export default StyleSheet.create({
  container: {
    width: AppConstants.SCREEN_WIDTH,
    height: Platform.OS === "ios" ? AppConstants.SCREEN_HEIGHT * 0.05 : StatusBar.currentHeight,
    backgroundColor : AppColor.themeBackground,
  }
});
