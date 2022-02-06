import React from 'react'
import {Text,View,StyleSheet} from 'react-native';

const FlexBox3 = () =>{
    return (
        <View style = {styles.parent}>
            <View style = {styles.container1}/>
            <View style = {styles.container2}/>
            <View style = {styles.container3}/>
            <View style = {styles.container4}/>
            <View style = {styles.container5}/>

        </View>
    );
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignContent:'center',
    },
    container1:{
        height:100,
        width:100,
        backgroundColor:'red',
    },
    container2:{
        height:100,
        width:100,
        backgroundColor:'yellow',
    },
    container3:{
        height:100,
        width:100,
        backgroundColor:'green',
    },
    container4:{
        height:100,
        width:100,
        backgroundColor:'blue',
    },
    container5:{
        height:100,
        width:100,
        backgroundColor:'tomato',
    },
});

export default FlexBox3;