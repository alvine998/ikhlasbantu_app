import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../assets';

const Splash = (props) => {
    const [log, setLog] = useState('');
    const getLogin = async () => {
        await AsyncStorage.getItem("loginKey").then(
            res => {
                setLog(res)
            }
        )

        if(log == '' || log == null){
            setTimeout(() => {
                props.navigation.dispatch(StackActions.replace("intro"))
            }, 1500)
        } else {
            setTimeout(() => {
                props.navigation.dispatch(StackActions.replace("home"))
            }, 1500)
        }
    }

    useEffect(() => {
        getLogin()
    })

    return (
        <View>
            <View style={styles.background}>
                <StatusBar animated backgroundColor={"#9724DE"} />
                <View style={styles.objCenter}>
                    <Image source={logo} style={styles.imgSize} />
                </View>
            </View>
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#9724DE"
    },
    imgSize: {
        width: normalize(250),
        height: normalize(250)
    },
    objCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})