import React from "react";
import { StatusBar, View } from "react-native";
import styles from "./styles";

class AppStatusBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={"transparent"} />
      </View>
    );
  }
}
export default AppStatusBar;
