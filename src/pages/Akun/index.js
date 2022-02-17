import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

const Akun = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.text1}>Akun</Text>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity>
                            <View style={styles.imgContainer}>

                            </View>
                        </TouchableOpacity>

                        <View style={styles.tube}>
                            <TextInput placeholder='Nama Lengkap' />
                        </View>
                        <View style={styles.tube}>
                            <TextInput placeholder='Email' />
                        </View>
                        <View style={styles.tube}>
                            <TextInput placeholder='No Handphone' keyboardType='phone-pad' maxLength={12} />
                        </View>
                        <View style={styles.tube}>
                            <TextInput placeholder='Alamat' maxLength={255} />
                        </View>
                        <View style={styles.tube}>
                            <TextInput placeholder='Pekerjaan' />
                        </View>
                        <View style={styles.tubePicker}>
                            <Picker
                                selectedValue={selectedLanguage}
                                onValueChange={(v, i) => setSelectedLanguage(v)}
                            >
                                <Picker.Item enabled={false} label='Jenis Kelamin'/>
                                <Picker.Item label='Laki-laki' value={"laki"} />
                                <Picker.Item label='Perempuan' value={"perempuan"} />
                            </Picker>
                        </View>

                        <TouchableOpacity style={styles.tubeButton}>
                            <Text style={styles.text1}>Simpan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tubeCancel} onPress={()=>props.navigation.navigate("home")}>
                            <Text style={styles.text1}>Kembali</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Akun;

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
        fontSize: normalize(16),
    },
    imgContainer: {
        width: normalize(150),
        height: normalize(150),
        borderRadius: 150,
        borderWidth: 1,
        borderColor: "#dfdfdf"
    },
    container: {
        padding: normalize(20),
        justifyContent: "center",
        alignItems: "center"
    },
    tube: {
        width: "90%",
        height: normalize(40),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dfdfdf",
        paddingLeft: normalize(10),
        marginTop: normalize(20)
    },
    tubePicker: {
        width: "90%",
        height: normalize(50),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dfdfdf",
        paddingLeft: normalize(10),
        marginTop: normalize(20)
    },
    tubeButton: {
        width: "90%",
        height: normalize(40),
        borderRadius: 10,
        paddingLeft: normalize(10),
        marginTop: normalize(20),
        backgroundColor:"#9724DE",
        justifyContent:"center",
        alignItems:"center"
    },
    tubeCancel: {
        width: "90%",
        height: normalize(40),
        borderRadius: 10,
        paddingLeft: normalize(10),
        marginTop: normalize(20),
        backgroundColor:"#D73030",
        justifyContent:"center",
        alignItems:"center"
    },
})