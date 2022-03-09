import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { emptyMessage } from '../../assets';
// import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const UploadDonasi = (props) => {
    const [photo, setPhoto] = useState(null);
    const [photos, setPhotos] = useState(null);
    const [key, setKey] = useState('')

    const getDataUser = async () => {
        setKey(
            await AsyncStorage.getItem("ajukanKey").then(
                res => {
                    const result = res.data;
                    return result;
                }
            )
        )
    }

    useEffect(() => {
        getDataUser();
    }, [])

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
        console.log("ID : ", key[0]);
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

    const uploadFoto = () => {
        let photo = {
            name: photos.fileName,
            type: photos.type,
            uri: photos.uri
        }
        console.log(photo)
        let formData = new FormData();
        formData.append("donasiimages", photo)

        let result = { info: "" }

        result = fetch(`http://192.168.18.7:4000/upload/donasi`, {
            method: "POST",
            body: formData
        }).then(
            res => res.json().then(
                response => { console.log(response); return response; }
            )
        )

        console.log(result.info);
        const data = {
            foto: result.info
        }
        axios.put(`http://192.168.18.7:4000/donasis/${id}`, data).then(
            res => {
                console.log(res.data);

            }
        )
    }
    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Pengajuan Donasi</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={selectImage}>
                            <View style={styles.borderImg}>
                                {
                                    photo && (
                                        <Image source={{ uri: photo }} style={styles.imgSize} />
                                    )
                                }
                                {
                                    photo ? null : (<Text style={styles.text2}>Pilih Gambar Donasi</Text>
                                    )
                                }
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={styles.btnSave}>
                            <Text style={styles.text1}>Selanjutnya</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default UploadDonasi;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    imgSize: {
        height: normalize(200),
        width: normalize(300),
        overflow: "hidden",
        borderRadius: 20
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
    },
    container: {
        padding: normalize(20),
        alignItems: "center",
    },
    borderImg: {
        borderWidth: 1,
        borderColor: "#9724DE",
        width: normalize(300),
        height: normalize(200),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#808080",
        width: normalize(300),
        height: normalize(40),
        borderRadius: 10,
        marginTop: normalize(20),
        paddingLeft: normalize(20)
    },
    input3: {
        borderWidth: 1,
        borderColor: "#808080",
        width: normalize(300),
        height: normalize(40),
        borderRadius: 10,
        marginTop: normalize(20),
        paddingLeft: normalize(20),
        paddingRight: normalize(20)
    },
    input2: {
        borderWidth: 1,
        borderColor: "#808080",
        width: normalize(300),
        height: normalize(100),
        borderRadius: 10,
        marginTop: normalize(20),
        paddingLeft: normalize(20)
    },
    btnSave: {
        width: normalize(300),
        height: normalize(40),
        borderRadius: 10,
        marginTop: normalize(20),
        backgroundColor: "#9724DE",
        justifyContent: "center",
        alignItems: "center"
    }
})