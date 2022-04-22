var kullanicilar = [
    {email:"hilmisafak@gmail.com",sifre:"deneme"},
    {email:"buraksafak@gmail.com",sifre:"deneme"}
]

var tiwitler = [
    {email:"hilmisafak@gmail.com",tiwit:"Bugün hava çok güzel"},
    {email:"hilmisafak@gmail.com",tiwit:"Bugün hava çok güzel2"},
    {email:"buraksafak@gmail.com",tiwit:"Kapıyı ben açıcağım"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email,sifre) {
    console.log(email);
    console.log(sifre);
    for (i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }
    }
    return false;
}

function giris(){
    if(kullaniciVarmi(email,sifre)){
        console.log(tiwitler)
    }else{
        console.log("Kullanıcı emaili veya şifresi hatalı!")
    }
}

giris(email,sifre)