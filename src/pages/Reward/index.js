import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

const Reward = () => {
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.text1}>Rewards</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text2}>Belum Ada Rewards {"\n"}Tetap Semangat</Text>
                </View>
            </View>
        </View>
    );
}

export default Reward;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    imgSize: {
        height: normalize(40),
        width: normalize(40)
    },
    header: {
        height: normalize(50),
        backgroundColor: "#9724DE",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: normalize(20)
    },
    text1: {
        fontFamily: "Quicksand-Bold",
        color: "#fff",
        fontSize: normalize(18),
    },
    text2: {
        fontFamily: "Quicksand-Bold",
        color: "#9724DE",
        fontSize: normalize(24),
        textAlign:"center"
    },
    container:{
        padding:normalize(20),
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})