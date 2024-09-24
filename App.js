// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LiveScreen from './screens/LiveScreen';
import CallScreen from './screens/CallScreen';
import HistoryScreen from './screens/HistoryScreen';
import LoginScreen from './screens/LoginScreen'; // Import the login screen
import TopBar from './screens/TopNavBar';
import Account from './screens/Account';
// Tab Navigator
const Tab = createBottomTabNavigator();

// Stack Navigator
const Stack = createStackNavigator();

// Main Tab Navigator for the App
function MainApp() {
  return (
    <>
    <TopBar />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Chat') {
            iconName = 'chat';
          } else if (route.name === 'Live') {
            iconName = 'video';
          } else if (route.name === 'Call') {
            iconName = 'phone';
          } else if (route.name === 'History') {
            iconName = 'history';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF6F61',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Live" component={LiveScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Call" component={CallScreen} options={{ headerShown: false }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
      <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
</>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Hides the header for the login screen
        />
        <Stack.Screen 
          name="MainApp" 
          component={MainApp} 
          options={{ headerShown: false }} // Hides the header for the main app
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
