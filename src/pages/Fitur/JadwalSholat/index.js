import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { emptyMessage } from '../../../assets';

const JadwalSholat = (props) => {
    const [sholat, setSholat] = useState([]);

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

    useEffect(()=>{
        getSholat();
    },[])


    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Jadwal Sholat Hari Ini</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.text1}>Waktu Sholat</Text>
                            <View>
                                {
                                    sholat.map((e, i) => (
                                        <View style={styles.rowing} key={i}>
                                            <Text style={styles.text2}>Subuh{`\n`}{e.times.Imsak}</Text>
                                            <Text style={styles.text2}>Dzuhur{`\n`}{e.times.Dhuhr}</Text>
                                            <Text style={styles.text2}>Ashar{`\n`}{e.times.Asr}</Text>
                                            <Text style={styles.text2}>Maghrib{`\n`}{e.times.Maghrib}</Text>
                                            <Text style={styles.text2}>Isya{`\n`}{e.times.Isha}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default JadwalSholat;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    imgSize: {
        height: normalize(200),
        width: normalize(200)
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
        fontSize: normalize(20),
        textAlign:'center'
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(150)
    },
    rowing: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: normalize(10)
    },
})