function greeter(name) {
    return "Merhaba " + name;
}
var mesaj = greeter('Hilmi');
console.log(mesaj);
var sayi;
sayi = 10;
sayi = 10.4;
var sehir = "Adana";
sehir = "Ankara";
sehir = "İstanbul";
var dogrumu = true;
dogrumu = true;
dogrumu = false;
var sayilar = [1, 2, 3];
var sayilar2 = [4, 5, 6];
var dizi = [2, "Ankara"];
// dizi[0] // 2'ye erişir
// dizi[1] // Ankara'ya erişir
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
var deger = "Ankara";
deger = 2;
deger = {};
var deger2 = undefined;
deger = 2;
deger = {};
function selamVer2() {
    console.log("Merhaba");
}
// undefined null
var yas;
yas: 10;
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
