// Butonu seçme
var buton = document.getElementById("butonum");

// Butona tıklandığında çalışacak fonksiyonu atama
buton.onclick = function () {
    // Input alanlarını seçme
    var gir1 = document.getElementById("input1");
    var gir2 = document.getElementById("input2");
    var is = document.getElementById("islem")

    // Input alanlarındaki değerleri alma
    var sayi1 = gir1.value;
    var sayi2 = gir2.value;
    var islem = is.value;

    // Değerleri float'a dönüştürme
    sayi1 = parseFloat(sayi1);
    sayi2 = parseFloat(sayi2);


    // İşlemleri yapalım
    if (islem === "+") {
        var sonuc = sayi1 + sayi2;
        console.log(sonuc);
    }
    else if (islem === "-") {
        var sonuc = sayi1 - sayi2;
        console.log(sonuc);
    }
    else if (islem === "*") {
        var sonuc = sayi1 * sayi2;
        console.log(sonuc);
    }
    else if (islem === "/") {
        if(sayi2 === 0){
            var sonuc = "İkinci sayınız 0 olamaz";
        }
        else{
        var sonuc = sayi1 / sayi2;
        console.log(sonuc);
        }
    }

    // Output alanını seçme
    var sonucpar = document.getElementById("sonucburada")

    // Sonucu output alanına yazdırma
    sonucpar.textContent = "Sonuç: " + sonuc;

}




