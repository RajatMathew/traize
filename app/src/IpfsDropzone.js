import React from "react";
import ReactDOM from "react-dom";
import IpfsImageDrop from "ipfs-image-drop";

const UploadImage = () => {
   <IpfsImageDrop
   ipfsHost="ipfs.infura.io"
   ipfsPort="5001"
   resizeWidth="100"
   onUpload={console.log} 
/>,
};

export default UploadImage;
