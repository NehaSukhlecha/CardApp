import React, { Component } from "react";
import { View, Image, Text,  SafeAreaView } from "react-native";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import styles from "./styles";

class DebitCardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar />
        <SafeAreaView>
          <Image source={require('../../assets/logo.png')} 
            style={styles.logoImage}/>
          <Text style={styles.screenHeader} >Debit Card</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default DebitCardScreen;
