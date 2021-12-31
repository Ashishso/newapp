import  React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';     
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';


const Tab = createMaterialBottomTabNavigator();


function MainTabScreen () {
    return (
        <Tab.Navigator
       initialRouteName="Home"
       activeColor="white"
       barStyle={{ backgroundColor: '#41B3A3' }}
       >
      <Tab.Screen
        name="Home"
        component={ HomeScreen }
        options={{
        
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
    />
      <Tab.Screen
        name="Notifications"
        component={DetailsScreen}
        options={{
      
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="search"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color }) => (
            <Icon name="library" color={color} size={26} />
          ),
        }}
      />
       
    </Tab.Navigator>
    )
}

export default MainTabScreen;