import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Splash from './Splash';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RootStack = createNativeStackNavigator();

function RootStackScreen ({navigation}) {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <RootStack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
            <RootStack.Screen name="SignUp" component={SignUp} options= {{headerShown:false}} />
        </RootStack.Navigator>
    )
}
export default RootStackScreen;