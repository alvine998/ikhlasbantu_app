import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { logo } from './src/assets';
import BottomTabs from './src/components/BottomTabs';
import Akun from './src/pages/Akun';
import Donasi from './src/pages/Donasi';
import Home from './src/pages/Home';
import Intro from './src/pages/Intro';
import Login from './src/pages/Login';
import Profil from './src/pages/Profil';
import Register from './src/pages/Register';
import Reward from './src/pages/Reward';
import Splash from './src/pages/Splash';
import Verifikasi from './src/pages/Verifikasi';

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
        <Stack.Screen name='profil' component={Profil}/>
        <Stack.Screen name='akun' component={Akun}/>
        <Stack.Screen name='reward' component={Reward}/>
        <Stack.Screen name='donasi' component={Donasi}/>
        <Stack.Screen name='verifikasi' component={Verifikasi}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Register/>
    // </View>
  );
}

export default App;