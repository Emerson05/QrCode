
let imgBOx = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

function generateQR(){

    if(qrText.value.lenght > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
        + qrText.value
        imgBOx.classList.add("show-img")
    }else{
        qrText.classList.add('erro');
        setTimeout(()=>{
            qrText.classList.remove('erro');
        },1000);
    }
  
}