import React from 'react';
import {Header, Icon,Badge} from 'react-native-elements';
import { View,Text ,StyleSheet} from 'react-native';
import db from '../config'
import firebase from 'firebase';



export default class MyHeader extends React.Component{
 
render(){
    return(
        <Header
        leftComponent = {<Icon name = 'bars' type = 'font-awesome' color = '#696969' onPress = {()=>this.props.navigation.toggleDrawer()}/>}
        centerComponent={{text:this.props.title,style:{color:'#90a5a9',fontSize:20,fontWeight:"bold"}}}
        backgroundColor="#eaf8fe"
        />

    )}
}
