import React from 'react';
import {View,Text} from 'react-native';

interface ChildProps{
    name:string;
    age:number;
}

// Passing simple props using interface without using object destructuring
// const Child = (props:ChildProps) => {
//     return (
//         <View>
//             <Text>{props.name}</Text>
//             <Text>{props.age}</Text>
//         </View>
//     );
// }


// Passing props using object destructuring
const PassComFun = ({name,age}:ChildProps) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>            
        </View>
    );
}

export default PassComFun;