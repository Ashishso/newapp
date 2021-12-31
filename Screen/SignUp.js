import React,{useState} from 'react';
import {StyleSheet,View,Text,Button,TextInput,StatusBar,TouchableOpacity} from 'react-native';


import animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";


const SignUp = ({navigation}) => {

   const [ data, setData ]  =   useState({
       Email:'',
       Password:'',
       confirm_password:'',
       check_textInputChange:false,
       secureTextEntry:true,
       confirm_secureTextEntry:true,
   })

   const textInputChange = (val) => {
       if (val.length !==  0) {
           setData({
               ...data,
               email:val,
               check_textInputChange: true
           });
       } else {
            setData({
               ...data,
               email:val,
               check_textInputChange: false
            });
       }
   }


   const handlePasswordChange = (val) => {
        setData({
            ...data,
            Password:val,

        });
   }

   const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
           confirm_password:val,

        });
   }

const updateSecureTextEntry = () => {
    setData({
     ...data,
     secureTextEntry: !data.secureTextEntry
    })
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    })
}


    return(
      <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle='light-content'/>
        <View style={styles.header}>
           <Text style={styles.text_header}> Register Now</Text>
        </View>
           <View style={styles.footer}>
                 <Text style={styles.text_footer}> E-mail </Text>
          <View style={styles.action}>
              <FontAwesome 
                name='user-o'
                 size={20}
                 />
             <TextInput 
              placeholder='Userid'
               style={styles.textInput}
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
            marginTop:35
        }]}>  Password </Text>  
       <View style={styles.action}>
          <FontAwesome 
          name='lock'
          size={20}
          
          />
       <TextInput 
         placeholder='Password'
         style={styles.textInput}
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

         <Text style={[styles.text_footer , {
            marginTop:35
        }]}> confirm Password </Text>  
       <View style={styles.action}>
          <FontAwesome
          name='lock'
          size={20}
          
          />
       <TextInput 
         placeholder='confirm Password'
         style={styles.textInput}
         autoCapitalize='none'
         secureTextEntry={data.confirm_secureTextEntry ? true : false}
         onChangeText={(val) => handleConfirmPasswordChange(val)}
        />
        <TouchableOpacity
           onPress={updateConfirmSecureTextEntry}
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
         <TouchableOpacity style={[styles.signIn, {
             marginBottom:30
         }]}>
              <Text style={styles.textSign}>SignUp</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={[styles.signIn, {
             backgroundColor:'#fff', borderWidth: 1
         }]}>
          <Text style={[styles.textSign, {
              color:'black'
          }]}>SignIn</Text>
         </TouchableOpacity>
        </View>
      </View>
 </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
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
        color:'#fff'
        
    },
    
  });



