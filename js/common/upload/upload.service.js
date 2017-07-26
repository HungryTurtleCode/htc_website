class uploadService{
  constructor(firebaseService) {
    this.fb = firebaseService;
  }
  dataURItoBlob(dataURI){
    let byteString;

    if(dataURI.split(',')[0].indexOf('base64') >= 0){
      byteString = atob(dataURI.split(',')[1]);
    }else{
      byteString = unescape(dataURI.split(',')[1]);
    }

    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    let ia = new Uint8Array(byteString.length);//eslint-disable-line

    for(let i = 0; i < byteString.length; i++){
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
  }
}

uploadService.$inject = ['firebaseService'];

export default uploadService;
