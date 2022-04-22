/*
document.getElementById("bio").innerHTML="Hilmi Safak : 2005"

var intro1 = document.getElementById("intro1");
var mesaj = document.getElementById("mesaj");
mesaj.innerHTML=intro1.innerHTML;

var liste = document.getElementsByTagName("ul");
var sehirler = liste[0];
tumElemanlar = sehirler.getElementsByTagName("li");

for (i=0;i<tumElemanlar.length;i++){
    alert(tumElemanlar[i].innerHTML);
}

var classElemanlari = document.getElementsByClassName("intro1");
alert(classElemanlari[1].innerHTML);
alert(classElemanlari.length);

var queryElemanları = document.querySelectorAll("p.intro1");
alert(queryElemanları.length);

var isimElemanlari = document.getElementsByName("musteriAdi");
alert(isimElemanlari[0].value);

var burak = document.getElementById("burak").addEventListener("mouseover",rengiDegistir);
function rengiDegistir() {
    document.getElementById("div1").style.backgroundColor="red";
    var isimElemanlari = document.getElementsByName("musteriAdi");
    isimElemanlari[0].value = "Nihal"

}

var node = document.getElementById("agac");
alert(node.childNodes[0].nodeValue);
*/

var baslik = document.createElement("h3");
var node = document.createTextNode("Merhava JavaScript");
baslik.appendChild(node)

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2);

alert("P2 siliniyor")
div1.removeChild(p2);

alert("Degistiriliyor");
var p1 = document.getElementById("p1");
div1.replaceChild(baslik,p1)