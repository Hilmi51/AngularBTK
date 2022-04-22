class Personel {

    constructor(ad,soyad) {
        this.ad=ad
        this.soyad=soyad
    }

    kaydet(){
        console.log(`Personel Kaydedildi. ${this.ad}`)
    }
}

const personel = new Personel("Hilmi","Safak")
personel.kaydet();

personel.ad="Hilmi"
console.log(personel.ad)