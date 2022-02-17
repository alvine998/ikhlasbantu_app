import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';

const Profil = (props) => {
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.text1}>Profil</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={styles.imgContainer}>

                            </TouchableOpacity>

                            <View style={styles.container2}>
                                <Text style={styles.text2}>Agustian Adrian</Text>
                                <Text style={styles.text2}>0 Poin</Text>
                                <TouchableOpacity style={styles.btn1} onPress={()=>props.navigation.navigate("akun")}>
                                    <Text style={styles.text3}>Ubah Profil</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lining}/>

                    <View style={styles.container}>
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <Icon type='font-awesome-5' name='history' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Riwayat Donasimu</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <Icon type='font-awesome-5' name='envelope' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Kotak Masuk</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <Icon type='font-awesome-5' name='info-circle' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Bantuan</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <Icon type='font-awesome' name='sign-out' size={normalize(30)} color={"#9724DE"} />
                            <Text style={styles.text4}>Logout</Text>
                        </TouchableOpacity>

                        <View style={styles.lining2} />
                        <Text style={{textAlign:"center"}}>Ikhlasbantu App Versi 1.0</Text>
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
        paddingLeft:normalize(20)
    },
    text3: {
        fontFamily: "Quicksand-Bold",
        color: "#fff",
        fontSize: normalize(14),
        textAlign:"center"
    },
    imgContainer: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#dfdfdf"
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
        marginBottom:normalize(20)
    },
    container: {
        padding: normalize(20)
    },
    container2: {
        paddingLeft: normalize(80),
        justifyContent: "center",
    },
    btn1: {
        height: normalize(30),
        borderRadius: 10,
        backgroundColor: "#9724DE",
        marginTop: normalize(10),
        justifyContent:"center",
        alignItems:"center"
    }
})