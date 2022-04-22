var kullanicilar = [
    {email:"hilmisafak@gmail.com",sifre:"deneme"},
    {email:"buraksafak@gmail.com",sifre:"deneme"}
]

var tiwitler = [
    {email:"hilmisafak1@gmail.com",tiwit:"Bugün hava çok güzel"},
    {email:"hilmisafak1@gmail.com",tiwit:"Bugün hava çok güzel2"},
    {email:"buraksafak1@gmail.com",tiwit:"Kapıyı ben açıcağım"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)||(email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
            console.log(tiwitler)
    }else{
        console.log("Kullanıcı adı veya şifresi hatalı!")
    }
}
giris(email,sifre)