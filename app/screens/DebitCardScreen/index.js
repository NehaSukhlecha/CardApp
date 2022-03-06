import React, { Component } from "react";
import { View, Image, Text,  SafeAreaView } from "react-native";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import styles from "./styles";

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
        </SafeAreaView>
      </View>
    );
  }
}

export default DebitCardScreen;
