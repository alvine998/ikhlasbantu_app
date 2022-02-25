import axios from "axios";

export const uploadReplaceImage = async (oldFile, newFile, newName) => {
    // Foto ada tapi tidak diubah
    if(oldFile === newFile){
        return{info: newFile}
    }

    // Jika foto undefined maka diubah jadi string kosong
    if(oldFile === undefined){
        oldFile = "";
    }

    // Hapus foto lama
    if(oldFile !== ""){
        await axios.delete(`http://192.168.18.7:4000/delete/${oldFile}`);
    }

    // Hapus foto profil
    if(newFile === ""){
        return {info: newFile};
    }

    // Foto profil baru
    let fileName = `${newName.replace(/\s/g, "")}`;
    let photo = {
        uri: newFile,
        type: "image/jpeg",
        name: fileName,
    };
    // user formdata
    let formData = new FormData();

    formData.append("image", photo);

    const {data: dataImage} = await axios.post(`http://192.168.18.7:4000/upload`, formData).then(
        res => {
            console.log(res.data);
            console.log(photo);
        }
    );
    return dataImage;
}