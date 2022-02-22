import React, { useEffect } from 'react';
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { useState } from "react";
import axios from 'axios';
import NumberFormat from 'react-number-format';

const Donasi = (props) => {
    const [collect, setCollect] = useState([]);
    const [collect2, setCollect2] = useState([]);
    const [collect3, setCollect3] = useState([]);
    const [collect4, setCollect4] = useState([]);


    const getKesehatan = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/kesehatan`).then(
            res => {
                const collect = res.data;
                console.log(collect);
                setCollect(collect);
            }
        )
    }

    const getBencana = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/bencana`).then(
            res => {
                const collect2 = res.data;
                console.log(collect2);
                setCollect2(collect2);
            }
        )
    }

    const getSedekah = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/sedekah`).then(
            res => {
                const collect3 = res.data;
                console.log(collect3);
                setCollect3(collect3);
            }
        )
    }

    const getLainlain = () => {
        axios.get(`http://192.168.18.7:4000/donasis/valid/lain-lain`).then(
            res => {
                const collect4 = res.data;
                console.log(collect4);
                setCollect4(collect4);
            }
        )
    }

    useEffect(() => {
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

                <ScrollView>
                    {/* Donasi Kesehatan */}
                    <View style={{ paddingTop: normalize(20) }}>
                        <View style={styles.container}>
                            <Text style={styles.text2}>Donasi Kesehatan</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.rowing}>
                                {
                                    collect && collect.map((res, i) => (
                                        <TouchableOpacity key={i}>
                                            <View style={styles.imgDonasi}>
                                                <ImageBackground source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} >
                                                    <View style={{padding:normalize(20)}}>
                                                        <Text style={styles.text4}>{res.judul}</Text>
                                                        <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value)=><Text style={styles.text4} >{value}</Text>} />
                                                    </View>
                                                </ImageBackground>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }

                                <TouchableOpacity onPress={() => props.navigation.navigate("donasi-kesehatan")}>
                                    <View style={styles.imgDonasi2}>
                                        <Text style={styles.text3}>+ Lihat Lainnya</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Donasi Bencana Alam */}
                    <View style={{ paddingTop: normalize(20) }}>
                        <View style={styles.container}>
                            <Text style={styles.text2}>Donasi Bencana Alam</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.rowing}>
                                {
                                    collect2 && collect2.map((res, i) => (
                                        <TouchableOpacity key={i}>
                                            <View style={styles.imgDonasi}>
                                                <ImageBackground source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} >
                                                    <View style={{padding:normalize(20)}}>
                                                        <Text style={styles.text4}>{res.judul}</Text>
                                                        <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value)=><Text style={styles.text4} >{value}</Text>} />
                                                    </View>
                                                </ImageBackground>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi2}>
                                        <Text style={styles.text3}>+ Lihat Lainnya</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Donasi Sedekah Spesial */}
                    <View style={{ paddingTop: normalize(20), paddingBottom: normalize(30) }}>
                        <View style={styles.container}>
                            <Text style={styles.text2}>Donasi Sedekah Spesial</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.rowing}>
                                {
                                    collect3 && collect3.map((res, i) => (
                                        <TouchableOpacity key={i}>
                                            <View style={styles.imgDonasi}>
                                                <ImageBackground source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} >
                                                    <View style={{padding:normalize(20)}}>
                                                        <Text style={styles.text4}>{res.judul}</Text>
                                                        <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value)=><Text style={styles.text4} >{value}</Text>} />
                                                    </View>
                                                </ImageBackground>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi2}>
                                        <Text style={styles.text3}>+ Lihat Lainnya</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Donasi Lainnya */}
                    <View style={{ paddingTop: normalize(20), paddingBottom: normalize(30) }}>
                        <View style={styles.container}>
                            <Text style={styles.text2}>Donasi Lainnya</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.rowing}>
                                {
                                    collect4 && collect4.map((res, i) => (
                                        <TouchableOpacity key={i}>
                                            <View style={styles.imgDonasi}>
                                                <ImageBackground source={{ uri: `http://192.168.18.7:4000/resources/uploads/${res.foto}` }} style={styles.imgSize2} >
                                                    <View style={{padding:normalize(20)}}>
                                                        <Text style={styles.text4}>{res.judul}</Text>
                                                        <NumberFormat value={res.terkumpul} thousandSeparator displayType='text' prefix='Rp ' renderText={(value)=><Text style={styles.text4} >{value}</Text>} />
                                                    </View>
                                                </ImageBackground>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi2}>
                                        <Text style={styles.text3}>+ Lihat Lainnya</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
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
        fontSize: normalize(18),
    },
    text3: {
        fontFamily: "Quicksand-Bold",
        color: "#808080",
        fontSize: normalize(18),
    },
    text4: {
        fontFamily: "Quicksand-Regular",
        color: "black",
        fontSize: normalize(18),
    },
    imgDonasi: {
        width: normalize(300),
        height: normalize(250),
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: normalize(20),
        alignItems: "center",
        borderColor:"#dfdfdf",
        overflow:"hidden"
    },
    imgDonasi2: {
        width: normalize(300),
        height: normalize(250),
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: normalize(20),
        justifyContent: "center",
        alignItems: "center"
    },
    imgSize2: {
        width: normalize(300),
        height: normalize(250),
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    rowing: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: normalize(20),
        marginRight: normalize(20)
    },
    container: {
        paddingLeft: normalize(20),
        paddingRight: normalize(20)
    }
})