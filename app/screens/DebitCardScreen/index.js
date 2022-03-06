import React, { Component } from "react";
import { View, Text,  SafeAreaView } from "react-native";
import AppStatusBar from "../../components/AppStatusBar/AppStatusBar";
import styles from "./styles";

class DebitCardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar />
        <SafeAreaView>
         <Text>Profile!</Text>
        </SafeAreaView>
        
      </View>
    );
  }
}

export default DebitCardScreen;
