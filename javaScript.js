
let raining = false;

if (raining) {
    console.log("şemsiyeni al");
}

let a = 17;
let b = 16;
let c = 6;
if (a > b && b === c) {
    console.log(`${a} ${b}'dan büyüktür`)
} else {
    console.log(`${a} ${b}'dan büyük değildir`)
}

let net = "merhaba let a = 25"
let ne2 = 'merhaba let a = 25'
let net3 = `merhaba ${a}`
console.log(net3)


if (a >= 18) {
    console.log("dışarı çıkabilir");
} else {
    console.log("dışarı çıkamaz");
}


if (a > 12 && a < 18) {
    console.log("dışarı çık, çok uzaklaşma")
} else if (a >= 18) {
    console.log("kalbinin götürdüğü yere git")
} else if (a >= 65) {
    console.log("yine evede otur")
}
else {
    console.log("evde otur")
}

if (b > 10) {
    console.log("sende evde otur")
}


if (a > 12 && a < 18) {
    if (b === 15) {
        console.log("abinle git")
    }
    if (b > 15) {
        console.log("tek başına gidebilirsin")
    }
} else if (a >= 18) {
    console.log("kalbinin götürdüğü yere git")
} else if (a >= 65) {
    console.log("yine evede otur")
}
else {
    console.log("evde otur")
}
 isMantarZehiro = true;

if (isMantarZehiro) {
    if (a < 6 && a > 65) {
        console.log("yoğun bakım")
    } else {
        console.log("ayakta tedavi")
    }
} else {
    console.log("afiyet olsun");
}


//const inputValue = prompt ("lütfen yaşınızı giriniz")
//console.log(inputValue);

//if (inputValue < 15 ){
//  console.log(`${inputValue} yaşındasınız ve küçüksünüz`)
//}

console.log("10" + 1) // 101
console.log("10" - 1) // 9

let rain = 98;  //true // herhangi bir değer var ise
rain = false
rain = 0
rain = null
rain = undefined;
rain = NaN
rain = ""

console.log(rain)
if (rain) {
    console.log("şemsiyeni al");
} else {
    console.log("rain yok")
}

let x = 0;
let randum = Math.floor(Math.random() * 10);

if (randum > 5) {
    x--; // doğru ise x i bir eksiltir 
} else { //eğer anlamında
    x++ // doğru ise x i bir artırır
}

console.log(x);


//let weekDay = prompt("günü giriniz").toLowerCase();
let weekDay = "monday"
//let lower = weekDay.toLowerCase();

// if (weekDay === "Monday") {
//     console.log(` bügün günlerden ${weekDay}, yemek menüsü ... `)
// }monday

switch (weekDay) {
    case "monday":
        console.log(`bugün günlerden${weekDay}, yemek menüsü Pazartesi... `);
        break;
    case "tuesday":
        console.log(`bugün günlerden${weekDay}, yemek menüsü Salı... `);
        break;
    case "wednesday":
        console.log(`bugün günlerden${weekDay}, yemek menüsü Çarşamba... `);

        break;
    case "thursday":
        console.log(`bugün günlerden${weekDay}, yemek menüsü Perşambe... `);
        break;
    case "friday":
        console.log(`bugün günlerden${weekDay}, yemek menüsü Cuma... `);
        break;


    default:
        console.log("bugün hafta sonu")
        break;
}
let m = 3;
let n = 4;

switch (m > n) {
    case true:
        console.log("m n'den büyük")
        break;
    default:
        console.log("hayır n büyük ")
        break;
}

switch (true) {
    case m > n:
        console.log("m n'den büyüktür");
        break;
    case m < n:
        console.log("hayır n büyüktür");
        break;

    default:
        console.log("eşitler")
        break;
}
let hava = "yagmurlu";

switch (hava) {
    case "yagmurlu":
        console.log(hava);
        break; // break olkmazsa alttakileride doğru kabul eder
    case "karlı":
        console.log(hava);
        break;

    case "günesli":
        console.log(hava);
        break;

    default:
        console.log("default");
        break;
}

let yagmurluk = true;

switch (hava) {
    case "yagmurlu":
        switch (yagmurluk) {
            case true:
                console.log("yagmurluk giy ")
                break;

            default:
                console.log("yagmurluk satın al")
                break;
        }
        console.log(hava);
        break; // break olkmazsa alttakileride doğru kabul eder
    case "karlı":
        console.log(hava);
        break;

    case "günesli":
        console.log(hava);
        break;

    default:
        console.log("default");
        break;
}

let araba = "toyota"
let var1 = null
switch (araba) {
    case "honda":
        var1 = "kırmızı"
        break;

    case "toyota":
        var1 = "siyah"
        break;

    default:
        break;
}

console.log(var1);

gece = true

if (gece){
   console.log("dişlerini fırçala"); 
}else {
    console.log("çalışmaya devam");  
}

gece ? console.log("dişlerini fırçala") :console.log("çalışmaya devam"); // yukardakinin aynısı ? if yerine : else yerine

let time = 12 
let mesaj = "";

time >= 17 ? mesaj = " mesai bitti" : time >= 12 && time <=13 ? mesaj = "öğlen arası" : time < 8 ? mesaj="mesai başlamadı": mesaj= "mesaiye devam";
console.log(mesaj)

let mesaj2 = time > 8 ?  "mesai  başladı" : "mesai başlamadı";

console.log(mesaj2)



