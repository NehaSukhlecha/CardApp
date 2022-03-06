import React, { Component } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavTabs from "./app/config/NavTabs";
 
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
 