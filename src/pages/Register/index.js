import React, { useState } from 'react';
import { Alert, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../../assets';
import axios from 'axios';

const Register = (props) => {

    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const saveData = () => {
        if(!nama){
            Alert.alert("Nama tidak boleh kosong")
        } else if(!nohp){
            Alert.alert("No Hp tidak boleh kosong")
        } else if(!email){
            Alert.alert("Email tidak boleh kosong")
        } else if(!password){
            Alert.alert("Password tidak boleh kosong")
        } else {
            const data = {
                nama: nama,
                nohp: nohp,
                email: email,
                password: password,
            }
            axios.post(`http://192.168.18.7:4000/users`, data).then(
                res => {
                    console.log("Sukses Register", res.data);
                    Alert.alert("Sukses Daftar");
                    setEmail(""); setNama(""); setNohp("");
                    setPassword("");
                }
            )
        }
    }

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} />
            <View style={styles.background}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <Image source={logo} style={styles.imgSize} />

                    <View style={{ paddingTop: normalize(20) }}>
                        <View style={styles.tube}>
                            <TextInput value={nama} onChangeText={(e)=>setNama(e)} placeholder='Nama Lengkap' placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(10) }} />
                        <View style={styles.tube}>
                            <TextInput keyboardType='phone-pad' maxLength={12} value={nohp} onChangeText={(e)=>setNohp(e)} placeholder='No Handphone' placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(10) }} />
                        <View style={styles.tube}>
                            <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder='Email' placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(10) }} />
                        <View style={styles.tube}>
                            <TextInput value={password} onChangeText={(e)=>setPassword(e)} placeholder='Password' placeholderTextColor={"#808080"} secureTextEntry={true} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(20) }}>
                            <TouchableOpacity style={styles.btnMasuk} onPress={() => saveData()}>
                                <Text style={styles.text1}>Daftar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingTop: normalize(10) }}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={styles.text2}>Sudah punya akun? </Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                                    <Text style={styles.text3}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    imgSize: {
        width: normalize(150),
        height: normalize(150),
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