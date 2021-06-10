import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
//import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
//import Button from '../components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { logoutUser } from '../api/auth-api'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Root } from 'native-base';

import Home from './HomeScreen'
import Settings from './AccountScreen'

const Dashboard = () => {
  function HomeScreen() {
    return (
      <Home/>

    )
  }

  function SettingsScreen() {
    return (
    <Settings/>
    )
  }

  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'person' : 'person-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  amount:{
    fontSize: 40,
  },
  buttonContainer: {
    flexDirection : "row",
    marginHorizontal : 10
  }
})
