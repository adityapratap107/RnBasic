import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const FlexBox2 = () =>{
    return (
        <View style = {styles.parent}>
            <View style = {styles.container1}/>
            <Text style = {styles.text1}>Text 1</Text>
            <Text style = {styles.text2}>Text 2</Text>
            <View style = {styles.container2}/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    parent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container1:{
        backgroundColor:'green',
        height:100,
        width:100,
    },
    container2:{
        backgroundColor:'red',
        height:100,
        width:100,
    },
    text1:{
        color:'red',
        backgroundColor:'yellow',
        alignSelf:'flex-start',
    },
    text2:{
        color:'blue',
        backgroundColor:'grey',
        alignSelf:'flex-end',
    }
});

export default FlexBox2;