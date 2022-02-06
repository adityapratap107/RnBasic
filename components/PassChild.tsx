import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';

// PASS CHILDREN
// interface ChildProps{
//     name:string;
//     age:number;
//     isLogin:boolean;
//     children?:string;
// }

// const PassChildFun = ({name,age,isLogin,children}:ChildProps)=>{
//     return(
//         <View>
//             <Text>{name}</Text>
//             <Text>{age}</Text>                
//             <Text>Welcome Guest!!! {children}</Text>
        
            
//         </View>
//     );
// }

// export default PassChildFun;




// If we want to pass one component into another
interface ChildProps{
    name:string;
    age:number;
    isLogin:boolean;
    children?:React.Reactchild;
}

const PassChildFun = ({name,age,isLogin,children}:ChildProps)=>{
    return(
        <SafeAreaView>
            <Text>{name}</Text>
            <Text>{age}</Text>                
            <Text>Welcome Guest!!! {children}</Text>
        
            
        </SafeAreaView>
    );
}

export default PassChildFun;




