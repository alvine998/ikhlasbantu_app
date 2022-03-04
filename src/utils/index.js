import React from 'react';

export const uploadReplaceImage = async (photos) => {
  let photo = {
    name: photos.fileName,
    type: photos.type,
    uri: photos.uri
  }


  let formData = new FormData();
  formData.append("files", photo)

  const {data: dataImage} = await fetch(`http://192.168.18.7:4000/upload/ktp`, {
    method: "POST",
    body: formData
  })

  return dataImage;
};