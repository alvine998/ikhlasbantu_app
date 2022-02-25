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

const Verifikasi = (props) => {
    const [collect, setCollect] = useState([]);
    const [key, setKey] = useState('');

    const [photo, setPhoto] = useState('');
    const [oldphoto, setOldPhoto] = useState('');

    const selectImage = () => {
        ImageCropPicker.openPicker({
            width:normalize(350),
            height:normalize(200),
            cropping: true,
            cropperCircleOverlay: false
        }).then(image=>{
            console.log(image.path);
            setPhoto(image.path);
            uploadImage();
        })
    }

    const uploadImage = async () => {
        console.log("uri : ",photo);
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
        console.log("new ",newUpload);
        try{
            result = await uploadReplaceImage(oldPhoto, newUpload, newPhoto);
            console.log(result);
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
                    <TouchableOpacity style={{ paddingRight: normalize(20) }} onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(20)} />
                    </TouchableOpacity>
                    <Text style={styles.text1}>Verifikasi</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={()=>selectImage()} style={{borderRadius:20}}>
                            <View style={styles.containerKtp}>
                                {
                                    photo !== "" ? (
                                        <Image source={{uri: oldphoto !== photo ? photo : `http://192.168.18.7:4000/resources/uploads/${oldphoto}`}} style={styles.imgSize2} />
                                    ) : (
                                        <Image source={ktp} style={styles.imgSize} />
                                    )
                                }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.text1}>Verifikasi KTP</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
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
        borderRadius:20
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
    containerKtp: {
        width:normalize(350),
        height:normalize(200),
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#9724DE"
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