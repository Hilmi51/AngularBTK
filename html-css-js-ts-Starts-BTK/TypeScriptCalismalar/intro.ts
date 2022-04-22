function greeter(name: string) {
    return "Merhaba " + name;
}

let mesaj = greeter('Hilmi')


console.log(mesaj);

let sayi: number;
sayi = 10
sayi = 10.4

let sehir: string = "Adana";
sehir = "Ankara"
sehir = "İstanbul"

let dogrumu: boolean = true;
dogrumu = true
dogrumu = false

let sayilar: number[] = [1, 2, 3]
let sayilar2: Array<number> = [4, 5, 6]

let dizi: [number, string] = [2, "Ankara"]
// dizi[0] // 2'ye erişir
// dizi[1] // Ankara'ya erişir

enum Renk {
    Kirmizi = 1,
    Siyah,
    Mavi
}
let renk: Renk = Renk.Kirmizi

let deger: any = "Ankara";
deger = 2;
deger = {};

let deger2: void = undefined;
deger = 2;
deger = {};

function selamVer2(): void {
    console.log("Merhaba");
}

// undefined null

let yas: number;
yas: 10

class Musteri {

}