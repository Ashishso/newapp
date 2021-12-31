import React,{Components,useState,useEffect,fragment} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer,
       DefaultTheme as NavigationDefaultTheme,
        DarkTheme as NavigationDarkTheme
        } from '@react-navigation/native';
import {Provider as PaperProvider,
       DefaultTheme as PaperDefaultTheme, 
       DarkTheme as PaperDarkTheme
       } from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';     
import MainTabScreen from './Screen/MainTabScreen';
import Support from './Screen/Support';
import Settings from './Screen/Settings';
import Bookmark from './Screen/Bookmark';
import RootStackScreen from './Screen/RootStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext}  from './Components/context';

import {DrawerContent} from './Screen/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
   
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  
const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const CustumDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background:'#ffffff',
    text:'#333333'
  }
}

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background:'#333333',
    text:'#ffffff'
  }
}

const theme = isDarkTheme ? CustomDarkTheme : CustumDefaultTheme;

const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading:false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading:false,
        };
      case 'LOGOUT':
        return {
           ...prevState,
           userName: null,
           userToken: null,
          isLoading:false,
        }; 
      case 'REGISTER':
        return {
           ...prevState,
           userName:action.id,
           userToken:action.token,
          isLoading:false,
        };       
    }
};

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

   const authContext = React.useMemo(() => ({
     signIn: async(foundUser) => {
      // setUserToken('Ashish');
      // setIsLoading(false);
   const userToken = String(foundUser[0].userToken);
   const userName = foundUser[0].username; 
        try {
          userToken = 'ashish';
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) { 
          console.log(e);
        }       
     // console.log('user token: ', userToken);
      dispatch({ type:'LOGIN', id: userName, token: userToken });
     },
     signOut: async() => {
       // setUserToken(null);
       // setIsLoading(false);
       try {
          await AsyncStorage.removeItem('userToken');
        } catch(e) {
          console.log(e);
        }
       dispatch({ type:'LOGOUT' })
      
     },
     signUp: () => {
     //  setUserToken('Ashish');
     //  setIsLoading(false);
     },
     toggleTheme : () => {
       setIsDarkTheme( isDarkTheme => !isDarkTheme )
     }
   }))

   useEffect(() => {
     setTimeout(async() => {
       // setIsLoading(false);
       let userToken;
       userToken = null;
       try{
          userToken = await AsyncStorage.getItem('userToken');
        } catch(e) {
          console.log(e);
        }
     //  console.log('user token: ', userToken);
       dispatch({type:'REGISTER', token: userToken })
     }, 1000);
   }, [])

   if(loginState.isLoading) {
     return (
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
             <ActivityIndicator size='large' color="#009387"/>
       </View>
     )
   }

return(
  <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
       { loginState.userToken !== null ? (
         <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="Home" screenOptions={{headerStyle : { backgroundColor: "#41B3A3"}} }>   
                       <Drawer.Screen name="LoginApp" component={MainTabScreen}/>    
                       <Drawer.Screen name="Bookmark" component={Bookmark} options={{headerShown:false}}/> 
                       <Drawer.Screen name="Setting" component={Settings} options={{headerShown:false}}/> 
                       <Drawer.Screen name="Support" component={Support} options={{headerShown:false}}/>        
         </Drawer.Navigator>        
       )
       :
      <RootStackScreen />       
       }
      </NavigationContainer> 
      
     </AuthContext.Provider>
    </PaperProvider> 
    );
  }

export default App;




