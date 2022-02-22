import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { logo } from './src/assets';
import BottomTabs from './src/components/BottomTabs';
import Akun from './src/pages/Akun';
import Bantuan from './src/pages/Bantuan';
import DaftarDonasi from './src/pages/DaftarDonasi';
import DetailDonasi from './src/pages/DetailDonasi';
import Donasi from './src/pages/Donasi';
import Bencana from './src/pages/Donasi/BencanaAlam';
import Kesehatan from './src/pages/Donasi/Kesehatan';
import Lainlain from './src/pages/Donasi/Lainlain';
import Sedekah from './src/pages/Donasi/Sedekah';
import Home from './src/pages/Home';
import Intro from './src/pages/Intro';
import KotakMasuk from './src/pages/KotakMasuk';
import Login from './src/pages/Login';
import Profil from './src/pages/Profil';
import Register from './src/pages/Register';
import Reward from './src/pages/Reward';
import RiwayatDonasi from './src/pages/RiwayatDonasi';
import Splash from './src/pages/Splash';
import Verifikasi from './src/pages/Verifikasi';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"splash"} screenOptions={{headerShown:false}}>
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
        <Stack.Screen name='kotak-masuk' component={KotakMasuk}/>
        <Stack.Screen name='bantuan' component={Bantuan}/>
        <Stack.Screen name='riwayat-donasi' component={RiwayatDonasi}/>
        <Stack.Screen name='daftar-donasi' component={DaftarDonasi}/>
        <Stack.Screen name='donasi-kesehatan' component={Kesehatan}/>
        <Stack.Screen name='donasi-sedekah' component={Sedekah}/>
        <Stack.Screen name='donasi-bencana' component={Bencana}/>
        <Stack.Screen name='donasi-lainlain' component={Lainlain}/>
        <Stack.Screen name='detail-donasi' component={DetailDonasi}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Register/>
    // </View>
  );
}

export default App;