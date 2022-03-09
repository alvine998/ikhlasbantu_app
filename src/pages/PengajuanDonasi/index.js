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


const PengajuanDonasi = (props) => {
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Kesehatan', value: 'Kesehatan' },
        { label: 'Bencana Alam', value: 'Bencana Alam' },
        { label: 'Sedekah', value: 'Sedekah' },
        { label: 'Lain-lain', value: 'Lain-lain' },
    ]);

    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [target, setTarget] = useState('');
    const [durasi, setDurasi] = useState('');
    const [mail, setMail] = useState('');

    const [photo, setPhoto] = useState(null);
    const [photos, setPhotos] = useState(null);

    const getDataUser = async () => {
        setMail(
            await AsyncStorage.getItem('loginKey').then(
                res => axios.get(`http://192.168.18.7:4000/users/mail/${res}`).then(
                    result => { return result.data }
                )
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

        setInfo(
            fetch(`http://192.168.18.7:4000/upload/donasi`, {
                method: "POST",
                body: formData
            }).then(
                res => res.json().then(
                    response => { console.log(response); return response; }
                )
            )
        )

    }

    const sendId = async(id) => {
        await AsyncStorage.setItem('ajukanKey', id)
    }

    const onBtnSave = async () => {
        if (!judul) {
            Alert.alert("Mohon isi judul donasi", mail._id)
        } else if (!deskripsi) {
            Alert.alert("Mohon isi deskripsi donasi")
        } else if (!target) {
            Alert.alert("Mohon isi target donasi")
        } else if (!durasi) {
            Alert.alert("Mohon isi durasi donasi")
        } else {
            const data = {
                iduser: mail._id,
                judul: judul,
                deskripsi: deskripsi,
                target: target,
                kategori: value,
                durasi: durasi,
            }
            try {
                await axios.post(`http://192.168.18.7:4000/donasis`, data).then(
                    res => {
                        console.log(res.data);
                        console.log("Sukses");
                        sendId(mail._id);
                        props.navigation.navigate("upload-donasi");
                    }
                ).catch(err => {
                    console.log(err)
                })
            } catch (err) {
                console.log(err)
            }

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
                    <Text style={styles.text1}>Pengajuan Donasi</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        {/* <TouchableOpacity onPress={selectImage}>
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
                        </TouchableOpacity> */}
                        <Icon type='font-awesome-5' name='hand-holding-usd' size={normalize(100)} color={"#9724DE"} />

                        <View style={styles.input}>
                            <TextInput value={judul} onChangeText={(e) => setJudul(e)} placeholder='Judul Donasi' maxLength={35} />
                        </View>

                        <View style={styles.input2}>
                            <TextInput value={deskripsi} onChangeText={(e) => setDeskripsi(e)} placeholder='Deskripsi' maxLength={255} multiline />
                        </View>

                        <View style={styles.input}>
                            <TextInput value={target} onChangeText={(e) => setTarget(e)} placeholder='Target Donasi' keyboardType='numeric' />
                        </View>

                        <View style={styles.input}>
                            <TextInput value={durasi} onChangeText={(e) => setDurasi(e)} placeholder='Durasi' keyboardType='numeric' />
                        </View>

                        <Dropdown
                            style={styles.input3}
                            data={items}
                            valueField="value"
                            labelField='label'
                            label="Dropdown"
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                                console.log("selected", item);
                            }}
                        />

                        <TouchableOpacity onPress={() => { onBtnSave(); }} style={styles.btnSave}>
                            <Text style={styles.text1}>Ajukan Sekarang</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default PengajuanDonasi;

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