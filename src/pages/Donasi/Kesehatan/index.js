import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import NumberFormat from 'react-number-format';

const Kesehatan = (props) => {
    const [collect, setCollect] = useState([])
    const [nama, setNama] = useState('')

    const getDataKesehatan = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/kesehatan`).then(
            res => {
                const collect = res.data;
                console.log(collect);
                setCollect(collect);
            }
        )
    }

    const getDataUser = () => {
        
    }

    const sendDonasi = async (id) => {
        await AsyncStorage.setItem("donasiKey",id);
        props.navigation.navigate("detail-donasi");
        console.log("ID : ", id)
    }

    useEffect(() => {
        getDataKesehatan();
    }, [])
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Donasi - Kesehatan</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <View style={styles.search}>
                            <TextInput placeholder='Cari donasi disini' placeholderTextColor={"#808080"} style={{ width: normalize(300), height: normalize(50) }} />
                                <TouchableOpacity>
                                    <Icon type='font-awesome' name='search' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            collect.reverse().map((res, i) => (
                                <TouchableOpacity key={i} style={{ flexDirection: "row" }} onPress={() => sendDonasi(res._id)}>
                                    <Image source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} />
                                    <View style={styles.container3}>
                                        <Text style={styles.text5}>{res.judul}</Text>
                                        <View style={styles.lining} />
                                        <View style={{ flexDirection: "row" }}>
                                            <View>
                                                <Text style={styles.text3}>Terkumpul</Text>
                                                <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value)=><Text style={styles.text3}>{value}</Text>} />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.text4}>Waktu</Text>
                                                <Text style={styles.text4}>{res.durasi} hari</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Kesehatan;

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
        paddingLeft: normalize(20),

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
    container: {
        padding: normalize(20),
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(0)
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
    search: {
        width: normalize(350),
        height: normalize(40),
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#808080",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    lining: {
        marginTop: normalize(10),
        height: normalize(3),
        borderWidth: 1,
        borderColor: "#808080",
        marginBottom: normalize(10)
    }
})