
import { StyleSheet } from 'react-native';
import AppColor from '../../utills/AppColors';

const LOGO_DIMENTION = 20;
const TOP_MARGIN = 18;
const RIGHT_LEFT_MARGIN = 15;

export default styles = StyleSheet.create({
    container: {
        flex: 1, 
        margin:RIGHT_LEFT_MARGIN
    },
    logoContainer: {
        flexDirection:"row",
        position: "absolute",
        alignSelf:"flex-end"
    },
    logoImage: {
        width: LOGO_DIMENTION,
        height: LOGO_DIMENTION,
        right: 2,
    },
    logoText: {
        color: AppColor.textColor,
        justifyContent:"center",
        alignSelf:"center",
        fontFamily: "AvenirNextLTPro-Regular",
        fontSize: 14,
    },
    nameText: {
        color: AppColor.textColor,
        justifyContent:"center",
        alignSelf:"flex-start",
        marginTop: 30,
        fontFamily: "AvenirNextLTPro-Bold",
        fontSize: 22,
    },

    cardContainer: {
        flexDirection:"row",
        alignSelf:"flex-start"
    },

    cardText: {
        color: AppColor.textColor,
        justifyContent:"center",
        alignSelf:"center",
        marginTop: 20,
        fontFamily: "AvenirNextLTPro-Regular",
        fontSize: 14,
    },
    visa: {
        color: AppColor.textColor,
        position: "absolute",
        alignSelf:"flex-end",
        bottom :10,
        fontFamily: "AvenirNextLTPro-Bold",
        fontSize: 25,
    },
});