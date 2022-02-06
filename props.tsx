import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import PassComFun from './components/PassCom';
import OptParFun from './components/OptPar';
import PassObjFun from './components/PassObj';
import PassChildFun from './components/PassChild';
import StatusFun from './components/Status';

// COMPONENT PassCom.tsx

// const Dynamic = () =>{
//     return(
//         <SafeAreaView>
//             <PassComFun name = {'Aditya Rana'} age={21} />
//             <PassComFun name = {'Akash singh'} age={23} />            
//         </SafeAreaView>
//     );
// }
// export default Dynamic;



// COMPONENT OptPar.tsx
const Dynamic = () =>{
    return(
        <SafeAreaView>
            <OptParFun name = {'Aditya Rana'} age={24} isLogin={false}/>
            <OptParFun name = {'Akash singh'} age={20} isLogin={true}/>            
        </SafeAreaView>
    );
}
export default Dynamic;




// Let's Pass Array List i.e objects
// let Children = [{
//     name:'Aditya Rana',
//     age:20,
//     isLogin:true
// },{
//     name:'Rahul Singh ',
//     age:22,
//     isLogin:false
// }
// ]

// const Dynamic = () =>{
//     return(
//         <SafeAreaView>
//             {
//                 Children.map(child=>(<PassObjFun item={child}/>))
//             }          
//         </SafeAreaView>
//     );
// }

// export default Dynamic;





// Pass Children
// const Dynamic = () =>{
//     return(
//         <SafeAreaView>
//             <PassChildFun name = {'Aditya Rana'} age={24} isLogin={true}>
//                 Hello Child Here
//             </PassChildFun>
//             <PassChildFun name = {'Akash singh'} age={21} sLogin={false}/>            
//         </SafeAreaView>
//     );
// }
// export default Dynamic;



// Pass one component into another
// const Dynamic = () =>{
//     return(
//         <SafeAreaView>
//             <PassChildFun name = {'Aditya Rana'} age={24} isLogin={true}>
//                <Text> Hello Child Here... </Text>
//             </PassChildFun>
//             <PassChildFun name = {'Akash singh'} age={21} sLogin={false}/>            
//         </SafeAreaView>
//     );
// }
// export default Dynamic;




// Passing child inside a child
// const Dynamic = () =>{
//     return(
//         <SafeAreaView>
//             <PassChildFun name = {'Aditya Rana'} age={24} isLogin={true}>
//                 <PassChildFun name = {'Akash singh'} age={21} sLogin={false}/>            
//             </PassChildFun>
//         </SafeAreaView>
//     );
// }
// export default Dynamic;




// Checking status
// const Dynamic = ()=>{
//     return(     
//         <SafeAreaView>
//             <StatusFun status='success'>
//             </StatusFun>
//         </SafeAreaView>
//     );
// }
// export default Dynamic;