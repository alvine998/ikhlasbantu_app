import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';

const Profil = (props) => {
    const [statusUser, setStatusUser] = useState('')
    const [nama, setNama] = useState('')
    const [poin, setPoin] = useState(0)

    const getDataUser = async () => {
        await AsyncStorage.getItem("loginKey").then(
            res => {
                axios.get(`http://192.168.18.7:4000/users/mail/${res}`).then(
                    result => {
                        const results = result.data;
                        setStatusUser(results.statususer); setNama(results.nama);
                        setPoin(results.poin);
                        console.log(results);
                    }
                )
            }
        )
    }

    const ajukanDonasi = () => {
        if(statusUser == "not verified"){
            Alert.alert("Silahkan verifikasi data diri")
        } else{
            Alert.alert("Ok")
        }
    }

    const removeLogin = async () => {
        await AsyncStorage.removeItem("loginKey");
        props.navigation.navigate("login");
        console.log("Done Remove");
    }

    useEffect(()=>{
        getDataUser();
    },[])
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.text1}>Profil</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={styles.imgContainer}>
                                <Icon type='font-awesome' name='user' size={normalize(70)} color={"#808080"} />
                            </TouchableOpacity>

                            <View style={styles.container2}>
                                <Text style={styles.text2}>{nama}</Text>
                                <Text style={styles.text2}>{poin} Poin</Text>
                                <TouchableOpacity style={styles.btn1} onPress={() => props.navigation.navigate("akun")}>
                                    <Text style={styles.text3}>Ubah Profil</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lining} />

                    <View style={styles.container}>
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=>props.navigation.navigate("verifikasi")}>
                            <Icon type='font-awesome-5' name='id-card' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Verifikasi Data Diri</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=>ajukanDonasi()}>
                            <Icon type='font-awesome-5' name='hand-holding-usd' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>+ Buat Pengajuan Donasi</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=>props.navigation.navigate("daftar-donasi")}>
                            <Icon type='font-awesome-5' name='book' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Daftar Donasimu</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=>props.navigation.navigate("riwayat-donasi")}>
                            <Icon type='font-awesome-5' name='history' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Riwayat Donasi</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=>props.navigation.navigate("kotak-masuk")}>
                            <Icon type='font-awesome-5' name='envelope' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Kotak Masuk</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={()=>props.navigation.navigate("bantuan")}>
                            <Icon type='font-awesome-5' name='info-circle' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Bantuan</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => removeLogin()}>
                            <Icon type='font-awesome' name='sign-out' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Logout</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <Text style={{ textAlign: "center" }}>Ikhlasbantu App Version 1.0</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Profil;

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
        fontSize: normalize(16),
    },
    text4: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(16),
        paddingLeft: normalize(20)
    },
    text3: {
        fontFamily: "Quicksand-Bold",
        color: "#fff",
        fontSize: normalize(14),
        textAlign: "center"
    },
    imgContainer: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#dfdfdf",
        justifyContent:"center",
        alignItems:"center"
    },
    lining: {
        height: normalize(10),
        backgroundColor: "#dfdfdf",
        marginTop: normalize(20)
    },
    lining2: {
        height: normalize(3),
        backgroundColor: "#dfdfdf",
        marginTop: normalize(10),
        marginBottom: normalize(20)
    },
    container: {
        padding: normalize(20)
    },
    container2: {
        paddingLeft: normalize(50),
        justifyContent: "center",
    },
    btn1: {
        height: normalize(30),
        borderRadius: 10,
        backgroundColor: "#9724DE",
        marginTop: normalize(10),
        justifyContent: "center",
        alignItems: "center",
        width:normalize(150)
    }
})