import axios from "axios";

export const uploadReplaceImage = async (photos) => {

    // Foto profil baru
    // let fileName = `${newName.replace(/\s/g, "")}`;
    // console.log("Hei : ",fileName)
    let photo = {
        uri: photos.uri,
        type: photos.type,
        name: photos.fileName,
    };
    console.log(photo)
    // user formdata
    let formData = new FormData();

    formData.append("images", photo);

    const {data: dataImage} = await axios.post(`http://192.168.18.7:4000/upload`, formData).then(
        res => {
            console.log(res.data);
            console.log(photo);
        }
    ).catch(err => {
        console.log(err)
        console.log("ver ",dataImage);
    });
    return dataImage;
}