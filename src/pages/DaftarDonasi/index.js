import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { emptyMessage } from '../../assets';

const DaftarDonasi = (props) => {
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.text1}>Daftar Donasi</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <Image source={emptyMessage} style={styles.imgSize} />
                        <View>
                            <Text style={styles.text2}>Kamu Belum Membuat Pengajuan Donasi Apapun</Text>
                        </View>

                        <TouchableOpacity onPress={()=>props.navigation.navigate("home")}>
                            <View style={styles.btnBuat}>
                                <Text style={styles.text1}>Buat Pengajuan Donasi</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default DaftarDonasi;

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
    container:{
        padding:normalize(20),
        justifyContent:"center",
        alignItems:"center",
        marginTop:normalize(150)
    },
    btnBuat:{
        width:normalize(280),
        height:normalize(50),
        backgroundColor:"#9724DE",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:normalize(20)
    }
})