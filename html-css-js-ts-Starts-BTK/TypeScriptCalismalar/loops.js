var sehirler = ["Ankara", "Istanbul", "Nigde", "Izmir", "Bursa"];
for (var i in sehirler) { // in index'Ten geliyormuş gibi düşün. xD
    console.log(i);
}
for (var _i = 0, sehirler_1 = sehirler; _i < sehirler_1.length; _i++) { // of ile datalara ulaşırız ve genel olarak of kullanılır.
    var i = sehirler_1[_i];
    console.log(i);
}
