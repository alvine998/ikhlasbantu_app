import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { SliderBox } from 'react-native-image-slider-box';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { muamalat, payment } from '../../assets';
import ImageCropPicker from 'react-native-image-crop-picker';
import { uploadReplaceImage } from '../../utils';

const Pembayaran = (props) => {
    const [collect, setCollect] = useState([]);
    const [key, setKey] = useState('');
    const [judul, setJudul] = useState('');
    const [terkumpul, setTerkumpul] = useState(0);
    const [target, setTarget] = useState(0);
    const [desc, setDesc] = useState('');
    const [foto, setFoto] = useState(null);
    const [len, setLen] = useState([]);
    const [nama, setNama] = useState('');

    const [photo, setPhoto] = useState('');
    const [oldphoto, setOldPhoto] = useState('');

    const selectImage = () => {
        ImageCropPicker.openPicker({
            width:normalize(150),
            height:normalize(250),
            cropping: true,
            cropperCircleOverlay: false
        }).then(image=>{
            console.log(image.path);
            setPhoto(image.path);
            uploadImage();
        })
    }

    const uploadImage = async () => {
        console.log(photo);
        const newPhoto = photo;
        const oldPhoto = oldphoto;
        const urlImage = `http://192.168.18.7:4000/resources/uploads/`;
        let newUpload = '';
        if(newPhoto === urlImage + oldPhoto){
            newUpload = oldPhoto;
        } else {
            newUpload = newPhoto;
        };

        let result = {info:''};
        try{
            result = await uploadReplaceImage(oldPhoto, newUpload, newPhoto);
        } catch(err){
            console.log("Error : ", err);
        };

        const dataUpdate = {
            images: result.info 
        }
    }

    return (
        <View>
            <StatusBar animated backgroundColor={"#9724DE"} barStyle={'light-content'} />
            <View style={styles.background}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.goBack()}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Pembayaran</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <Image source={muamalat} style={styles.imgSize2} />
                        <Text style={styles.text2}>No Rekening : (147) 3460006152 {"\n"}A.N{"\n"}Yayasan Semesta Bertasbih</Text>
                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>selectImage()}>
                                {
                                    photo == '' ? (
                                        <Image source={payment} style={styles.imgSize} />
                                    ) : (
                                        <Image source={{uri: oldphoto !== photo ? photo : `http://192.168.18.7:4000/resources/uploads/${oldphoto}`}} style={styles.imgSize} />
                                    )
                                }
                                {/* {
                                    (photo !== '' || oldphoto !== '') && (
                                        <Image source={{uri: oldphoto !== photo ? photo : `http://192.168.18.7:4000/resources/uploads/${oldphoto}`}} style={styles.imgSize} />
                                    )
                                } */}
                                <Text style={styles.text5}>Upload disini</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <View style={styles.btn1}>
                                <Text style={styles.text1}>Konfirmasi Pembayaran</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Pembayaran;

const styles = StyleSheet.create({
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    imgSize: {
        height: normalize(200),
        width: normalize(200)
    },
    imgSize2: {
        height: normalize(150),
        width: normalize(250),
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
        textAlign:"center"
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
    container2: {
        paddingLeft: normalize(20),
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
        width: normalize(330),
        height: normalize(40),
        backgroundColor: "#9724DE",
        borderRadius: 20,
        borderColor: "#808080",
        justifyContent: "center",
        alignItems: "center",
        marginTop: normalize(20)
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