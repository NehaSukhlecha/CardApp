import { StyleSheet } from 'react-native';
import AppColor from '../../utills/AppColors';
import AppConstants from '../../utills/AppConstants';

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
      marginLeft: RIGHT_LEFT_MARGIN,
      color: AppColor.textColor,
      fontFamily: "AvenirNextLTPro-Bold",
      fontSize: 30,
      width: "100%",
      top: AppConstants.SCREEN_HEIGHT * 0.05,
    },
    balanceText: {
      position: "absolute",
      marginLeft: RIGHT_LEFT_MARGIN,
      color: AppColor.textColor,
      fontFamily: "AvenirNextLTPro-Regular",
      fontSize: 16,
      width: "100%",
      top: AppConstants.SCREEN_HEIGHT * 0.13,
    },

    balanceContainer: {
      flexDirection: "row",
      marginLeft: RIGHT_LEFT_MARGIN,
      alignItems:"center",
      marginTop: AppConstants.SCREEN_HEIGHT * 0.17,
    },

    currencyContainer: {
      width: 40,
      height: 22,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: AppColor.themeColor,
      borderRadius: 4,
    },
    currencyText: {
      color: AppColor.textColor,
      fontFamily: "AvenirNextLTPro-Bold",
      alignSelf:"center",
      fontSize: 12,
    },
    amountText: {
      color: AppColor.textColor,
      marginLeft: 10,
      alignSelf:"center",
      fontFamily: "AvenirNextLTPro-Bold",
      fontSize: 24,
    },
    cardContainer: {
      width: '99%',
      top: -70,
      alignSelf:"flex-end",
      height: AppConstants.SCREEN_HEIGHT * 0.25,
      backgroundColor: AppColor.themeColor,
      borderRadius: 15,
    },
    hideButton: {
      width: '45%',
      top: -100,
      alignSelf:'flex-end',
      padding:5,
      position: 'absolute',
      flexDirection:"row",
      height: 50,
      alignContent:"center",
      justifyContent:"center",
      backgroundColor: 'white',
      borderRadius: 10,
    },
    hideText: {
      color: AppColor.themeColor,
      fontFamily: "AvenirNextLTPro-Bold",
      justifyContent:"center",
      fontSize: 12,
    },
});
  