function generateQRCode() {
    let website = document.getElementById("website").value;

    if(website) {
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, website);

        document.getElementById("qrcode_container").style.display = "block";
    } else {
        alert ("please enter a valid URL");
    }
}