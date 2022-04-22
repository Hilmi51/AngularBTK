class Ev {
    private odaSayisi: number; // Private sadece tanımlandığı class içinde geçerlidir.
    public pencereSayisi: number; // Public'te ise herkes erişebilir.
    kat: number; // Default değer olarak public veriliyor.

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi
        this.pencereSayisi = pencereSayisi
        this.kat = kat
    }

    yemekYe() {
        console.log(this.kat + " katlı evde" + " Yemek yenildi.");
    }
}

let ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev.kat);
// console.log(ev.odaSayisi);
console.log(ev.pencereSayisi);

class Kisi {
    private _isim: string;

    get isim(): string {
        return "Sayın : " + this._isim;
    }

    set isim(isim: string) {
        this._isim = isim
    }

    kaydet() {
        console.log("Kişi kaydedildi.");
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log("Satış yapıldı.");
    }
}

class Personel extends Kisi {
    maasOde() {
        console.log("Maaş yatırıldı.");
    }
}

let musteri = new Musteri();
musteri.isim = "Hilmi"
console.log(musteri.isim);
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();