import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

const ImageFunc = () =>{
    return(
        <View style = {styles.container}>
            <Image
            style={styles.logo}
            source={
                require('../images/reactlogo.png')
            }
            />

            <Image style = {styles.jslogo}
                blurRadius={2}
                fadeDuration={6000}
                source = {{
                    uri:'https://as1.ftcdn.net/v2/jpg/03/86/45/96/1000_F_386459614_7JRoaj5LBSbum74i1LXf3oaoMnxQwJdu.jpg'
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        height:100,
        width:100,
    },
    jslogo:{
        height:100,
        width:100,
        
    }
})

export default ImageFunc;