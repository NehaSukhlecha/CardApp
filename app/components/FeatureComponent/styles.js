
import { StyleSheet } from 'react-native';
import AppColor from '../../utills/AppColors';

const LOGO_DIMENTION = 32;

export default styles = StyleSheet.create({
    container: {
        width:"100%",
        flexDirection:"row",
        marginTop:10,
        marginBottom:20,
    },
    logoImage: {
        width: LOGO_DIMENTION,
        height: LOGO_DIMENTION,
    },
    subContainer: {
        flexDirection:"column",
        marginLeft:10,
    },
    title: {
        color: AppColor.themeBackground,
        fontFamily: "AvenirNextLTPro-Regular",
        marginRight:5,
        fontSize: 14,
    },
    subTitle: {
        color: AppColor.lightGrey,
        marginTop:10,
        fontFamily: "AvenirNextLTPro-Regular",
        fontSize: 10,
    },
    switch: {
        position:"absolute",
        right:20      
    },
});