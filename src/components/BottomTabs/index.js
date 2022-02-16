import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Home from '../../pages/Home';

const Tabs = createBottomTabNavigator();

const BottomTabs = (props) => {

    return(
        <Tabs.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
            <Tabs.Screen name='homes' component={Home} options={{tabBarLabel:"Home", tabBarIcon:()=>(<Icon name='home' type='font-awesome' color={"#9724DE"} />)}} />
            <Tabs.Screen name='homess' component={Home} options={{tabBarLabel:"Donasi", tabBarIcon:()=>(<Icon name='donate' type='font-awesome-5' color={"#9724DE"} />)}} />
            <Tabs.Screen name='homessss' component={Home} options={{tabBarLabel:"Reward", tabBarIcon:()=>(<Icon name='gift' type='font-awesome-5' color={"#9724DE"} />)}} />
            <Tabs.Screen name='homesss' component={Home} options={{tabBarLabel:"Profil", tabBarIcon:()=>(<Icon name='user' type='font-awesome' color={"#9724DE"} />)}} />
        </Tabs.Navigator>
    )
}

export default BottomTabs;