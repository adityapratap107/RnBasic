import React from 'react'
import {Text,View,StyleSheet} from 'react-native';

const FlexBox4 = () =>{
    return (
        <View style = {styles.parent}>
            <View style = {styles.container1}/>
            <View style = {styles.container2}/>
            <View style = {styles.container3}/>
            <View style = {styles.container4}/>
            

        </View>
    );
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        flexDirection:'row-reverse',
        justifyContent:'center',
        alignItems:'baseline',
    },
    container1:{
        height:100,
        width:50,
        backgroundColor:'red',
    },
    container2:{
        height:200,
        width:60,
        backgroundColor:'yellow',
    },
    container3:{
        height:300,
        width:70,
        backgroundColor:'green',
    },
    container4:{
        height:400,
        width:80,
        backgroundColor:'blue',
    },
  
});

export default FlexBox4;