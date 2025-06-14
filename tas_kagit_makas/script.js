let skor = 0;
//butonumuzu seçip fonksiyonumuzu oluşturalım
let buton = document.getElementById("btn");
buton.onclick = function() {


    //değişkenlerimizi belirtelim
    let sec = document.getElementById("secim");
    let kullanici = sec.value;
    let bilgisayar = Math.floor(Math.random() * 3) + 1;
    let BilgisayarParagraf = document.getElementById("BilgisayarParagrafi")
    let SonucParagraf = document.getElementById("SonucParagrafi")
    let SkorParagraf = document.getElementById("SkorParagrafi")

    
    

    //bilgisayarın yaptığı seçimleri konsola yazdıralım
    if (bilgisayar === 1){
        BilgisayarParagraf.textContent = "Bilgisayar: Taş"
    }
    if (bilgisayar === 2){
        BilgisayarParagraf.textContent = "Bilgisayar: Kağıt"
    }
    if (bilgisayar === 3){
        BilgisayarParagraf.textContent = "Bilgisayar: Makas"
    }


    //koşulları ve kimin kazandığını konsola yazdıralım|
    if (kullanici === "1" && bilgisayar === 1) {
        console.log("berabere");
        SonucParagraf.textContent = "Sonuç: Berabere";
    }
    
    else if(kullanici === "1" && bilgisayar === 2) {
        console.log("Bilgisayar kazandı");
        SonucParagraf.textContent = "Sonuç: Bilgisayar Kazandı";
        skor --;
    }
    else if(kullanici === "1" && bilgisayar === 3) {
        console.log("Kullanıcı kazandı");
        SonucParagraf.textContent = "Sonuç: Kullanıcı Kazandı";
        skor ++;
    }
    else if(kullanici === "2" && bilgisayar === 1) {
        console.log("Kullanıcı kazandı");
        SonucParagraf.textContent = "Sonuç: Kullanıcı Kazandı";
        skor ++;
    }
    else if(kullanici === "2" && bilgisayar === 2) {
        console.log("Berabere");
        SonucParagraf.textContent = "Sonuç: Berabere";
    }
    else if(kullanici === "2" && bilgisayar === 3) {
        console.log("Bilgisayar kazandı");
        SonucParagraf.textContent = "Sonuç: Bilgisayar Kazandı";
        skor --;
    }
    else if(kullanici === "3" && bilgisayar === 1) {
        console.log("Bilgisayar kazandı");
        SonucParagraf.textContent = "Sonuç: Bilgisayar Kazandı";
        skor --;
    }
    else if(kullanici === "3" && bilgisayar === 2) {
        console.log("Kullanıcı kazandı");
        SonucParagraf.textContent = "Sonuç: Kullanıcı Kazandı";
        skor ++;
    }
    else if(kullanici === "3" && bilgisayar === 3) {
        console.log("Berabere");
        SonucParagraf.textContent = "Sonuç: Berabere";
    }
    console.log("skorunuz = " + skor);
    SkorParagraf.textContent = "Skor: " + skor;
    
}