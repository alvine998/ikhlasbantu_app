import React from 'react';
import { Image, Linking, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { emptyMessage } from '../../assets';

const Bantuan = (props) => {

    const whatsappHelp = () => {
        Linking.openURL("https://api.whatsapp.com/send?phone=+6281220444409")
    }

    const emailHelp = () => {
        Linking.openURL("mailto:info@ikhlasbantu.com")
    }
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Bantuan</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => whatsappHelp()}>
                            <View>
                                <Icon type='font-awesome-5' name='whatsapp' size={normalize(30)} color={"#9724DE"} />
                                <Text style={styles.text2}>Whatsapp</Text>
                                <Text style={styles.text2}>0812-2044-4409</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => emailHelp()} style={{ paddingTop: normalize(20) }}>
                            <View>
                                <Icon type='font-awesome-5' name='envelope' size={normalize(30)} color={"#9724DE"} />
                                <Text style={styles.text2}>Email</Text>
                                <Text style={styles.text2}>info@ikhlasbantu.com</Text>
                            </View>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                            <View style={styles.btnKembali}>
                                <Text style={styles.text1}>Kembali</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Bantuan;

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
        textAlign: "center"
    },
    container: {
        padding: normalize(20),
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(150)
    },
    btnKembali: {
        width: normalize(200),
        height: normalize(50),
        backgroundColor: "#D73030",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(20)
    }
})