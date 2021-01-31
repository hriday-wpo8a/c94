import React from 'react';
import {Header, Icon,Badge} from 'react-native-elements';
import {View,Text,StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import HomeScreen from '../screens/HomeScreen'

export const AppDrawerNavigator=  createDrawerNavigator({
    Home:{
        screen:HomeScreen
    },
  
},


{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home' 
})