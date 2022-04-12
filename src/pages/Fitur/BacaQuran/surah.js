import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { emptyMessage } from '../../../assets';

const SurahQuran = (props) => {
    const [surah, setSurah] = useState([]);
    const [bismillah, setBismillah] = useState("");
    const [translate, setTranslate] = useState("");
    const [loading, setLoading] = useState(true);

    const getSurah = () => {
        AsyncStorage.getItem('nomor').then(
            res => {
                axios.get(`https://api.quran.sutanlab.id/surah/${res}`)
                    .then(
                        result => {
                            const surah = result.data.data;

                            console.log("Null is :", bismillah, translate);
                            setSurah(surah.verses);
                            setLoading(false);
                            if (res !== 1) {
                                const bismillah = surah.preBismillah;
                                const translate = surah.preBismillah.translation.id;
                                setBismillah(bismillah.text.arab);
                                setTranslate(translate);
                            }
                        }
                    )
            }
        )
    }

    useEffect(() => {
        getSurah();
    }, [])


    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.goBack()}>
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
                                        <View style={styles.boxSurah}>
                                            {
                                                bismillah ? (
                                                    <View>

                                                    </View>
                                                ) : (
                                                    <View>
                                                        <Text style={[styles.text2, { textAlign: "center" }]}>{bismillah}</Text>
                                                        <Text style={styles.text3}>{translate}</Text>
                                                    </View>
                                                )
                                            }

                                        </View>
                                        {
                                            surah.map((e, i) => (
                                                <View style={styles.boxSurah} key={i}>
                                                    <Text style={styles.text2}>{e.text.arab}</Text>
                                                    <Text style={styles.text3}>{e.translation.id} ({e.number.inSurah})</Text>
                                                </View>
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

export default SurahQuran;

const styles = StyleSheet.create({
    background: {
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
        textAlign: 'right'
    },
    text3: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(14),
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
        borderColor: "#808080"
    }
})