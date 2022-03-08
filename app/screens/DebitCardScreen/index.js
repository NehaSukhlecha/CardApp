import React, { Component } from "react";
import { View, Image, Text,  SafeAreaView } from "react-native";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
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
            enabledGestureInteraction={true}
            isBackDropDismissByPress={true}
            isRoundBorderWithTipHeader={true}
            tipStyle={{backgroundColor:"white"}}
            headerStyle={{borderRadius: 100}}
            header={
              <View >
                <View style={styles.hideButton}> 
                  <Text style={styles.hideText}> <MaterialCommunityIcons name="eye-off" color= {AppColor.themeColor}  size={16} />    Hide Card Number</Text>
                </View>
                <View style={styles.cardContainer}> 
                  <Text style={styles.currencyText} >S$</Text>
                </View>
              </View>
            }
            body={
              <View style={styles.body}>
                <Text style={styles.text}>Body</Text>
              </View>
            }
           />
        </SafeAreaView>
      </View>
    );
  }
}

export default DebitCardScreen;
