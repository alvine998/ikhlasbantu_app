import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import NumberFormat from 'react-number-format';
import { emptyMessage } from '../../../../assets';

const HitungZakat = (props) => {
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

    useEffect(() => {
        getSholat();
        nishab();
    }, [])

    const nishab = () => {
        let gold = 997000;
        let totalNishab = (gold * 85) / 12;
        setTotalNishab(totalNishab);
    }

    const handlingMoney = (e) => {
        setMoney(e)
    }

    const [result, setResult] = useState(0);
    const [money, setMoney] = useState(0);
    const [totalNishab, setTotalNishab] = useState(0);
    const [statusZakat, setStatusZakat] = useState(true);

    const calculateZakat = () => {
        var gold = 997000;
        var nishab = gold * 85;
        var totalOut = money * 12;

        if (totalOut == 0) {
            Alert.alert("Silahkan masukkan pendapatan anda")
        } else if (totalOut < nishab) {
            setStatusZakat(true)
            Alert.alert("Anda hanya wajib berinfak")
            var totalInfak = (money / 100) * 2.5;
            setResult(totalInfak);
        } else {
            setStatusZakat(false)
            Alert.alert("Anda wajib membayar zakat")
            var totalZakat = (money / 100) * 2.5;
            setResult(totalZakat);
        }
    }

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Hitung Zakat</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.boxresult}>
                            <NumberFormat value={result} thousandSeparator displayType='text' prefix='Rp ' renderText={(value) => <Text style={styles.text2}>{value} /bulan</Text>} />
                        </View>
                    </View>
                    <View style={{ paddingLeft: normalize(20), paddingTop: normalize(10) }}>
                        <Text style={styles.text3}>
                            Silahkan hitung nilai zakat anda disini
                        </Text>
                        <NumberFormat value={totalNishab} thousandSeparator decimalScale={0} displayType='text' prefix='Rp '
                            renderText={(value) => <Text style={styles.text4}>
                                1. Nilai per gram emas = Rp 997.000 {"\n"}
                                2. Nishab per orang 85 gram emas {value} /bulan
                            </Text>}

                        />
                        <View style={{ paddingRight: normalize(50) }}>
                            {/* <TextInput onChangeText={handlingMoney} value={money} keyboardType='number-pad' style={{ height: normalize(50), fontSize: normalize(24) }} placeholder='Masukkan nominal uangmu' underlineColorAndroid={true} /> */}
                            <CurrencyInput
                                value={money}
                                onChangeValue={setMoney}
                                placeholder="Rp "
                                style={{
                                    fontSize: normalize(24),
                                    fontFamily: "Quicksand-Bold",
                                }}
                                prefix="Rp "
                                separator='.'
                                precision={0}
                                onChangeText={(formattedValue) => { console.log(formattedValue) }}
                            />
                            <View style={{ borderBottomWidth: 1 }} />
                        </View>
                        <View style={{ paddingRight: normalize(20), paddingTop: normalize(20) }}>
                            <TouchableOpacity onPress={calculateZakat} style={styles.btnSubmit}>
                                <Text style={styles.text1}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity disabled={money == 0 ? true : false} style={money == 0 ? styles.btnSubmit2Off : styles.btnSubmit2}>
                                <Text style={styles.text1}>{statusZakat ? "Zakat" : "Infak"} Sekarang</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default HitungZakat;

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
        textAlign: 'left'
    },
    text3: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(18),
        textAlign: 'left'
    },
    text4: {
        fontFamily: "Quicksand-Regular",
        color: "black",
        fontSize: normalize(16),
        textAlign: 'left'
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(20),
        padding: normalize(20)
    },
    rowing: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: normalize(10)
    },
    boxresult: {
        width: '100%',
        height: normalize(40),
        borderWidth: 1,
        borderColor: "black",
        paddingTop: normalize(3),
        paddingLeft: normalize(10)
    },
    btnSubmit: {
        width: '100%',
        height: normalize(40),
        backgroundColor: "#9724DE",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    btnSubmit2: {
        width: '100%',
        height: normalize(40),
        backgroundColor: "#65E133",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: normalize(10)
    },
    btnSubmit2Off: {
        width: '100%',
        height: normalize(40),
        backgroundColor: "#65E133",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: normalize(10),
        opacity: 0.5
    }
})