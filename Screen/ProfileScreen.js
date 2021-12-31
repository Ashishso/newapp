import React from 'react';
import {StyleSheet,View,Text,Button,FlatList,Image} from 'react-native';


const ProfileScreen = ({navigation}) => {
    return (
            <View style={styles.container}>
            <View style={styles.header}>
             <Text>Profile Screen</Text>
            </View>
            </View>
        );
    
};


const styles = StyleSheet.create ({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    button: {
        padding: 10,
        margin: 10
    },
    logo: {
        height:200,
        width:200,
        borderRadius:130
    },
    header: {
        flex:2,
        paddingTop:15
    }
    
})

export default ProfileScreen;
