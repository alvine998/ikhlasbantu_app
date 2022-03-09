import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import NumberFormat from 'react-number-format';
import { emptyMessage } from '../../assets';

const DaftarDonasi = (props) => {
    const [collect, setCollect] = useState([]);

    useEffect(() => {
        getDataUser();
    }, [])

    const getDataUser = async () => {
        await AsyncStorage.getItem('loginKey').then(
            res => {
                axios.get(`http://192.168.18.7:4000/users/mail/${res}`).then(
                    result => {
                        const results = result.data;
                        const id = {
                            iduser: results._id
                        };
                        console.log(results._id)
                        axios.post(`http://192.168.18.7:4000/donasis/userid`, id).then(
                            resp => {
                                const collect = resp.data;
                                setCollect(collect);
                                console.log("Sukses", collect);
                            }
                        )
                    }
                )
            }
        )
    }
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Daftar Donasi</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        {
                            collect ? (
                                collect.map((e, i) => (
                                    <TouchableOpacity key={i} style={{ flexDirection: "row" }} onPress={() => sendDonasi(e._id, e.statusdonasi)}>
                                        {
                                            e.foto == '' ? (
                                                <View style={{justifyContent:"center", paddingRight:normalize(20)}}>
                                                    <Icon type='feather' name='camera-off' color={"#808080"} size={normalize(50)} />
                                                </View>
                                            ) : (
                                                <Image source={{ uri: `http://192.168.18.7:4000/resources/uploads/${e.foto}` }} style={styles.imgSize2} />
                                            )
                                        }
                                        <View style={styles.container3}>
                                            <Text style={styles.text5}>{e.judul}</Text>
                                            <View style={styles.lining} />
                                            <View style={{ flexDirection: "row" }}>
                                                <View>
                                                    <Text style={styles.text3}>Terkumpul</Text>
                                                    <NumberFormat value={e.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.text3}>{value}</Text>} />
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.text4}>Waktu</Text>
                                                    <Text style={styles.text4}>{e.durasi} hari</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                                )
                            ) : (
                                <View>
                                    <Image source={emptyMessage} style={styles.imgSize} />
                                    <View>
                                        <Text style={styles.text2}>Kamu Belum Membuat Pengajuan Donasi Apapun</Text>
                                    </View>
                                </View>
                            )
                        }

                        {/* <TouchableOpacity onPress={()=>props.navigation.navigate("home")}>
                            <View style={styles.btnBuat}>
                                <Text style={styles.text1}>Buat Pengajuan Donasi</Text>
                            </View>
                        </TouchableOpacity> */}
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
    imgSize2: {
        height: normalize(150),
        width: normalize(150),
        borderWidth: 1,
        marginTop: normalize(20),
        borderRadius: normalize(20),
        marginLeft: normalize(20)
    },
    header: {
        height: normalize(50),
        backgroundColor: "#9724DE",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: normalize(20)
    },
    container2: {
        flexDirection: "row",
    },
    container3: {
        padding: normalize(20),
        width: normalize(200),
        height: normalize(150),
        justifyContent: "center",
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
    },
    btnBuat: {
        width: normalize(280),
        height: normalize(50),
        backgroundColor: "#9724DE",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(20)
    },
    lining: {
        marginTop: normalize(10),
        height: normalize(3),
        borderWidth: 1,
        borderColor: "#808080",
        marginBottom: normalize(10)
    },
    text3: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(14),
    },
    text4: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(14),
        textAlign: "right"
    },
    text5: {
        fontFamily: "Quicksand-Bold",
        color: "#9724DE",
        fontSize: normalize(16),
    },
})