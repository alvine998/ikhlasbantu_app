import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { logo } from './src/assets';
import BottomTabs from './src/components/BottomTabs';
import Home from './src/pages/Home';
import Intro from './src/pages/Intro';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Splash from './src/pages/Splash';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ props.showRealApp == true ? 'login' : 'intro'} screenOptions={{headerShown:false}}>
        <Stack.Screen name='splash' component={Splash}/>
        <Stack.Screen name='intro' component={Intro}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='register' component={Register}/>
        <Stack.Screen name='home' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Register/>
    // </View>
  );
}

export default App;