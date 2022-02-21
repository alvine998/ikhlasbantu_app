import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

const Donasi = (props) => {
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
                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>props.navigation.navigate("donasi-kesehatan")}>
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
                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi2}>
                                        <Text style={styles.text3}>+ Lihat Lainnya</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Donasi Sedekah Spesial */}
                    <View style={{ paddingTop: normalize(20), paddingBottom:normalize(30) }}>
                        <View style={styles.container}>
                            <Text style={styles.text2}>Donasi Sedekah Spesial</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.rowing}>
                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi2}>
                                        <Text style={styles.text3}>+ Lihat Lainnya</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Donasi Lainnya */}
                    <View style={{ paddingTop: normalize(20), paddingBottom:normalize(30) }}>
                        <View style={styles.container}>
                            <Text style={styles.text2}>Donasi Lainnya</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.rowing}>
                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={styles.imgDonasi}>

                                    </View>
                                </TouchableOpacity>

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
    imgDonasi: {
        width: normalize(300),
        height: normalize(250),
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: normalize(20)
    },
    imgDonasi2: {
        width: normalize(300),
        height: normalize(250),
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: normalize(20),
        justifyContent:"center",
        alignItems:"center"
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