import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../../assets';

const Register = (props) => {
    return (
        <View>
            <StatusBar animated backgroundColor={"#44981C"} />
            <View style={styles.background}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <Image source={logo} style={styles.imgSize} />

                    <View style={{ paddingTop: normalize(20) }}>
                        <View style={styles.tube}>
                            <TextInput placeholder='Nama Lengkap' placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(10) }} />
                        <View style={styles.tube}>
                            <TextInput placeholder='No Handphone' placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(10) }} />
                        <View style={styles.tube}>
                            <TextInput placeholder='Email' placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(10) }} />
                        <View style={styles.tube}>
                            <TextInput placeholder='Password' placeholderTextColor={"#808080"} secureTextEntry={true} style={{ color: "black" }} />
                        </View>

                        <View style={{ paddingTop: normalize(20) }}>
                            <TouchableOpacity style={styles.btnMasuk} onPress={() => props.navigation.navigate("login")}>
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
        backgroundColor: "#44981C"
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
        color: "black",
    },
    text3: {
        fontSize: normalize(18),
        fontWeight: "Quicksand-Bold",
        color: "#F8C924",
    }
})