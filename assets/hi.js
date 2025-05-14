let sayi1 = Number(prompt('1.sayiyi giriniz: '));
let sayi2 = Number(prompt('2.sayiyi giriniz: '));
let islem = prompt('Yapmak istediginiz islem (+, -, *, /) ');

let sonuc;

if ( islem == '+') {
    sonuc = sayi1 + sayi2;
}
else if  ( islem == '-') {
    sonuc = sayi1 - sayi2;
}
else if  ( islem == '*') {
    sonuc = sayi1 * sayi2;
}
else if  ( islem == '/') {
    if ( sayi2 != 0) {
    sonuc = sayi1 / sayi2;
} else { 
    sonuc = 'Bir sayi sifira bolunmez'; 
}
}

alert('Sonuc: ' + sonuc);
