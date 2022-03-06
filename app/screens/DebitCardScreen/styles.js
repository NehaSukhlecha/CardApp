import { StyleSheet } from 'react-native';
import AppColor from '../../utills/AppColors';

const LOGO_DIMENTION = 32;
const TOP_MARGIN = 18;
const RIGHT_LEFT_MARGIN = 25;


export default StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: AppColor.themeBackground,
    },
    logoImage: {
      position: "absolute",
      right: RIGHT_LEFT_MARGIN,
      width: LOGO_DIMENTION,
      height: LOGO_DIMENTION,
      top: TOP_MARGIN,
    },
    screenHeader: {
      position: "absolute",
      left: RIGHT_LEFT_MARGIN,
      color: AppColor.textColor,
      fontFamily: "AvenirNextLTPro-Bold",
      fontSize: 33,
      width: "100%",
      height: LOGO_DIMENTION + LOGO_DIMENTION /2 + TOP_MARGIN,
      top: LOGO_DIMENTION /2 + TOP_MARGIN,
    },
    
});
  