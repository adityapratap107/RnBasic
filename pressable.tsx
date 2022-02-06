import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

const PressableFunc = () =>{
    return (
        <View style = {styles.container}>
            <Button title='Press Me'
                color= '#33ab97'
                onPress = {()=>{
                    alert("You Pressed me!!!!");
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default PressableFunc;


