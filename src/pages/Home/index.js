import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import normalize from 'react-native-normalize';
import { bencana, kesehatan, logo, sedekah } from '../../assets';

const Home = (props) => {

    const [active, setActive] = useState(0);
    const [wdth, setWdth] = useState(0);

    const carouselItems = [
        "http://semestabertasbihgroup.com/wp-content/uploads/2021/06/8-1024x576.png",
        "http://semestabertasbihgroup.com/wp-content/uploads/2021/06/1-1024x576.png",
        "http://semestabertasbihgroup.com/wp-content/uploads/2021/06/3-1024x576.png"
    ];

    const onLayout = e => {
        setWdth(e.nativeEvent.layout.width)
    }

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'dark-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <Image source={logo} style={styles.imgSize} />
                    <View style={styles.search}>
                        <TextInput placeholder='Cari donasi disini' style={{ width: normalize(250), height: normalize(50) }} />
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
                        <SliderBox autoplay circleLoop images={carouselItems} style={{ height: normalize(200), borderRadius: 10, width: normalize(340) }} resizeMethod={"resize"} resizeMode={"cover"} />
                    </View>

                    <View style={styles.lining} />
                    <View style={styles.container1}>
                        <Text style={styles.text1}>Mau Mengajukan Donasi?</Text>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.text2}>Ajukan Sekarang</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.text3}>Bagaimana Cara Pengajuan Donasi?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lining} />
                    <View style={styles.container1}>
                        <Text style={styles.text1}>Pilhan Kategori Donasi</Text>
                        <View style={styles.rowing}>
                            <TouchableOpacity>
                                <Image source={kesehatan} style={styles.imgSize2} />
                                <Text style={styles.text4}>Kesehatan</Text>
                            </TouchableOpacity>
                            <View style={{paddingLeft:normalize(20)}} />
                            <TouchableOpacity>
                                <Image source={bencana} style={styles.imgSize2} />
                                <Text style={styles.text4}>Bencana</Text>
                            </TouchableOpacity>
                            <View style={{paddingLeft:normalize(20)}} />
                            <TouchableOpacity>
                                <Image source={sedekah} style={styles.imgSize2} />
                                <Text style={styles.text4}>Sedekah</Text>
                            </TouchableOpacity>
                        </View>
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
        paddingTop: normalize(20)
    },
    text4: {
        textAlign: "center",
        color: "black",
        fontSize: normalize(16),
        fontFamily: "Quicksand-Regular"
    },
});