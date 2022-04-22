function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 3));
console.log(topla2(2, 4));
console.log(topla3(4, 8));
function topla4(x, y) {
    if (y === void 0) { y = 5; }
    return x + y;
}
console.log(topla4(3));
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3, 40));
// function davetEt(ilkDavetli: string, ...diğerleri: string[]): string {
function davetEt(ilkDavetli) {
    var diğerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        diğerleri[_i - 1] = arguments[_i];
    }
    // return ilkDavetli + " " + diğerleri.join(" ")
    return ilkDavetli + " " + diğerleri.join(" ");
}
console.log(davetEt("Hilmi", "Engin", "Mehmet", "Burak", "Recep"));
