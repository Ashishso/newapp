import React  from 'react';
import {StyleSheet,View,Text,Button,FlatList,Image} from 'react-native';


const ExploreScreen = () => {
        return (
           <View style={styles.container}>
           
               <Text>Library Screen</Text>
           
           </View>
        );
    
};

const styles = StyleSheet.create ({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
    },
    button: {
        padding: 10,
        margin: 10
    },
    logo: {
        height:250,
        width:250,
        borderRadius:130
    }    
})

export default ExploreScreen;
