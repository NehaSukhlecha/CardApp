import React, { Component } from "react";
import { View, Image, Text,  SafeAreaView } from "react-native";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import styles from "./styles";
import BottomSheet from 'react-native-bottomsheet-reanimated';

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
            initialPosition={'65%'} //200, 300
            snapPoints={['65%', '100%']}
            // isBackDrop={true}
            enabledGestureInteraction={true}
            isBackDropDismissByPress={true}
            isRoundBorderWithTipHeader={true}
            // backDropColor="red"
            // //isModal
            // containerStyle={{backgroundColor:"red"}}
            tipStyle={{backgroundColor:"white"}}
            headerStyle={{borderRadius: 100}}
            // bodyStyle={{backgroundColor:"red",flex:1}}
            header={
              <View >
                <View style={styles.hideButton}> 
                  <Text style={styles.currencyText} >S$</Text>
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
