import React, { useEffect } from 'react';
import { Alert, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { useState } from "react";
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { Icon } from 'react-native-elements';

const Donasi = (props) => {
    const [active, setActive] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);

    const [collect5, setCollect5] = useState([]);
    const getSemua = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/`).then(
            res => {
                const collect5 = res.data;
                console.log("Ini Semua ", collect5);
                setCollect5(collect5);
            }
        )
    }

    const Semua = () => {
        return (
            collect5.reverse().map((res, i) => (
                <TouchableOpacity key={i} style={{ flexDirection: "row" }} onPress={() => sendDonasi(res._id)}>
                    <Image source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} />
                    <View style={styles.container3}>
                        <Text style={styles.text5}>{res.judul}</Text>
                        <View style={styles.lining} />
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.text3}>Terkumpul</Text>
                                <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.text3}>{value}</Text>} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text4}>Waktu</Text>
                                <Text style={styles.text4}>{res.durasi} hari</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        )
    }
    const [collect, setCollect] = useState([]);
    const getKesehatan = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/kesehatan`).then(
            res => {
                const collect = res.data;
                console.log("Kesehatan ", collect);
                setCollect(collect);
            }
        )
    }
    const Kesehatan = () => {
        return (
            collect.reverse().map((res, i) => (
                <TouchableOpacity key={i} style={{ flexDirection: "row" }} onPress={() => sendDonasi(res._id)}>
                    <Image source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} />
                    <View style={styles.container3}>
                        <Text style={styles.text5}>{res.judul}</Text>
                        <View style={styles.lining} />
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.text3}>Terkumpul</Text>
                                <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.text3}>{value}</Text>} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text4}>Waktu</Text>
                                <Text style={styles.text4}>{res.durasi} hari</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        )
    }
    const [collect2, setCollect2] = useState([]);
    const getBencana = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/bencana`).then(
            res => {
                const collect2 = res.data;
                console.log("Bencana ", collect2);
                setCollect2(collect2);
            }
        )
    }
    const Bencana = () => {
        return (
            collect2.reverse().map((res, i) => (
                <TouchableOpacity key={i} style={{ flexDirection: "row" }} onPress={() => sendDonasi(res._id)}>
                    <Image source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} />
                    <View style={styles.container3}>
                        <Text style={styles.text5}>{res.judul}</Text>
                        <View style={styles.lining} />
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.text3}>Terkumpul</Text>
                                <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.text3}>{value}</Text>} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text4}>Waktu</Text>
                                <Text style={styles.text4}>{res.durasi} hari</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        )
    }
    const [collect3, setCollect3] = useState([]);
    const getSedekah = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/sedekah`).then(
            res => {
                const collect3 = res.data;
                console.log("Sedekah ", collect3);
                setCollect3(collect3);
            }
        )
    }
    const Sedekah = () => {
        return (
            collect3.reverse().map((res, i) => (
                <TouchableOpacity key={i} style={{ flexDirection: "row" }} onPress={() => sendDonasi(res._id)}>
                    <Image source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} />
                    <View style={styles.container3}>
                        <Text style={styles.text5}>{res.judul}</Text>
                        <View style={styles.lining} />
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.text3}>Terkumpul</Text>
                                <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.text3}>{value}</Text>} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text4}>Waktu</Text>
                                <Text style={styles.text4}>{res.durasi} hari</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        )
    }
    const [collect4, setCollect4] = useState([]);
    const getLainlain = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/lain-lain`).then(
            res => {
                const collect4 = res.data;
                console.log("Ini Lainlain ", collect4);
                setCollect4(collect4);
            }
        )
    }
    const Lainlain = () => {
        return (
            collect4.reverse().map((res, i) => (
                <TouchableOpacity key={i} style={{ flexDirection: "row" }} onPress={() => sendDonasi(res._id)}>
                    <Image source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} />
                    <View style={styles.container3}>
                        <Text style={styles.text5}>{res.judul}</Text>
                        <View style={styles.lining} />
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.text3}>Terkumpul</Text>
                                <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.text3}>{value}</Text>} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text4}>Waktu</Text>
                                <Text style={styles.text4}>{res.durasi} hari</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        )
    }

    const atAll = () => {
        setActive(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
    }

    const atKes = () => {
        setActive2(true);
        setActive(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
    }

    const atBen = () => {
        setActive3(true);
        setActive(false);
        setActive2(false);
        setActive4(false);
        setActive5(false);
    }

    const atSed = () => {
        setActive4(true);
        setActive(false);
        setActive3(false);
        setActive2(false);
        setActive5(false);
    }

    const atLain = () => {
        setActive5(true);
        setActive(false);
        setActive3(false);
        setActive2(false);
        setActive4(false);
    }

    useEffect(() => {
        getSemua();
        getKesehatan();
        getBencana();
        getSedekah();
        getLainlain();
    }, [])

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.text1}>Donasi</Text>
                </View>
                <View style={styles.filtering}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style={{ flexDirection: "row" }}>

                            <TouchableOpacity onPress={() => atAll()} style={styles.box1}>
                                <Text style={styles.text2}>Semua</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => atKes()} style={styles.box2}>
                                <Text style={styles.text2}>Kesehatan</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => atBen()} style={styles.box3}>
                                <Text style={styles.text2}>Bencana Alam</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => atSed()} style={styles.box2}>
                                <Text style={styles.text2}>Sedekah</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => atLain()} style={styles.box2}>
                                <Text style={styles.text2}>Lain-lain</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
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
                            active == true ? (
                                Semua()
                            ) : active2 == true ? (
                                Kesehatan()
                            ) : active3 == true ? (
                                Bencana()
                            ) : active4 == true ? (
                                Sedekah()
                            ) : active5 == true ? (
                                Lainlain()
                            ) : (
                                Alert.alert("Error")
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Donasi;

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
    text1: {
        fontFamily: "Quicksand-Bold",
        color: "#fff",
        fontSize: normalize(18),
    },
    text2: {
        fontFamily: "Quicksand-Bold",
        color: "#9724DE",
        fontSize: normalize(18),
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
    rowing: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: normalize(20),
        marginRight: normalize(20)
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
    },
    filtering: {
        width: '100%',
        height: normalize(60),
        backgroundColor: "#dfdfdf",
        paddingTop: normalize(15),
        paddingLeft: normalize(20),
        paddingRight: normalize(20)
    },
    box1: {
        width: normalize(100),
        height: normalize(35),
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        paddingLeft: normalize(20),
        paddingRight: normalize(20),
        alignItems: "center",
    },
    box2: {
        width: normalize(150),
        height: normalize(35),
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        paddingLeft: normalize(20),
        paddingRight: normalize(20),
        alignItems: "center",
        marginLeft: normalize(20)
    },
    box3: {
        width: normalize(200),
        height: normalize(35),
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        paddingLeft: normalize(20),
        paddingRight: normalize(20),
        alignItems: "center",
        marginLeft: normalize(20)
    }
})