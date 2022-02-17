import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Donasi from '../../pages/Donasi';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Reward from '../../pages/Reward';

const Tabs = createBottomTabNavigator();

const BottomTabs = (props) => {

    return(
        <Tabs.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
            <Tabs.Screen name='homes' component={Home} options={{tabBarLabel:"Home", tabBarIcon:()=>(<Icon name='home' type='font-awesome' color={"#9724DE"} />)}} />
            <Tabs.Screen name='donasi' component={Donasi} options={{tabBarLabel:"Donasi", tabBarIcon:()=>(<Icon name='donate' type='font-awesome-5' color={"#9724DE"} />)}} />
            <Tabs.Screen name='reward' component={Reward} options={{tabBarLabel:"Reward", tabBarIcon:()=>(<Icon name='gift' type='font-awesome-5' color={"#9724DE"} />)}} />
            <Tabs.Screen name='profil' component={Profil} options={{tabBarLabel:"Profil", tabBarIcon:()=>(<Icon name='user' type='font-awesome' color={"#9724DE"} />)}} />
        </Tabs.Navigator>
    )
}

export default BottomTabs;