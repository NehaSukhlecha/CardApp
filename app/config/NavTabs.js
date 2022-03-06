import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DebitCardScreen from '../screens/DebitCardScreen';
import DebitLimitScreen from '../screens/DebitLimitScreen';

const Tab = createMaterialBottomTabNavigator();

const NavTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}>

      <Tab.Screen
        name="Home"
        component={DebitLimitScreen}
        options={{
          tabBarLabel: 'Home',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="home" color={color} size={26} />
        //   ),
      }}/>

      <Tab.Screen
        name="DebitCard"
        component={DebitCardScreen}
        options={{
          tabBarLabel: 'Debit Card',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="bell" color={color} size={26} />
        //   ),
      }}/>

      <Tab.Screen
        name="Payment"
        component={DebitLimitScreen}
        options={{
          tabBarLabel: 'Payment',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="account" color={color} size={26} />
        //   ),
      }}/>

      <Tab.Screen
        name="Credit"
        component={DebitLimitScreen}
        options={{
          tabBarLabel: 'Credit',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="account" color={color} size={26} />
        //   ),
      }}/>
        
      <Tab.Screen
        name="Profile"
        component={DebitLimitScreen}
        options={{
          tabBarLabel: 'Profile',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="account" color={color} size={26} />
        //   ),
      }}/>

    </Tab.Navigator>
  )
}


export default NavTabs