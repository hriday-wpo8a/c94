import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import MyHeader from '../Components/MyHeader'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import call  from 'react-native-phone-call'

export default class HomeScreen extends React.Component{
    callPolice=()=>{
        const args={
            number:'8928555687',
            prompt:true
        }
        call(args).catch(console.error)
    }
 render(){
     return(
         <View>
              <SafeAreaProvider>
              <MyHeader title = "Home" navigation = {this.props.navigation}/>
              </SafeAreaProvider>
              <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}> 
              <TouchableOpacity style = {{borderWidth:2,backgroundColor: "orange",width:200,height:30,fontsize:25,marginTop:100,fontWeight:'300',alignItems:'center',alignSelf:'center'}}
              onPress = {()=>{this.callPolice()}}
              >
                  <Text>Call Police</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{borderWidth:2,backgroundColor: "orange",width:200,height:30,fontsize:25,marginTop:100,fontWeight:'300',alignItems:'center',alignSelf:'center'}}>
                  <Text>Call Ambulance</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{borderWidth:2,backgroundColor: "orange",width:200,height:30,fontsize:25,marginTop:100,fontWeight:'300',alignItems:'center',alignSelf:'center'}}>
                  <Text>Call fire brigade</Text>
              </TouchableOpacity>
              

              
              </View>
         </View>
     )
 }

}
