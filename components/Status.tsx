import React from 'react';
import {View,Text} from 'react-native';


interface ChildProps{
    status:'loading'|'success'|'error';
}

const StatusFun = ({status}:ChildProps)=>{
    let message;
    if(status==='loading')
    {
        message='loading data...';
    }
    else if(status==='success')
    {
        message='data loaded successsfully';
    }
    else if(status==='error')
    {
        message='data loading failed';
    }
    return(
        <View>
                    
            <Text>{message}</Text>
            
        </View>
    );
}

export default StatusFun;




