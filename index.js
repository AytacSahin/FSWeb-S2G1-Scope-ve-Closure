//README DOSYASINDAKİ ADIMLARI TAKİP ETTİKTEN SONRA AŞAĞIDAKİLERİ YAPINIZ

// Başlangıç Challenge'ı

/**Örnek Görev: İlkini Dön
 * 
 * Bu örnek sonradan gelecek olan görevleri nasıl çözeceğinizi size gösterecek.
 * 
 * Aşağdıaki Yüksek dereceden fonskiyonu(higher-order function) kullanarak aşağıdakileri yapınız
 *  1. Stringlerden oluşan bir array'i parametre olarak alın
 *  2. Bir string'i değişken olarak alan bir callback fonksiyonunu parametre olarak alın 
 *  3. Array'in İLK elemanını değişken olarak alarak çalışacak olan callback fonksiyonunun sonucunu dönün
 * 
 * Aşağıdaki kodlar bu görevin nasıl yapılacağına örnek olacaktır
 * Bu fonskiyon 'asas' dönmeli(return)
*/

function ilkiniDon(stringArray, callback) {
  return callback(stringArray[0])
}
console.log('örnek görev:', ilkiniDon(['AY','TAÇ', 'ŞAH', 'İN'],function(metin){return metin+metin}));

// Başlangıç Challenge'ı Sonu


///// M V P ///////

/*Görev 1: macSkoru()
  
  Aşağıdaki skor1 ve skor2 kodlarını inceleyiniz ve aşağıdaki soruları altına not alarak cevaplayın
  
  1. skor1 ve skor2 arasındaki fark nedir?
  
  2. Hangisi bir closure kullanmaktadır? Nasıl tarif edebilirsin? (yarınki derste öğreneceksin :) )
  
  3. Hangi durumda skor1 tercih edilebilir? Hangi durumda skor2 daha mantıklıdır?
*/

// skor1 kodları
function skorArtirici() {
  let skor = 0;
  return function skorGuncelle() {
   return skor++;
  }
}
const skor1 = skorArtirici();
// console.log("skor-1 yontemi ile >", skor1());

// skor2 kodları
let skor = 0;

function skor2() {
  return skor++;
}
// console.log("skor-2 yontemi ile >", skor2());

////Skor 1 Cevaplarım:
//1. skor1 ve skor2 arasında en önemli fark, skor 1'in fonksiyon içinde fonksiyon olması. Fonksiyon ile çağırıldığında, içerisinde fonksiyona return ile giderek closure çalıştırması. skor 2 ise baya baya dümdüz basit bir şekilde, fonksiyon çalıştığında hesap yapan, basit bir fonksiyon.  
//2. skor1 closure kullanmakta. return ile yeni bir fonksiyon çağırması, bu çağırılan fonksiyonun içindeki değişkenleri, diğer hiç bir fonksiyonun kullanmamasının sağlanması gibi amaçlar sebebiyle kurulmuş bir yöntem.
//3. skor1 ve skor2 her ikisi de aynı sonucu alırız. Tekrarlı işlemlerde, sürekli skoru arttırmak istiyorsak, fonksiyon içindeki fonksiyonu tek bir satır ile çağırarak çok büyük işlem kolaylığı sağlarız. Ama yok, bu işlemi bir defaya mahsus yapıcak isek, skor2 kullanılabilir. 
console.log("Görev 1 > Sorular cevaplandı.")

/* Görev 2: takimSkoru() 
Aşağıdaki takimSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Bir çeyrekte bir takımın ürettiği skoru rastgele(random) elde eden bir sonuc dönünüz(return)
  
  Ön Bilgi: Bir çeyrekte takımlar ortalama 10 ile 25 sayı üretebiliyor
  Örnek: takimSkoru çağrıldığında 10-25 arasında bir skor dönmeli
  
Not: Bu fonskiyon, aşağıdaki diğer görevler için de bir callback fonksiyonu olarak da kullanılacak
*/

function takimSkoru(){
  let skorTekCeyrek = Math.floor(Math.random() * (25 - 10) + 10);
  return skorTekCeyrek;
}
takimSkoru();
console.log("Görev 2 > Tek Bir Periyot İçin Bulunan Skor Değeri:", takimSkoru());


/* Görev 3: macSonucu() 
Aşağıdaki macSonucu() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. Bir basketbol maçında oynanan çeyrek sayısını ikinci parametre olarak alın
  3. Her çeyrekte EvSahibi ve KonukTakim için bir skor oluşturun
  4. Her oynanan çeyrekten sonra EvSahibi ve KonukTakim için skoru güncelleyin
  5. Son çeyrekten sonra, maçın bitiş skorunu bir object olarak dönün(return)

  Örneğin: macSonucu(takimSkoru, 4) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 92,
  "KonukTakim": 80
}
*/ 

function macSonucu(eskiFonksiyonum, ceyrekSayisi){
  let birinciTakimSkoru = 0;
  for (let i = 0; i < ceyrekSayisi; i++) {
    birinciTakimSkoru += eskiFonksiyonum(i);
  }
  let ikinciTakimSkoru = 0;
  for (let i = 0; i < ceyrekSayisi; i++) {
    ikinciTakimSkoru += eskiFonksiyonum(i);
  }
  return {EvSahibi: birinciTakimSkoru, KonukTakim: ikinciTakimSkoru};
}
macSonucu(takimSkoru, 4);
console.log("Görev 3 > Takımların Maç Sonu Skor Tablosu:", macSonucu(takimSkoru, 4));


