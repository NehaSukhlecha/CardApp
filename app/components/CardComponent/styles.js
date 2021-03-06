
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
    logoImage: {
        right: 2,
        alignSelf:"flex-end",
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
    visalogo: {
        color: AppColor.textColor,
        right: 2,
        alignSelf:"flex-end",
        bottom :10,
    },
});