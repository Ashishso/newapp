import React,{useState} from 'react';
import {StyleSheet,View,Text,Button,TextInput,StatusBar,TouchableOpacity,Alert} from 'react-native';

import animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import {AuthContext} from '../Components/context';
import { useTheme } from 'react-native-paper';
import Users from '../model/users';

const SignIn = ({navigation}) => {

   const [data, setData]  =  useState({
       username:'',
       password:'',
       check_textInputChange: false,
       secureTextEntry: true       
   })

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
       if (val.length !==  0) {
           setData({
               ...data,
               username:val,
               check_textInputChange:true
           });
       } else {
            setData({
               ...data,
               username:val,
               check_textInputChange:false
            });
       }
   }

 const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val,
        });
   }

const updateSecureTextEntry = () => {
    setData({
        secureTextEntry: !data.secureTextEntry
    });
}

const loginHandle = (userName, password) => {

    const foundUser = Users.filter( item => {
        return userName == item.username && password == item.password;
    } );

    if ( foundUser.length == 0 ) {
        Alert.alert('Invalid user!', 'please check.....username & password',[
            {text:' okay'}
        ]);
        return;
    } 
    signIn(foundUser); 

}

 const { colors } = useTheme();


    return(  
      <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/> 
        <View style={styles.header}>
           <Text style={styles.text_header}> Welcome! </Text>
        </View>
           <View style={[styles.footer, {
               backgroundColor: colors.background
           }]}>
                 <Text style={[styles.text_footer, {
                     color: colors.text
                 }]}> E-mail </Text>
          <View style={styles.action}>
              <FontAwesome 
                name='user-o'
                color={colors.text}
                 size={20}
                 />
             <TextInput 
              placeholder='Userid'
               style={[styles.textInput, {
                   color: colors.text
               }]}
              autoCapitalize='none'
              onChangeText={(val) => textInputChange(val)}
               />
              {data.check_textInputChange ? 
             <Feather 
             name='check-circle'
             color='green'
             size={20}
             />
             : null }
          </View>

        <Text style={[styles.text_footer , {
            color: colors.text,
            marginTop:35
        }]}>  Password </Text>  
       <View style={styles.action}>
          <FontAwesome 
          name='lock'
          color={colors.text}
          size={20}
          />
       <TextInput 
         placeholder='Password'
         style={[styles.textInput, {
             color: colors.text
         }]}
         autoCapitalize='none'
         secureTextEntry={data.secureTextEntry ? true : false}
        onChangeText={(val) => handlePasswordChange(val)}
        />
        <TouchableOpacity
           onPress={updateSecureTextEntry}
        >
        {data.secureTextEntry ? 
        <Feather 
         name='eye-off'
         size={20}
         color='gray'
        />
         : 
         <Feather 
         name='eye'
         size={20}
         color='gray'
        />
        }
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
         <TouchableOpacity onPress={() => {loginHandle (data.username, data.password)}} style={[styles.signIn, {
             marginBottom:30
         }]}>
              <Text style={styles.textSign}>SignIn</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={[styles.signIn, {
             backgroundColor:'#fff', borderWidth:1
         }]}>
          <Text style={[styles.textSign, {
              color:'black'
          }]}>SignUp</Text>
         </TouchableOpacity>
        </View>
      </View>
 </View>
    )
}

const styles = StyleSheet.create({
    container  : {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
       
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#009387',
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff',  
    },
  });

export default SignIn;