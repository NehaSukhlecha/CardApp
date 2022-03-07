import React, { Component } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavTabs from "./app/config/NavTabs";

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
 
 class App extends Component {
   constructor(props) {
     super(props);
   }
   render() {
     return (
      <NavigationContainer>
        <NavTabs />
      </NavigationContainer>
     );
   }
 }
 
 export default App;
 