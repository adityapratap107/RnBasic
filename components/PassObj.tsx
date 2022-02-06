import React from 'react';
import {View,Text} from 'react-native';

interface ChildProps{
    item:{
        name:string;
        age:number;
        isLogin:boolean;
    }
}

// Passing Array list
const PassObjFun = ({item}:ChildProps)=>{
    return(
        <View>
            {   item.isLogin && (
                <View>
                    <Text>Hello {item.name}</Text>
                    <Text>Your Age is: {item.age}</Text>
                </View>
            ) }
            
            {   !item.isLogin && (
                <Text>Welcome Guest!!! Please Login First</Text>
            )
            }
        </View>
    );
}


export default PassObjFun;