/* Zorlayıcı Görev 4: periyotSkoru()
Aşağıdaki periyotSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. takimSkoru callback fonksiyonunu kullanarak, EvSahibi ve KonukTakim için bir skor üretin
  3. Bir object olarak EvSahibi ve KonukTakim skorunu dönün
  
Örneğin: periyotSkoru(takimSkoru) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 18,
  "KonukTakim": 12
}
  */

function periyotSkoru(fonk) {
  let birinciTakimbirper = fonk();
  let ikinciTakimbirper = fonk();
  return {EvSahibi: birinciTakimbirper, KonukTakim: ikinciTakimbirper};
}
periyotSkoru(takimSkoru);
console.log("Görev 4 > Takımların 1 Periyottaki Skor Tablosu:", periyotSkoru(takimSkoru));

/* Zorlayıcı Görev 5: skorTabelasi() 
Aşağıdaki skorTabelasi() fonksiyonunu kullanarak aşağıdakileri yapınız:
  1. İlk parametre olarak Görev 4'te oluşturduğumuz 'periyotSkoru'nu bir değişken olarak almalı
  2. İkinci parametre olarak Gröev 2'de oluşturduğumuz 'takimSkoru'nu bir değişken olarak almalı
  3. Üçüncü parametre olarak da oynanacak olan çeyrek sayısını alın
  4. Her bir çeyreğin sonucunu bir string olarak bir array içinde dönün. Aşadaki örnek gibi olmalı. Her çeyrekteki atılan sayıları ayrı ayrı yazmalı(toplam skoru değil!).
  5. Eğer maç berabere biterse uzatmalar oynanmalı ve "Uzatma 1: Ev Sahibi 13 - Konuk Takım 11" eklemeli. (Her uzatma için ayrı ayrı eklemeli)
  6. Maç bitince de final skoru yazmalı: "Maç Sonucu: Ev Sahibi 101 - Konuk Takım 98"

MAÇ UZAMAZ ise skorTabelasi(periyotSkoru,takimSkoru,4)
  
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 11", 
  "Maç Sonucu: Ev Sahibi 61 - Konuk Takım 54"  
]

MAÇ UZAR ise skorTabelasi(periyotSkoru,takimSkoru,4)
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 18",
  "1. Uzatma: Ev Sahibi 10 - Konuk Takım 6" 
  "Maç Sonucu: Ev Sahibi 71 - Konuk Takım 67"  
]
] */
// NOTE: Bununla ilgili bir test yoktur. Eğer logladığınız sonuçlar yukarıdakine benziyor ise tmamlandı sayabilirsiniz.

function skorTabelasi(fffonks, periyotSayisi) {
  let skorBoard = [];
  let yeniTabela = [];
  for (let i = 1; i < periyotSayisi+1; i++) {
    skorBoard.push(fffonks(), fffonks());
    if ((skorBoard[0] + skorBoard[1] + skorBoard[2] + skorBoard[3]) != (skorBoard[4] + skorBoard[5] + skorBoard[6] + skorBoard[7])) {
      yeniTabela = [
        "1. Periyot: Ev Sahibi " + skorBoard[0] + " - Konuk Takım " + skorBoard[4],
        "2. Periyot: Ev Sahibi " + skorBoard[1] + " - Konuk Takım " + skorBoard[5],
        "3. Periyot: Ev Sahibi " + skorBoard[2] + " - Konuk Takım " + skorBoard[6],
        "4. Periyot: Ev Sahibi " + skorBoard[3] + " - Konuk Takım " + skorBoard[7],
        "Maç Sonucu: Ev Sahibi " + (skorBoard[0] + skorBoard[1] + skorBoard[2] + skorBoard[3]) + " - Konuk Takım " + (skorBoard[4] + skorBoard[5] + skorBoard[6] + skorBoard[7])
      ];
    } else {
      skorBoard.push(fffonks(), fffonks());
      yeniTabela = [
        "1. Periyot: Ev Sahibi " + skorBoard[0] + " - Konuk Takım " + skorBoard[4],
        "2. Periyot: Ev Sahibi " + skorBoard[1] + " - Konuk Takım " + skorBoard[5],
        "3. Periyot: Ev Sahibi " + skorBoard[2] + " - Konuk Takım " + skorBoard[6],
        "4. Periyot: Ev Sahibi " + skorBoard[3] + " - Konuk Takım " + skorBoard[7],
        "1. Uzatma: " + skorBoard[8] + " - Konuk Takım " + skorBoard[9],
        "Maç Sonucu: Ev Sahibi " + (skorBoard[0] + skorBoard[1] + skorBoard[2] + skorBoard[3] + skorBoard[8]) + " - Konuk Takım " + (skorBoard[4] + skorBoard[5] + skorBoard[6] + skorBoard[7] + skorBoard[9])
      ];
    }
  }
  return yeniTabela
}
skorTabelasi(takimSkoru, 4);
console.log(skorTabelasi(takimSkoru, 4));




/* Aşağıdaki satırları lütfen değiştirmeyiniz*/
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
module.exports = {
  sa,
  ilkiniDon,
  skor1,
  skor2,
  takimSkoru,
  macSonucu,
  periyotSkoru,
  skorTabelasi,
}
