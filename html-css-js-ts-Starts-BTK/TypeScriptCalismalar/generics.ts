function deger(x: number): number {
    return x
}

function deger2(x: string): string {
    return x
}

let sayi = deger(10)
console.log(sayi);

let sehir = deger2("Nigde")
console.log(sehir);

function deger3<T>(x: T): T {
    return x
}
let sayi2 = deger3<number>(3)
let sehir2 = deger3<string>("Ankara")
console.log(sayi2);
console.log(sehir2);

class GenericClass<T> {
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre
    }
}

let sinif = new GenericClass<number>()
sinif.fonksiyon(2)