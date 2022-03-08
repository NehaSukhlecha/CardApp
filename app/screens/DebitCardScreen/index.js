import React, { Component } from "react";
import { View, Image, Text,  SafeAreaView, Animated, StyleSheet} from "react-native";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import CardComponent from "../../components/CardComponent/CardComponent";
import FeatureComponent from "../../components/FeatureComponent/FeatureComponent";
import styles from "./styles";
import BottomSheet from 'react-native-bottomsheet-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColor from "../../utills/AppColors";

class DebitCardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar />
        <SafeAreaView style={styles.mainContainer}>
          <Image source={require('../../assets/logo.png')} 
            style={styles.logoImage}/>
          <Text style={styles.screenHeader} >Debit Card</Text>
          <Text style={styles.balanceText} >Available Balance</Text>
          <View style={styles.balanceContainer}> 
            <View style={styles.currencyContainer}> 
                <Text style={styles.currencyText} >S$</Text>
            </View>
            <Text style={styles.amountText} >3,000</Text>
          </View>

          <BottomSheet
            keyboardAware
            bottomSheerColor="#FFFFFF"
            ref="BottomSheet"
            initialPosition={'65%'}
            snapPoints={['65%', '100%']}
            enabledGestureInteraction={false}
            isBackDropDismissByPress={false}
            isRoundBorderWithTipHeader={true}
            tipStyle={{backgroundColor:"white"}}
            header={
              <View >
                <View style={styles.hideButton}> 
                  <Text style={styles.hideText}> <MaterialCommunityIcons name="eye-off" color= {AppColor.themeColor}  size={16} />  Hide Card Number</Text>
                </View>
                <View style={styles.cardContainer}> 
                  <CardComponent></CardComponent>
                </View>

                <View style={styles.body}> 
                  {/* <View style={styles.progressBar}>
                      <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width: "50%"}}/>
                  </View> */}
                
                  <FeatureComponent title="Top-up account"
                          subTitle="Deposit money to your account to use with your card"
                          imageSource={require("../../assets/insight.png")}/>
                  <FeatureComponent title="Weekly Spending Limit"
                          subTitle="your haven't set any limit on the card"
                          imageSource={require("../../assets/limit.png")}/>
                  <FeatureComponent title="Freeze Card"
                          subTitle="Your debit csrd is currently active"
                          imageSource={require("../../assets/freeze.png")}/>
                  <FeatureComponent title="Get a new card"
                          subTitle="This deactivated your current debit card"
                          imageSource={require("../../assets/deactivate.png")}/>
                  <FeatureComponent title="Deactivated Cards"
                          subTitle="Your previously deactivted cards"
                          imageSource={require("../../assets/info.png")}/>
                </View>
              </View>
            }
            body={
              <View >
                {/* */}
              </View>
            }
           />
        </SafeAreaView>
      </View>
    );
  }
}

export default DebitCardScreen;
