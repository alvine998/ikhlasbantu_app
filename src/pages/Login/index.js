import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../../assets';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendLogin = async (mail) => {
        await AsyncStorage.setItem("loginKey", mail);
        props.navigation.navigate("home");
        console.log("login in")
    }

    const onLogin = (mail) => {
        const data = {
            email: email,
            password: password
        }
        axios.post(`https://ikhlasbantu.herokuapp.com/users/login`, data).then(
            res => {
                console.log("Berhasil Login", res.data);
                sendLogin(mail);
                setEmail(""); setPassword("");
            }
        ).catch(err => {
            Alert.alert("Username atau Password Salah");
            console.log(err)
        })
    }

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} />
            <View style={styles.background}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <Image source={logo} style={styles.imgSize} />

                    <View style={{ paddingTop: normalize(20) }}>
                        <View style={styles.tube}>
                            <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder='Email' placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(10) }} />
                        <View style={styles.tube}>
                            <TextInput value={password} onChangeText={(e)=>setPassword(e)} placeholder='Password' placeholderTextColor={"#808080"} secureTextEntry={true} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(20) }}>
                            <TouchableOpacity style={styles.btnMasuk} onPress={() => onLogin(email)}>
                                <Text style={styles.text1}>Masuk</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingTop: normalize(10) }}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={styles.text2}>Belum punya akun? </Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate("register")}>
                                    <Text style={styles.text3}>Daftar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    imgSize: {
        width: normalize(250),
        height: normalize(250),
    },
    background: {
        height: "100%",
        backgroundColor: "#9724DE"
    },
    tube: {
        width: normalize(280),
        borderRadius: 10,
        height: normalize(40),
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#fff",
        paddingLeft: normalize(10),
        backgroundColor: "white"
    },
    btnMasuk: {
        width: normalize(280),
        borderRadius: 10,
        height: normalize(40),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8C924"
    },
    text1: {
        fontSize: normalize(20),
        color: "black",
        fontFamily: "Quicksand-Bold"
    },
    text2: {
        fontSize: normalize(16),
        fontFamily: "Quicksand-Bold",
        color: "white",
    },
    text3: {
        fontSize: normalize(18),
        fontFamily: "Quicksand-Bold",
        color: "#F8C924",
    }
})