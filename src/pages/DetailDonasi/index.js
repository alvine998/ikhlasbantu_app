import React, { useEffect, useState } from 'react';
import { Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { SliderBox } from 'react-native-image-slider-box';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NumberFormat from 'react-number-format';

const DetailDonasi = (props) => {
    const [collect, setCollect] = useState([]);
    const [key, setKey] = useState('');
    const [judul, setJudul] = useState('');
    const [terkumpul, setTerkumpul] = useState(0);
    const [target, setTarget] = useState(0);
    const [desc, setDesc] = useState('');
    const [foto, setFoto] = useState(null);
    const [len, setLen] = useState([]);
    const [nama, setNama] = useState('');
    const [hasil, setHasil] = useState(0);

    const getDonasi = async () => {
        await AsyncStorage.getItem("donasiKey").then(
            res => {
                console.log(res)
                setKey(res)

                axios.get(`https://ikhlasbantu.herokuapp.com/transaksi/donasi/${res}`).then(
                    res => {
                        const id = res.data;
                        console.log(id);
                        setLen(id)
                    }
                )

                axios.get(`https://ikhlasbantu.herokuapp.com/donasis/${res}`).then(
                    res => {
                        const collect = res.data;
                        console.log(collect);
                        setJudul(collect.judul); setTerkumpul(collect.terkumpul);
                        setDesc(collect.deskripsi); setFoto(collect.foto);
                        setTarget(collect.target);
                        collect.id_users.forEach((e) => {
                            console.log(e.nama)
                            setNama(e.nama);
                        })
                        let result = (collect.terkumpul / collect.target) * 100
                        setHasil(
                            result
                        )
                        console.log("Ini Collect ", result)
                    }
                )
            }
        )
    }

    const removeKey = async () => {
        await AsyncStorage.removeItem("donasiKey");
        props.navigation.goBack();
    }


    useEffect(() => {
        getDonasi();
    }, [])

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>

                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => removeKey()}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Detail Donasi</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Closed");
                                setModalVisible(!modalVisible)
                            }}
                        >
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <View style={styles.boxModal}>
                                    <Image source={{ uri: `https://ikhlasbantu.herokuapp.com/resources/uploads/${foto}` }} style={styles.imgSize3} />
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.text1}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image source={{ uri: `https://ikhlasbantu.herokuapp.com/resources/uploads/${foto}` }} style={styles.imgSize2} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container2}>
                        <Text style={styles.text2}>{judul}</Text>
                        <Text style={styles.text2}>{nama}</Text>
                        <View style={styles.container4}>
                            <NumberFormat value={terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.text5} >{value}</Text>} />
                            <View style={styles.lining2}>
                                <View style={{
                                    height: normalize(10),
                                    borderWidth: 1,
                                    borderColor: "#9724DE",
                                    marginBottom: normalize(10),
                                    borderRadius: 20,
                                    width: `${hasil}%`,
                                    backgroundColor: "#9724DE",
                                }}>

                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.text6}>Donasi ({len.length})</Text>
                                <NumberFormat value={target} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.textR} >{value}</Text>} />
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate("pembayaran")}>
                                <View style={styles.btn1}>
                                    <Text style={styles.text1}>Donasi Sekarang</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text3}>Deskripsi :</Text>
                        <View style={styles.container3}>
                            <Text style={styles.text4}>{desc}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default DetailDonasi;

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
        height: normalize(250),
        width: normalize(350),
        borderWidth: 1,
        borderRadius: normalize(20),
    },
    imgSize3: {
        height: normalize(300),
        width: normalize(300),
        borderRadius: 20,
        overflow: "hidden"
    },
    header: {
        height: normalize(50),
        backgroundColor: "#9724DE",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: normalize(20),
    },
    boxModal: {
        width: '100%',
        height: '100%',
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    banner: {
        height: normalize(150),
        width: normalize(300),
        backgroundColor: "#9724DE",
        borderRadius: 20,
        marginRight: normalize(20)
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
        fontSize: normalize(16),
        marginTop: normalize(10)
    },
    text4: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(14),
        textAlign: "justify"
    },
    text5: {
        fontFamily: "Quicksand-Bold",
        color: "#9724DE",
        fontSize: normalize(16),
    },
    text6: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(16),
    },
    textR: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(16),
        textAlign: "right",
        flex: 1
    },
    container: {
        padding: normalize(20),
        justifyContent: "center",
        alignItems: "center",
    },
    container2: {
        paddingLeft: normalize(20),
    },
    container3: {
        paddingLeft: normalize(10),
        paddingRight: normalize(50),
        paddingTop: normalize(10)
    },
    container4: {
        paddingRight: normalize(20),
    },
    btn1: {
        width: normalize(330),
        height: normalize(40),
        backgroundColor: "#9724DE",
        borderRadius: 20,
        borderColor: "#808080",
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
    lining2: {
        marginTop: normalize(10),
        height: normalize(10),
        borderWidth: 1,
        borderColor: "#808080",
        marginBottom: normalize(10),
        borderRadius: 20,
        width: "100%",
        backgroundColor: "#808080"
    },
    lining3: {
        // height: normalize(10),
        // borderWidth: 1,
        // borderColor: "#9724DE",
        // marginBottom: normalize(10),
        // borderRadius: 20,
        // width: `${hasil}%`,
        // backgroundColor: "#9724DE",
    },
    slider: {
        height: normalize(200),
        borderRadius: 20,
        width: normalize(340)
    }
})