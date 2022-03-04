import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import ImageCropPicker from 'react-native-image-crop-picker';
import normalize from 'react-native-normalize';

const Akun = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [nama, setNama] = useState('');
    const [idUser, setIdUser] = useState('');
    const [email, setEmail] = useState('');
    const [nohp, setNohp] = useState('');
    const [photo, setPhoto] = useState('');
    const [alamat, setAlamat] = useState('');
    const [pekerjaan, setPekerjaan] = useState('');

    const [cPhoto, setCPhoto] = useState('');


    const selectImage = () => {
        ImageCropPicker.openPicker({
            width: normalize(150),
            height: normalize(150),
            cropping: true,
            cropperCircleOverlay: true,
        }).then(image => {
            if (!image) {
                console.log("Cancel Image Picker")
            } else {
                console.log(image);
                setCPhoto(image);
                uploadImage();
            }
        })
    }

    const uploadImage = async () => {
        const newName =  cPhoto.path

        let photoss = {
            name: newName,
            type: cPhoto.mime,
            uri: cPhoto.path
        }


        let formData = new FormData();
        formData.append("images", photoss)

        let result = { info: "" }
        result = await fetch(`http://192.168.18.7:4000/upload/`, {
            method: "POST",
            body: formData
        }).then(
            res => res.json().then(
                response => { console.log(response); return response; }
            )
        )
        console.log(result.info)
        const dataUpdate = {
            foto: result.info,
        }
        axios.put(`http://192.168.18.7:4000/users/${idUser}`, dataUpdate).then(
            res => {
                console.log("Sukses Update")
            }
        )

    }

    const getDataUser = async () => {
        await AsyncStorage.getItem("loginKey").then(
            res => {
                axios.get(`http://192.168.18.7:4000/users/mail/${res}`).then(
                    result => {
                        const results = result.data;
                        setAlamat(results.alamat); setNama(results.nama);
                        setEmail(results.email); setNohp(results.nohp);
                        setPekerjaan(results.pekerjaan); setPhoto(results.foto)
                        console.log(results); setIdUser(results._id)
                    }
                )
            }
        )
    }

    const changeOn = (e) => {
        setNama(e);
    }

    const changeOnEmail = (e) => {
        setEmail(e);
    }

    const changeOnPhone = (e) => {
        setNohp(e);
    }

    const changeOnAlamat = (e) => {
        setAlamat(e);
    }

    const changeOnPekerjaan = (e) => {
        setPekerjaan(e);
    }

    const updateAkun = () => {
        const data = {
            nama : nama,
            email: email,
            nohp: nohp,
            alamat: alamat,
            pekerjaan: pekerjaan
        }
        axios.put(`http://192.168.18.7:4000/users/${idUser}`, data).then(
            res => {
                console.log("sukses update akun");
                Alert.alert("Berhasil Update Akun")
            }
        )
    }

    useEffect(() => {
        getDataUser();
    }, [])
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Akun</Text>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={selectImage}>
                            <View style={styles.imgContainer}>
                                {
                                    photo ? (
                                        <Image source={{ uri: `http://192.168.18.7:4000/resources/uploads/${photo}` }} style={styles.imgSize2} />
                                    ) :
                                        cPhoto.path ? cPhoto.path && (
                                            <Image source={{ uri: cPhoto.path }} style={styles.imgSize2} />
                                        ) : (
                                            <Icon type='font-awesome' name='user' size={normalize(100)} color={"#808080"} />
                                        )
                                }
                            </View>
                        </TouchableOpacity>

                        <View style={styles.tube}>
                            <TextInput placeholder='Nama Lengkap' onChangeText={changeOn} value={nama} style={{ color: "black" }} />
                        </View>
                        <View style={styles.tube}>
                            <TextInput placeholder='Email' onChangeText={changeOnEmail} value={email} style={{ color: "black" }} />
                        </View>
                        <View style={styles.tube}>
                            <TextInput placeholder='No Handphone' onChangeText={changeOnPhone} keyboardType='phone-pad' value={nohp} maxLength={12} style={{ color: "black" }} />
                        </View>
                        <View style={styles.tube}>
                            <TextInput placeholder='Alamat' maxLength={255} onChangeText={changeOnAlamat} value={alamat ? alamat : ''} placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>
                        <View style={styles.tube}>
                            <TextInput placeholder='Pekerjaan' onChangeText={changeOnPekerjaan} value={pekerjaan ? pekerjaan : ''} placeholderTextColor={"#808080"} style={{ color: "black" }} />
                        </View>

                        <TouchableOpacity style={styles.tubeButton} onPress={updateAkun}>
                            <Text style={styles.text1}>Simpan</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={styles.tubeCancel} onPress={() => props.navigation.navigate("home")}>
                            <Text style={styles.text1}>Kembali</Text>
                        </TouchableOpacity> */}
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
    imgSize2: {
        height: normalize(150),
        width: normalize(150),
        overflow: 'hidden',
        borderRadius: 150
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
        borderColor: "#dfdfdf",
        justifyContent: "center",
        alignItems: "center"
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
        backgroundColor: "#9724DE",
        justifyContent: "center",
        alignItems: "center"
    },
    tubeCancel: {
        width: "90%",
        height: normalize(40),
        borderRadius: 10,
        paddingLeft: normalize(10),
        marginTop: normalize(20),
        backgroundColor: "#D73030",
        justifyContent: "center",
        alignItems: "center"
    },
})