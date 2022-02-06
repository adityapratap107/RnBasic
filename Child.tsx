import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';

interface ChildProps{
    name:string;
    age:string;
}

const ChildFun = ({name,age}:ChildProps)=>{
    return(
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    );
}

const Child = ()=>{
    return(
        <SafeAreaView>
            <ChildFun name = {'Aditya'} age={22} />
            <ChildFun name = {'Abhishek'} age={20}/>
        </SafeAreaView>
    );
}
export default Child;