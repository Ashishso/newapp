import React from 'react';
import {StyleSheet,View,Text,Button,FlatList,StatusBar} from 'react-native';
import { useTheme } from '@react-navigation/native';
 
function HomeScreen  ({navigation})  {
 
   const {colors} = useTheme();
  
   const theme = useTheme();

        return (
            <View style= {styles.container}>
            <StatusBar backgroundColor="#009387" barStyle= { theme.dark ? "light-content" : "dark-content"}/>
            <Text style={{color: colors.text}}> HomeScreen </Text>
            </View>

        );
}

const styles = StyleSheet.create ({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    button: {
        padding: 10,
        margin: 10
    }
    
})

export default HomeScreen;