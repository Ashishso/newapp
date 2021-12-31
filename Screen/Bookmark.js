import React from 'react';
import {StyleSheet,View,Text} from 'react-native';


const Bookmark = () => {
    return(
    <View style={styles.container}>
    <Text> Bookmark Screen </Text>
    </View>
    )
}

const styles= StyleSheet .create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Bookmark;