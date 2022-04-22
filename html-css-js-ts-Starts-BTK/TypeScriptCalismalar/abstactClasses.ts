abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("Kaydedildi.");
    }
    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı.");
    }
}

class MortgageKredi extends KrediBase{
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("Konut kredisine göre hesap yapıldı.");
    }
}

let tuketiciKredi = new TuketiciKredi();
tuketiciKredi.hesapla();
tuketiciKredi.kaydet();

let mortgageKredi = new MortgageKredi();
mortgageKredi.hesapla();
mortgageKredi.kaydet();

let kredi : KrediBase
kredi = new TuketiciKredi()
kredi = new MortgageKredi()