import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { emptyMessage } from '../../assets';

const RiwayatDonasi = (props) => {
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Riwayat Donasi</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <Image source={emptyMessage} style={styles.imgSize} />
                        <View>
                            <Text style={styles.text2}>Belum Ada Riwayat Donasi</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default RiwayatDonasi;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    imgSize: {
        height: normalize(200),
        width: normalize(200)
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
        fontSize: normalize(20),
    },
    container: {
        padding: normalize(20),
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(150)
    }
})