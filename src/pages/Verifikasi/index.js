import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { SliderBox } from 'react-native-image-slider-box';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { ktp, muamalat, payment } from '../../assets';
import ImageCropPicker from 'react-native-image-crop-picker';
import { uploadReplaceImage } from '../../utils';
import { launchImageLibrary } from 'react-native-image-picker';


const Verifikasi = (props) => {
    const [collect, setCollect] = useState([]);
    const [photos, setPhotos] = useState(null);

    const [photo, setPhoto] = useState(null);
    const [oldphoto, setOldPhoto] = useState(null);
    const [statusUser, setStatusUser] = useState('');
    const [statusKTP, setStatusKTP] = useState('');
    const [idUser, setIdUser] = useState('');

    // const selectImage = () => {
    //     ImageCropPicker.openPicker({
    //         width: normalize(350),
    //         height: normalize(200),
    //         cropping: true
    //     }).then(image => {
    //         console.log(image.path);
    //         setPhoto(image.path);
    //     })
    // }

    const selectImage = () => {
        var options = {
            title: "Select Image",
            customButtons: [
                {
                    name: "customeOptionKey",
                    title: "Choose file from Custom Option"
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log("User cancel image picker")
            } else {
                const anything = response.assets;
                const arr = anything.map((e, i) => e.uri);
                console.log(response.assets[0])
                setPhotos(anything[0])
                setPhoto(arr[0])
            }
        })
    }

    const getData = async () => {
        await AsyncStorage.getItem(`loginKey`).then(
            res => {
                axios.get(`https://ikhlasbantu.herokuapp.com/users/mail/${res}`).then(
                    result => {
                        const results = result.data;
                        setOldPhoto(results.fotoktp); setStatusKTP(results.statusktp);
                        setStatusUser(results.statususer); setIdUser(results._id)
                    }
                )
            }
        )
    }

    const uploadImage = async () => {

        let photo = {
            name: photos.fileName,
            type: photos.type,
            uri: photos.uri
        }


        let formData = new FormData();
        formData.append("files", photo)

        let result = { info: "" }

        result = await fetch(`https://ikhlasbantu.herokuapp.com/upload/ktp`, {
            method: "POST",
            body: formData
        }).then(
            res => res.json().then(
                response => { console.log(response); return response; }
            )
        )

        console.log(result.info)

        const dataUpdate = {
            fotoktp: result.info,
            statusktp: 'waiting'
        }

        axios.put(`https://ikhlasbantu.herokuapp.com/users/${idUser}`, dataUpdate).then(
            res => {
                console.log("Sukses Update")
            }
        )

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Verifikasi</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity disabled={statusKTP == 'verified' ? true : statusKTP == 'waiting' ? true : false} onPress={() => selectImage()} style={{ borderRadius: 20 }}>
                            <View style={styles.containerKtp}>
                                {
                                    photo !== null ? photo && (
                                        <Image source={{ uri: photo }} style={styles.imgSize2} />
                                    )
                                        : oldphoto !== null ? (
                                            <Image source={{ uri: `https://ikhlasbantu.herokuapp.com/resources/uploads/${oldphoto}` }} style={styles.imgSize2} />
                                        ) :
                                            (
                                                <Image source={ktp} style={styles.imgSize} />
                                            )
                                }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={statusKTP == 'verified' ? styles.btn2 : statusKTP == 'waiting' ? styles.btn2 : styles.btn1} disabled={statusKTP == 'verified' ? true : statusKTP == 'waiting' ? true : false} onPress={() => uploadImage()}>
                            <Text style={styles.text1}>{statusKTP == 'verified' ? "Verified" : statusKTP == 'waiting' ? "Tunggu Verifikasi" : "Verifikasi KTP"}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        </View >
    );
}

export default Verifikasi;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    imgSize: {
        height: normalize(100),
        width: normalize(100)
    },
    imgSize2: {
        height: normalize(180),
        width: normalize(300),
        borderRadius: 20
    },
    header: {
        height: normalize(50),
        backgroundColor: "#9724DE",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: normalize(20),
    },
    banner: {
        height: normalize(150),
        width: normalize(300),
        backgroundColor: "#9724DE",
        borderRadius: 20,
        marginRight: normalize(20)
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
        marginTop: normalize(-30),
        textAlign: "center"
    },
    text3: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(16),
        marginTop: normalize(10)
    },
    text4: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(14),
        textAlign: "justify"
    },
    text5: {
        fontFamily: "Quicksand-Bold",
        color: "#9724DE",
        fontSize: normalize(20),
        textAlign: "center"
    },
    text6: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(16),
    },
    textR: {
        fontFamily: "Quicksand-Bold",
        color: "black",
        fontSize: normalize(16),
        textAlign: "right",
        flex: 1
    },
    container: {
        padding: normalize(20),
        justifyContent: "center",
        alignItems: "center",
    },
    containerKtp: {
        width: normalize(350),
        height: normalize(200),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#9724DE"
    },
    container3: {
        paddingLeft: normalize(10),
        paddingRight: normalize(50),
        paddingTop: normalize(10)
    },
    container4: {
        paddingRight: normalize(20),
    },
    btn1: {
        width: normalize(350),
        height: normalize(40),
        backgroundColor: "#9724DE",
        borderRadius: 20,
        borderColor: "#808080",
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(20)
    },
    btn2: {
        width: normalize(350),
        height: normalize(40),
        backgroundColor: "#9724DE50",
        borderRadius: 20,
        borderColor: "#808080",
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(20),
    },
    lining: {
        marginTop: normalize(10),
        height: normalize(3),
        borderWidth: 1,
        borderColor: "#808080",
        marginBottom: normalize(10)
    },
    lining2: {
        marginTop: normalize(10),
        height: normalize(10),
        borderWidth: 1,
        borderColor: "#808080",
        marginBottom: normalize(10),
        borderRadius: 20,
        width: "100%",
        backgroundColor: "#808080"
    },
    lining3: {
        marginTop: normalize(10),
        height: normalize(10),
        borderWidth: 1,
        borderColor: "#9724DE",
        marginBottom: normalize(10),
        borderRadius: 20,
        width: "100%",
        backgroundColor: "#9724DE",
    },
    slider: {
        height: normalize(200),
        borderRadius: 20,
        width: normalize(340)
    }
})