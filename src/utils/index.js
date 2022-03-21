import React from 'react';

export const uploadReplaceImage = async (photos) => {
  let photo = {
    name: photos.fileName,
    type: photos.type,
    uri: photos.uri
  }


  let formData = new FormData();
  formData.append("files", photo)

  const {data: dataImage} = await fetch(`https://ikhlasbantu.herokuapp.com/upload/ktp`, {
    method: "POST",
    body: formData
  })

  return dataImage;
};