import React from 'react';
import {View,Text} from 'react-native';


// CONDITIONAL RENDERING WITH OPTIONAL PARAMETER

interface ChildProps{
    name:string;
    age:number;
    isLogin?:boolean;
}

// const Child = ({name,age,isLogin}:ChildProps)=>{
//     return(
//         <View>
//             { isLogin ?
//                 (<View>
//                     <Text>{name}</Text>
//                     <Text>{age}</Text>
//                 </View>
//                 ) : (
//                     <Text>Welcome Guest!</Text>
//                 )
//             }
            
//         </View>
//     );
// }

// ANOTHER WAY
const OptParFun = ({name,age,isLogin}:ChildProps)=>{
    return(
        <View>
            {   isLogin && (
                <View>
                    <Text>{name}</Text>
                    <Text>{age}</Text>
                </View>
            ) }

            {   !isLogin && (
                <Text>Welcome Guest!!!</Text>
            )
            }
            
        </View>
    );
}


export default OptParFun;