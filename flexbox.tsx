import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const FlexBox1 = () =>{
    return (
        <View style = {styles.container}>
            <View style = {styles.box1}/>
            <View style = {styles.box2}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    box1:{
        height:100,
        width:100,
        backgroundColor:'red',
    },
    box2:{
        height:100,
        width:100,
        backgroundColor:'green',
    },
});

export default FlexBox1;