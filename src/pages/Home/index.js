import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import normalize from 'react-native-normalize';
import { bencana, jumatsedekah, kesehatan, logo, sedekah, shalat_time, alquran } from '../../assets';

const Home = (props) => {

    const [active, setActive] = useState(0);
    const [wdth, setWdth] = useState(0);
    const [collect, setCollect] = useState([]);
    const [images, setImages] = useState([]);
    const [sholat, setSholat] = useState([]);
    const [surah, setSurah] = useState([]);

    const getSholat = () => {
        axios.get(`https://api.pray.zone/v2/times/today.json?city=jakarta`)
            .then(
                res => {
                    console.log(res.data)
                    const collect = res.data;
                    console.log(collect.results.datetime)
                    const sholat = collect.results.datetime;
                    sholat.map((e, i) => {
                        console.log(e.times.Asr)
                    })
                    setSholat(sholat);
                }
            )
    }

    const getSurah = () => {
        axios.get(`https://api-alquranid.herokuapp.com/surah/1`)
            .then(
                res => {
                    const surah = res.data.data;
                    console.log(surah);
                    setSurah(surah);
                }
            )
    }

    const getLogin = async () => {
        await AsyncStorage.getItem("loginKey").then(
            res => {
                console.log("Id: ", res)
            }
        )
    }


    const getdata = () => {
        axios.get(`https://ikhlasbantu.herokuapp.com/banners`).then(
            res => {
                console.log(res.data);
                const collect = res.data;
                setCollect(collect);
                setImages(
                    collect.map(res => `https://ikhlasbantu.herokuapp.com/resources/uploads/${res.gambar}`)
                )
                console.log(collect.map(res => res.gambar))
            }
        )
    }

    useEffect(() => {
        getdata();
        getLogin();
        getSholat();
        getSurah();
    }, [])


    const carouselItems = collect.map(res => {
        `https://ikhlasbantu.herokuapp.com/resources/uploads/${res.gambar}`
    })

    const onLayout = e => {
        setWdth(e.nativeEvent.layout.width)
    }

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <Image source={logo} style={styles.imgSize} />
                    <View style={styles.search}>
                        <TextInput placeholder='Cari donasi disini' placeholderTextColor={"#808080"} style={{ width: normalize(250), height: normalize(50) }} />
                        <TouchableOpacity>
                            <Icon type='font-awesome-5' name='search' />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ paddingTop: normalize(10) }}>
                        <Text style={styles.text1}>IKHLAS BANTU</Text>
                    </View>
                    <View style={styles.container1}>
                        <SliderBox autoplay circleLoop images={images} style={{ height: normalize(200), borderRadius: 10, width: normalize(340) }} resizeMode={"cover"} />
                    </View>

                    <View style={styles.lining} />
                    <View style={{ padding: normalize(10) }}>
                        <Text style={[styles.text1, { textAlign: "left" }]}>Tanggal Hijriah</Text>
                        {
                            sholat.map((e, i) => (
                                <View key={i}>
                                    <Text style={[styles.text1, { textAlign: "left" }]}>{e.date.hijri}</Text>
                                </View>
                            ))
                        }
                    </View>

                    <View style={styles.container1}>


                        <Text style={styles.text1}>Menu</Text>
                        <View style={styles.rowing}>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                                <Image source={shalat_time} style={styles.iconStyle} />
                                <Text style={styles.text1}>Waktu Sholat</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginLeft:normalize(20) }}>
                                <Image source={alquran} style={styles.iconStyle} />
                                <Text style={styles.text1}>Baca Qur'an</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={styles.container1}>
                        {/* <Text style={styles.text1}>Waktu Sholat</Text>
                        <View>
                            {
                                sholat.map((e, i) => (
                                    <View style={styles.rowing} key={i}>
                                        <Text style={styles.text1}>Subuh{`\n`}{e.times.Imsak}</Text>
                                        <Text style={styles.text1}>Dzuhur{`\n`}{e.times.Dhuhr}</Text>
                                        <Text style={styles.text1}>Ashar{`\n`}{e.times.Asr}</Text>
                                        <Text style={styles.text1}>Maghrib{`\n`}{e.times.Maghrib}</Text>
                                        <Text style={styles.text1}>Isya{`\n`}{e.times.Isha}</Text>
                                    </View>
                                ))
                            }
                        </View> */}
                    </View>
                    <View style={styles.container1}>
                        {/* {
                            surah.map((e, i) => (
                                <View key={i}>
                                    <Text style={styles.text1}>{e.ar}</Text>
                                </View>
                            ))
                        } */}
                    </View>

                    <View style={styles.lining} />
                    <View style={styles.container1}>
                        <Image source={jumatsedekah} style={styles.imgSize3} />
                    </View>

                    <View style={styles.lining} />

                </ScrollView>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    lining: {
        height: normalize(10),
        backgroundColor: "#dfdfdf",
        marginTop: normalize(20)
    },
    imgSize: {
        height: normalize(40),
        width: normalize(40)
    },
    header: {
        height: normalize(50),
        backgroundColor: "#9724DE",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    iconStyle: {
        width: normalize(80),
        height: normalize(80)
    },
    text1: {
        fontFamily: "Quicksand-Bold",
        color: "#9724DE",
        fontSize: normalize(24),
        textAlign: "center"
    },
    container1: {
        paddingTop: normalize(20),
        paddingRight: normalize(20),
        paddingLeft: normalize(20)
    },
    search: {
        width: normalize(300),
        height: normalize(35),
        backgroundColor: "white",
        marginLeft: normalize(10),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    btn1: {
        height: normalize(40),
        backgroundColor: "#9724DE",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(10)
    },
    text2: {
        textAlign: "center",
        color: "white",
        fontSize: normalize(18),
        fontFamily: "Quicksand-Bold"
    },
    text3: {
        textAlign: "center",
        color: "white",
        fontSize: normalize(16),
        fontFamily: "Quicksand-Bold"
    },
    imgSize2: {
        width: normalize(80),
        height: normalize(80)
    },
    rowing: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: normalize(10)
    },
    text4: {
        textAlign: "center",
        color: "black",
        fontSize: normalize(16),
        fontFamily: "Quicksand-Regular"
    },
    imgSize3: {
        height: normalize(200),
        width: '100%'
    }
});