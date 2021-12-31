import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';


function DetailsScreen  ({navigation})  {
  return (
    <View style={styles.container}>
    <View style={styles.item}>
    <Text>notification screen</Text>
    </View>
    </View>

  )
}


const styles = StyleSheet.create ({
  container:{
     justifyContent:'center',
     alignItems:'center',
     flex:1,
     
  },
  
  item:{
    margin:10
  }

})

export default DetailsScreen;