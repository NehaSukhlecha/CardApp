import React from "react";
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DebitCardScreen from '../screens/DebitCardScreen';
import DebitLimitScreen from '../screens/DebitLimitScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

const NavTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="DebitCard"
      activeColor="#01D167"
      inactiveColor="#DDDDDD"
      labelStyle={{ fontSize: 12 }}>

      <Tab.Screen
        name="Home"
        component={DebitLimitScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#ffffff',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/logo.png')}
              style={{width: 24, height: 24, tintColor: color}}
            />
          ),
      }}/>

      <Tab.Screen
        name="DebitCard"
        component={DebitCardScreen}
        options={{
          tabBarLabel: 'Debit Card',
          tabBarColor: '#ffffff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contactless-payment" color={color} size={24} />
          ),
      }}/>

      <Tab.Screen
        name="Payment"
        component={DebitLimitScreen}
        options={{
          tabBarLabel: 'Payment',
          tabBarColor: '#ffffff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="credit-card" color={color} size={24} />
          ),
      }}/>

      <Tab.Screen
        name="Credit"
        component={DebitLimitScreen}
        options={{
          tabBarLabel: 'Credit',
          tabBarColor: '#ffffff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="arrow-up-drop-circle" color={color} size={24} />
          ),
      }}/>
        
      <Tab.Screen
        name="Profile"
        component={DebitLimitScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#ffffff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-man-profile" color={color} size={24} />
          ),
      }}/>

    </Tab.Navigator>
  )
}


export default NavTabs