// import React from 'react';
// import { StatusBar, Text, View } from 'react-native';

// const Intro = (props) => {
//     return (
//         <View>
//             <StatusBar animated backgroundColor={"#44981C"} />
//             <Text>Hello</Text>
//         </View>
//     )
// }

// export default Intro;

import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import normalize from 'react-native-normalize';
import { logo } from '../../assets';

const Intro = (props) => {

    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: `Berat Di Dunia Ringan Di Akhirat`,
            image: logo,
            backgroundColor: '#9724DE',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Bahagia Mereka Surganya Kita',
            image: logo,
            backgroundColor: '#9724DE',
        },
    ];

    const [showRealApp, setShowRealApp] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <View style={item.key == 1 ? styles.background : { backgroundColor: "#fff", height: "100%" }}>
                {/* <Text style>{item.title}</Text> */}
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: normalize(130) }}>
                    <Image source={item.image} style={styles.imgSize} />
                </View>
                <View style={item.key == 1 ? {paddingLeft:normalize(50), paddingRight:normalize(50), paddingTop:normalize(50)} : {paddingLeft:normalize(40), paddingRight:normalize(40), paddingTop:normalize(50)}}>
                    <Text style={ item.key == 1 ? styles.text1 : styles.text2}>{item.text}</Text>
                </View>
            </View>
        );
    }

    const renderDone = () => {
        return (
            <View>
                <Text style={{ color: "black", fontSize: normalize(20) }}>Done</Text>
            </View>
        )
    }

    return (
        <AppIntroSlider renderItem={renderItem} data={slides} onDone={() => props.navigation.navigate("login")} renderDoneButton={renderDone} />
    )
}

export default Intro;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#9724DE",

    },
    imgSize: {
        width: normalize(200),
        height: normalize(200)
    },
    objCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text1: {
        fontSize: normalize(26),
        textAlign: "center",
        fontFamily:"Quicksand-Bold",
        color:"white"
    },
    text2: {
        fontSize: normalize(26),
        textAlign: "center",
        fontFamily:"Quicksand-Bold",
        color:"black"
    },
    dot1: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#fcd206"
    },
    dot2: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#dfdfdf",
        marginLeft: normalize(10)
    }
})