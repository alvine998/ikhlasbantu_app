import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../assets';

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.dispatch(StackActions.replace("login"))
        }, 1000)
    })
    return (
        <View>
            <View style={styles.background}>
                <StatusBar animated backgroundColor={"#44981C"} />
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
        backgroundColor: "#44981C"
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