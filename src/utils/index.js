import axios from "axios";

export const uploadReplaceImage = async (oldFile, newFile, newName) => {
  // Foto ada tapi tidak diubah
  if (oldFile === newFile) {
    return { info: newFile };
  }

  // Kalau foto skrg undefined diubah jadi string kosong dulu
  if (oldFile === undefined) {
    oldFile = "";
  }

  // Hapus foto lama
  if (oldFile !== "") {
    await axios.delete(`http://192.168.18.7:4000/delete/${oldFile}`);
  }

  // Hapus foto profil
  if (newFile === "") {
    return { info: newFile };
  }

  // Foto profil baru
  let fileName = `images_${newName.replace(/\s/g, "")}`;
  let photo = {
    uri: newFile,
    type: "image/jpg",
    name: fileName,
  };

  //use formdata
  let formData = new FormData();
  //append created photo{} to formdata
  formData.append("images", photo);

  const { data: dataImage } = await axios({
    method: "POST",
    url: `http://192.168.18.7:4000/upload`,
    data: formData,
  });

  return dataImage;
};