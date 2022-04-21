import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { emptyMessage } from '../../../assets';

const BacaQuran = (props) => {
    const [surah, setSurah] = useState([]);
    const [loading, setLoading] = useState(true);

    // const getSurah = () => {
    //     axios.get(`../../../assests/data/surah.json`)
    //         .then(
    //             res => {
    //                 const surah = res.data.data;
    //                 console.log(surah);
    //                 setSurah(surah);
    //                 setLoading(false);
    //             }
    //         )
    // }

    const getSurah = () => {
        var data = require('../../../assets/data/surah.json')
        const surah = data.data;
        setSurah(surah);
        setLoading(false);
    }

    const getData = async (id) => {
        await AsyncStorage.setItem('nomor', id);
        console.log(id);
        props.navigation.navigate('surah-quran');
    }

    useEffect(() => {
        getSurah()
    }, [])

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Baca Al-Qur'an</Text>
                </View>
                {
                    loading ? (
                        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <ActivityIndicator size={"large"} />
                        </View>
                    ) : (
                        <ScrollView>
                            <View>
                                <View>
                                    <ScrollView>
                                        {
                                            surah.map((e, i) => (
                                                <TouchableOpacity onPress={() => getData(e.nomor)} style={styles.boxSurah} key={i}>
                                                    <Text style={styles.text2}>{e.nomor}. {e.nama} ({e.ayat}) ayat</Text>
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                            </View>
                        </ScrollView>
                    )
                }
            </View>
        </View>
    );
}

export default BacaQuran;

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
        paddingLeft: normalize(10),
        textAlign: 'left'
    },
    container: {
        padding: normalize(20),
        justifyContent: "center",
        alignItems: "center",
    },
    rowing: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: normalize(10)
    },
    boxSurah: {
        borderWidth: 1,
        width: '100%',
        height: normalize(40),
        borderColor: "#808080",
        justifyContent:"center"
    }
})