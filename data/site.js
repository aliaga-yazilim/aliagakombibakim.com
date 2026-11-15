/**
 * Aliağa Kombi Bakım - Merkezi Yapılandırma ve Veri Tabanı (Site + İlçeler)
 */

const SITE = {
  domain: 'https://aliagakombibakim.com',
  brandName: 'Aliağa Kombi Bakım',
  brandSub: 'Kuzey İzmir Teknik Servis',
  legalNote: 'Aliağa Kombi Bakım, kombi üreticilerinden ve yetkili servis ağlarından bağımsız olarak Kuzey İzmir bölgesinde garantili bakım, arıza tespiti, kart onarımı ve petek temizliği hizmeti sunan özel teknik servistir. Sitede yer alan marka adları ilgili tescilli sahiplerine aittir ve yalnızca servis verilen cihaz gruplarını belirtmek amacıyla kullanılmıştır.',
  phoneDisplay: '0542 585 06 75',
  phoneRaw: '+905425850675',
  phoneTel: 'tel:+905425850675',
  whatsappUrl: 'https://wa.me/905425850675?text=Merhaba%2C%20kombi%20ar%C4%B1za%20ve%20bak%C4%B1m%20konusunda%20%C3%BCcretsiz%20bilgi%20almak%20istiyorum.',
  email: 'destek@aliagakombibakim.com',
  address: 'Kültür Mah. İstiklal Cad. No:48/A Aliağa / İzmir',
  geo: {
    region: 'TR-35',
    placename: 'Aliağa, İzmir',
    lat: '38.7996',
    lng: '26.9708'
  },
  hours: {
    Monday: ['08:00', '21:00'],
    Tuesday: ['08:00', '21:00'],
    Wednesday: ['08:00', '21:00'],
    Thursday: ['08:00', '21:00'],
    Friday: ['08:00', '21:00'],
    Saturday: ['08:30', '20:00'],
    Sunday: ['09:30', '18:00']
  },
  stats: [
    { value: '10', label: 'Kuzey İzmir İlçesi & Beldesi' },
    { value: '18+', label: 'Kombi Markasında Uzmanlık' },
    { value: '30 dk', label: 'Aliağa İçi Ortalama Varış' },
    { value: '1 Yıl', label: 'Yedek Parça ve İşçilik Garantisi' }
  ]
};

const DISTRICTS = [
  {
    id: 'aliaga',
    name: 'Aliağa',
    slug: 'aliaga-kombi-bakim-teknik-servisi',
    zone: 'Merkez Servis Üssü',
    distance: 'Merkez (15-30 dk içinde kapınızda)',
    mapCoords: { x: 420, y: 340, isCenter: true },
    shortDesc: 'Kültür, Kazım Dirik, Siteler, Yeni Mahalle, Kurtuluş ve Helvacı dahil Aliağa merkezdeki tüm apartman ve sitelere aynı saat içinde mobil kombi servisi.',
    heroIntro: 'Aliağa merkezde konuşlu gezici teknik araçlarımızla Kültür Mahallesi\'nden Yeni Mahalle toplu konutlarına, Siteler\'den Helvacı\'ya kadar tüm mahallelerde kombi arızalarına aynı gün müdahale ediyoruz. Kış rüzgarlarının sert estiği Aliağa sahil ve yüksek kesimlerinde baca çekişi, su basıncı ve ısınma sorunlarını telefonda ücretsiz ön teşhisle değerlendiriyor, onayınız olmadan hiçbir işlem başlatmıyoruz.',
    neighborhoods: [
      'Kültür Mahallesi', 'Kazım Dirik Mahallesi', 'Yeni Mahalle', 'Siteler Mahallesi',
      'Kurtuluş Mahallesi', 'Atatürk Mahallesi', 'Yalı Mahallesi', 'Helvacı',
      'Bozköy', 'Çoraklar', 'Güzelhisar', 'Horozgediği', 'Samurlu', 'Hacıömerli'
    ],
    housingProfile: [
      {
        area: 'Yeni Mahalle & Siteler',
        title: 'Yüksek Katlı Bloklar ve Rüzgar Yükü',
        desc: 'Kuzey rüzgarlarına açık yüksek bloklarda hermetik ve yoğuşmalı kombilerin baca eğimleri ile fan basınç şalterleri (prosestat) sıkça etkilenir. Bakımda fan kanatları ve ventüri boruları hassas ölçümle temizlenir.'
      },
      {
        area: 'Kültür & Kazım Dirik',
        title: 'Merkez Apartmanları ve Eski Tesisatlar',
        desc: 'Aliağa çarşı merkezindeki 15-25 yıllık binalarda demir ve eski plastik borulardan kaynaklanan tesisat çamurlaşması görülür. Filtre tıkanıklığı ve üç yollu vana sıkışmalarına karşı kimyasalsız darbeli petek yıkama uygulanır.'
      },
      {
        area: 'Helvacı & Güzelhisar',
        title: 'Müstakil Konutlar ve Kireçli Şebeke Suyu',
        desc: 'Müstakil ve dubleks yapılarda uzun tesisat hattı nedeniyle sirkülasyon pompası kapasitesi ve plaka eşanjör kireçlenmesi yakından takip edilir; genleşme tankı azot basıncı kat yüksekliğine göre ayarlanır.'
      }
    ],
    localChallenges: 'Aliağa genelinde şebeke suyunun kireç oranı mevsimsel olarak değişmekte ve özellikle sıcak su plaka eşanjörlerinde daralmaya yol açmaktadır. Ayrıca sanayi bölgesi ve deniz kıyısı etkisiyle balkon dolaplarında bulunan kombilerin elektronik kart soketlerinde oksitlenme yaşanabilmektedir. Ustalarımız her bakımda su sertlik etkisini, gaz valfi modülasyonunu ve baca sızdırmazlığını dijital cihazlarla kontrol eder.',
    neighbors: ['yeni-sakran', 'foca', 'menemen'],
    sampleTicket: {
      code: 'SRV-35-4812',
      date: '11 Kasım 2026',
      brand: 'Vaillant',
      location: 'Aliağa / Yeni Mahalle',
      symptom: 'Sıcak su açıldığında kombi F.28 ateşleme hatasına geçiyor ve peteklerin son iki tanesi soğuk kalıyor.',
      solution: 'Adreste yapılan gaz giriş basıncı ölçümünde şebeke basıncının normal olduğu ancak iyonizasyon elektrodunun kurum bağladığı ve yoğuşma sifonunun kısmen tıkandığı tespit edildi. Elektrot zımparalanıp ateşleme aralığı kalibre edildi, sifon temizlendi ve dönüş hattındaki pislik tutucu filtre açıldı. Cihaz 65°C tam yükte test edilerek teslim edildi.',
      part: 'İyonizasyon Elektrot Bakımı & Sifon/Filtre Temizliği (Parça Değişimsiz Çözüm)'
    },
    faqs: [
      {
        q: 'Aliağa merkezde arıza kaydı bıraktıktan ne kadar süre sonra gelirsiniz?',
        a: 'Ana servis merkezimiz Aliağa Kültür Mahallesi\'nde olduğu için Kültür, Kazım Dirik, Siteler ve Yeni Mahalle adreslerine yoğunluğa bağlı olarak ortalama 20 ila 45 dakika içerisinde ulaşıyoruz.'
      },
      {
        q: 'Gelmeden önce telefonda bilgi ve tahmini fiyat alabilir miyim?',
        a: 'Kesinlikle. 0542 585 06 75 numaramızı aradığınızda doğrudan kombi ustamızla görüşürsünüz. Ekrandaki hata kodunu ve kombinin markasını söylediğinizde önce evde kendinizin çözebileceği basit bir durum (basınç düşüklüğü, vana kapalılığı vb.) olup olmadığını ücretsiz tarif ederiz.'
      },
      {
        q: 'Helvacı ve köylere aynı gün servisiniz var mı?',
        a: 'Evet, Helvacı, Güzelhisar, Çaltılıdere ve Yeni Şakran yönüne her gün düzenli servis aracımız çıkmaktadır.'
      }
    ]
  },
  {
    id: 'foca',
    name: 'Foça',
    slug: 'foca-kombi-bakim-teknik-servisi',
    zone: 'Sahil Hattı Servis Bölgesi',
    distance: 'Aliağa Merkezden 25-35 dk',
    mapCoords: { x: 250, y: 440, isCenter: false },
    shortDesc: 'Eski Foça, Yeni Foça, Bağarası ve Gerenköy genelinde taş evler, yazlık siteler ve dubleks konutlar için nem ve kireç korumalı kombi teknik servisi.',
    heroIntro: 'Eski Foça, Yeni Foça, Bağarası, Gerenköy ve Kozbeyli hattında dört mevsim kesintisiz kombi bakımı ve arıza onarımı sağlıyoruz. Deniz kıyısındaki yüksek nemin elektronik kartlarda oluşturduğu korozyonu ve Foça şebeke suyunun eşanjörlerde bıraktığı kireç tortusunu iyi biliyor; tam donanımlı servis aracımızla tek ziyarette kalıcı çözüm üretiyoruz.',
    neighborhoods: [
      'İsmetpaşa Mahallesi', 'Atatürk Mahallesi', 'Fevzipaşa Mahallesi', 'Fatih Mahallesi',
      'Mustafa Kemal Atatürk (Yeni Foça)', 'Cumhuriyet (Yeni Foça)', 'Bağarası', 'Gerenköy',
      'Kozbeyli', 'Ilıpınar', 'Yenibağarası', 'Hacıveli', 'Kazım Dirik'
    ],
    housingProfile: [
      {
        area: 'Eski Foça Merkez',
        title: 'Taş Yapılar ve Dar Baca Çıkışları',
        desc: 'Tarihi doku ve bitişik nizam evlerde kombi baca mesafeleri ve rüzgar ters tepmesi özel ayar gerektirir. Fan devir kalibrasyonu ve baca contası kontrolü titizlikle yapılır.'
      },
      {
        area: 'Yeni Foça & Sahil Siteleri',
        title: 'Yazlık-Kışlık Kullanılan Dubleksler',
        desc: 'Yaz boyu kapalı kalan kombilerde sirkülasyon pompası sıkışması ve üç yollu vana kireçlenmesi sık yaşanır. Kış başında kombiyi ilk kez açmadan önce bakım yapılması kart ve pompa yanmasını önler.'
      },
      {
        area: 'Bağarası & Gerenköy',
        title: 'Geniş Metrekareli Bahçeli Konutlar',
        desc: 'Çok petekli ve iki katlı evlerde üst kat peteklerinin ısınmaması sorununa karşı pompa kademesi, kolektör dengelemesi ve genleşme tankı basıncı optimize edilir.'
      }
    ],
    localChallenges: 'Foça ve Yeni Foça\'da denizden gelen tuzlu nem, özellikle açık balkonlarda veya havalandırması yetersiz dolaplarda duran kombilerin anakart rölelerini ve fan rulmanlarını yıpratır. Ayrıca kışın sert poyraz ve lodos alan cephelerde hermetik baca şapkalarının sabitlenmesi hayati önem taşır.',
    neighbors: ['yenifoca', 'aliaga', 'menemen'],
    sampleTicket: {
      code: 'SRV-35-4790',
      date: '8 Kasım 2026',
      brand: 'Baymak',
      location: 'Foça / Bağarası',
      symptom: 'Yaz boyu kapalı kalan kombi kış moduna alındığında E03 hatası veriyor ve fan çok gürültülü çalışıyor.',
      solution: 'Cihazın yanma odası açıldığında fan motoru kanatlarında nemle birleşmiş toz tabakası ve prosestat hortumunda yoğuşma damlacığı görüldü. Fan sökülerek balans temizliği yapıldı, rulmanları ısıya dayanıklı gresle yağlandı ve silikon hortum yenilendi. Cihaz sessiz ve kararlı çalışmaya döndü.',
      part: 'Fan Motoru Revizyonu ve Prosestat Silikon Hortum Değişimi'
    },
    faqs: [
      {
        q: 'Foça ve Yeni Foça\'ya ekstra yol ücreti talep ediyor musunuz?',
        a: 'Hayır. Aliağa, Yeni Foça ve Eski Foça günlük sabit rotamız üzerindedir. Telefonda konuştuğumuz standart servis ve bakım ücretleri dışında sürpriz yol ücreti çıkarmayız.'
      },
      {
        q: 'Yazlık evimizde kombiyi kışın kapatırken ne yapmalıyız?',
        a: 'Eğer kışın evde hiç kimse kalmayacaksa donma korumasının çalışması için kombinin elektriğini ve gazını açık bırakıp minimum konumda tutmak veya tesisat suyunu tamamen tahliye etmek gerekir. Ücretsiz bilgi hattımızdan cihaz modelinize göre doğru yöntemi öğrenebilirsiniz.'
      }
    ]
  },
  {
    id: 'yeni-sakran',
    name: 'Yeni Şakran',
    slug: 'yeni-sakran-kombi-bakim-teknik-servisi',
    zone: 'Kuzey Aksı Öncelikli Bölge',
    distance: 'Aliağa Merkezden 12-18 dk',
    mapCoords: { x: 460, y: 260, isCenter: false },
    shortDesc: 'Yeni Şakran merkez, Sayfiye, Kızıltepe ve Çaltılıdere bölgesinde tüm kombi markaları için hızlı arıza onarımı, yıllık bakım ve petek temizliği.',
    heroIntro: 'Aliağa\'nın hemen kuzey komşusu Yeni Şakran\'da (Şakran Merkez, Sayfiye, Çaltılıdere, Bahçedere ve Aşağışakran) kombi arızalarına 15-20 dakika içinde ulaşıyoruz. Gerek doğalgazlı dairelerde gerekse LPG/dönüşümlü veya kat체 sistemlerde her marka kombinin yedek parçasını araçlarımızda hazır bulunduruyoruz.',
    neighborhoods: [
      'Yeni Şakran Merkez', 'Sayfiye Mahallesi', 'Kızıltepe', 'Aşağışakran',
      'Bahçedere', 'Çaltılıdere', 'Kapukaya', 'Yüksekköy', 'Kalabak'
    ],
    housingProfile: [
      {
        area: 'Şakran Merkez & Çarşı',
        title: 'Apartman Daireleri ve Düzenli Bakım',
        desc: 'Merkez mahallelerdeki apartmanlarda doğalgaz faturalarını düşürmek için yanma odası temizliği, brülör memelerinin kontrolü ve oda termostatı montajı yoğun olarak uygulanmaktadır.'
      },
      {
        area: 'Sayfiye & Sahil Kesimi',
        title: 'Kıyı Konutları ve Voltaj Dalgalanmaları',
        desc: 'Kıyı hattındaki konutlarda zaman zaman yaşanan elektrik dalgalanmalarına karşı kombi elektronik kart onarımı ve kombi regülatörü tavsiyesi ile güvenli kullanım sağlıyoruz.'
      }
    ],
    localChallenges: 'Yeni Şakran bölgesinde kuyu suyu veya sert şebeke suyu kullanılan binalarda doldurma musluğu kırılması ve plaka eşanjör tıkanıklığı en sık karşılaştığımız arızalardır. Ustalarımız arıza tespitini yerinde ölçüm cihazlarıyla yapar.',
    neighbors: ['aliaga', 'candarli', 'bergama'],
    sampleTicket: {
      code: 'SRV-35-4804',
      date: '10 Kasım 2026',
      brand: 'Demirdöküm',
      location: 'Yeni Şakran / Sayfiye',
      symptom: 'Kombi su basıncı kendi kendine 3 bara yükseliyor ve altındaki emniyet ventilinden su damlatıyor.',
      solution: 'Yapılan kontrolde doldurma musluğunun iç contasının aşındığı ve kapalı görünmesine rağmen tesisata ince ince şebeke suyu kaçırdığı, ayrıca genleşme tankı havasının sıfırlandığı belirlendi. Doldurma musluğu orijinaliyle değiştirildi, genleşme tankına 1.0 bar azot/hava basıldı.',
      part: 'Demirdöküm Orijinal Doldurma Musluğu & Genleşme Tankı Basınç Dolumu'
    },
    faqs: [
      {
        q: 'Yeni Şakran\'a aynı gün içinde gelebiliyor musunuz?',
        a: 'Evet, Aliağa merkezimize sadece 12 kilometre mesafede olduğu için Yeni Şakran\'dan gelen çağrılara çoğu zaman yarım saat içinde yanıt veriyoruz.'
      },
      {
        q: 'Kombi kart tamiri yapıyor musunuz yoksa yeni kart mı takılıyor?',
        a: 'Sıfır anakart maliyetleri çok yüksek olduğu için, yanık veya arızalı elektronik kartları garantili olarak onarıyor ve test ederek çok daha ekonomik şekilde çözüyoruz.'
      }
    ]
  },
  {
    id: 'bergama',
    name: 'Bergama',
    slug: 'bergama-kombi-bakim-teknik-servisi',
    zone: 'Bakırçay Havzası Servis Hattı',
    distance: 'Düzenli Günlük Servis Rotası',
    mapCoords: { x: 640, y: 150, isCenter: false },
    shortDesc: 'Bergama Ertuğrul, Fatih, Bahçelievler, Yeni Mahalle ve Gaziosmanpaşa dahil tüm mahallelerde garantili kombi tamiri, bakım ve ilaçlı petek yıkama.',
    heroIntro: 'Bakırçay Havzası\'nın en büyük merkezi olan Bergama\'da kış ayları sahil ilçelerine göre çok daha sert ve ayazlı geçer. Bergama\'daki ev ve iş yerlerinde kombinin en soğuk gecede durmaması için tüm marka kombilerde yerinde arıza tespiti, orijinal yedek parça değişimi ve yüksek verimli petek temizliği hizmeti sunuyoruz.',
    neighborhoods: [
      'Ertuğrul Mahallesi', 'Fatih Mahallesi', 'Bahçelievler Mahallesi', 'Yeni Mahalle',
      'Gaziosmanpaşa Mahallesi', 'Maltepe Mahallesi', 'Zafer Mahallesi', 'İslamsaray',
      'Atatürk Mahallesi', 'Fevzipaşa Mahallesi', 'Kültür Mahallesi', 'Ulocamii', 'Zeytindağ'
    ],
    housingProfile: [
      {
        area: 'Fatih & Bahçelievler',
        title: 'Çok Katlı Apartmanlar ve Yoğuşmalı Kombiler',
        desc: 'Doğalgaz dönüşümüyle birlikte kurulan yeni nesil tam yoğuşmalı kombilerin yıllık yanma odası, sifon ve elektrot bakımları fabrika verilerine uygun olarak yapılır.'
      },
      {
        area: 'Ertuğrul & Gaziosmanpaşa',
        title: 'Kış Ayazında Yüksek Isı İhtiyacı',
        desc: 'Sıcaklığın sıfırın altına düştüğü Bergama gecelerinde yoğuşma gider borularının donması ve tesisattaki çamur nedeniyle uzak odaların ısınmaması sorunlarına kalıcı çözümler üretiyoruz.'
      }
    ],
    localChallenges: 'Bergama\'nın karasal etkiye açık kış ikliminde kombiler yüksek derecelerde (55-65°C) çalıştırıldığı için kireçlenme hızı artmakta ve genleşme tankı membranları daha çabuk yorulmaktadır. Sezon öncesi yapılan 45 dakikalık detaylı bakım, kış ortasında yaşanacak yüksek maliyetli arızaları %90 oranında engeller.',
    neighbors: ['kinik', 'dikili', 'yeni-sakran', 'aliaga'],
    sampleTicket: {
      code: 'SRV-35-4765',
      date: '4 Kasım 2026',
      brand: 'E.C.A',
      location: 'Bergama / Bahçelievler',
      symptom: 'Petekler çok iyi ısınıyor ancak banyoda sıcak su açıldığında su bir ısınıp bir buz gibi oluyor.',
      solution: 'Cihazın sıcak su akış türbini ve NTC sensörü sağlam çıkarken, plaka eşanjörün kireçten dolayı daraldığı ve kombinin sıcak suyu sirküle edemeyip aşırı ısınarak alevi kestiği saptandı. Plaka eşanjör sökülerek özel solüsyonla kireçten arındırıldı, üç yollu vana contaları yenilendi.',
      part: 'E.C.A Plaka Eşanjör Kimyasal Temizliği & O-Ring Conta Değişimi'
    },
    faqs: [
      {
        q: 'Bergama\'da hangi kombi markalarına bakıyorsunuz?',
        a: 'Baymak, Demirdöküm, Vaillant, E.C.A, Bosch, Buderus, Viessmann, Ariston, Protherm, Ferroli, Airfel ve Daikin başta olmak üzere tüm kombi markalarına tam donanımlı servis veriyoruz.'
      },
      {
        q: 'Zeytindağ mahallesine de hizmetiniz var mı?',
        a: 'Evet, Aliağa-Bergama güzergahımız üzerindeki Zeytindağ, Yeni Şakran ve Bozköy mahallelerinin tamamına her gün uğruyoruz.'
      }
    ]
  },
  {
    id: 'dikili',
    name: 'Dikili',
    slug: 'dikili-kombi-bakim-teknik-servisi',
    zone: 'Kuzey Ege Sahil Rotası',
    distance: 'Düzenli Günlük Servis Rotası',
    mapCoords: { x: 430, y: 110, isCenter: false },
    shortDesc: 'Dikili Salimbey, Cumhuriyet, Gazipaşa, İsmetpaşa ve Çandarlı genelinde tüm kombi markaları için garantili bakım, tamir ve tesisat temizliği.',
    heroIntro: 'Dikili merkezden Salihleraltı ve Çandarlı\'ya kadar uzanan kıyı şeridinde kombi arıza, periyodik bakım ve petek temizliği ihtiyaçlarınız için yanınızdayız. Telefonla aradığınızda önce arızanın kaynağını ücretsiz analiz ediyor, gezici servis aracımızdaki orijinal yedek parçalarla cihazınızı aynı gün çalışır hale getiriyoruz.',
    neighborhoods: [
      'Salimbey Mahallesi', 'Cumhuriyet Mahallesi', 'Gazipaşa Mahallesi', 'İsmetpaşa Mahallesi',
      'Çandarlı', 'Salihler', 'Kabakum', 'Bademli', 'İslamlar', 'Deliktaş'
    ],
    housingProfile: [
      {
        area: 'Salimbey & Gazipaşa',
        title: 'Apartman ve Yeni Konut Projeleri',
        desc: 'Yeni doğalgaz altyapısına kavuşan binalarda ilk kurulum sonrası yıllık verimlilik bakımları, filtre temizliği ve oda termostatı entegrasyonları gerçekleştirilir.'
      },
      {
        area: 'Cumhuriyet & Kabakum Siteleri',
        title: 'Sezonluk Konutlarda Pompa ve Vana Koruma',
        desc: 'Kışın aralıklı kullanılan konutlarda nemden etkilenen ateşleme grupları ve sıkışan sirkülasyon pompaları yerinde revize edilir.'
      }
    ],
    localChallenges: 'Dikili\'de denizel nem ve sert rüzgarlar, dış cepheye bakan hermetik bacalarda hava akış dengesizliği yaratabilir. Ayrıca kireçli su yapısı sıcak su sensörlerinin (NTC) yüzeyini kaplayarak geç algılamaya neden olur.',
    neighbors: ['candarli', 'bergama', 'yeni-sakran'],
    sampleTicket: {
      code: 'SRV-35-4751',
      date: '2 Kasım 2026',
      brand: 'Bosch',
      location: 'Dikili / Salimbey',
      symptom: 'Kombi EA hatası veriyor, resetlenince çalışıyor ama sabahları tekrar arızaya geçiyor.',
      solution: 'Bosch kombide EA kodu alev algılanamadığını gösterir. Yapılan ölçümde gaz valfi çıkış basıncının düşük kaldığı ve iyonizasyon çubuğunun oksitlendiği görüldü. Gaz valfi minimum-maksimum basınç ayarı dijital manometre ile yapıldı, elektrot temizlendi.',
      part: 'Gaz Valfi Kalibrasyonu ve Ateşleme Grubu Bakımı'
    },
    faqs: [
      {
        q: 'Dikili\'ye geldiğinizde yedek parça için ikinci kez beklememiz gerekir mi?',
        a: 'Aradığınızda kombinin markasını ve arıza kodunu aldığımız için aracımıza o modele ait muhtemel tüm parçaları (pompa, üç yollu vana, NTC sensör, prosestat, kart, doldurma musluğu) yükleyerek geliyoruz. Onarımların %95\'i tek ziyarette biter.'
      }
    ]
  },
  {
    id: 'menemen',
    name: 'Menemen',
    slug: 'menemen-kombi-bakim-teknik-servisi',
    zone: 'Güney Aksı Servis Bölgesi',
    distance: 'Aliağa Merkezden 20-25 dk',
    mapCoords: { x: 470, y: 490, isCenter: false },
    shortDesc: 'Menemen Merkez, Ulukent, Egekent 2, Asarlık, Koyundere ve Seyrek genelinde tüm kombi markalarına aynı gün yerinde tamir ve petek temizliği.',
    heroIntro: 'Aliağa\'nın güney komşusu Menemen\'de; Ulukent, Egekent 2, Koyundere, Asarlık, Kasımpaşa, Esatpaşa ve Seyrek üniversite/site bölgelerine her gün kesintisiz kombi servisi veriyoruz. Çok bloklu sitelerden müstakil konutlara kadar her tesisat tipinde ölçüm odaklı arıza tespiti ve garantili onarım sağlıyoruz.',
    neighborhoods: [
      'Ulukent (29 Ekim & 30 Ağustos)', 'Egekent 2', 'Koyundere', 'Asarlık (İncirli Pınar & Gölcük)',
      'Seyrek (Villakent & Gazi)', 'Kasımpaşa Mahallesi', 'Esatpaşa Mahallesi', 'Mermerli Mahallesi',
      'Uğur Mumcu Mahallesi', 'İsmet İnönü Mahallesi', 'Yahşelli', 'Emiralem', 'Türkelli'
    ],
    housingProfile: [
      {
        area: 'Ulukent, Egekent 2 & Seyrek',
        title: 'Modern Siteler ve Yoğuşmalı Cihazlar',
        desc: 'Yüksek katlı bloklarda ve yeni sitelerde yer alan yoğuşmalı kombilerin yanma odası kimyasal temizliği, sifon bakımı ve akıllı oda termostatı bağlantıları uzman ekibimizce yapılır.'
      },
      {
        area: 'Koyundere, Asarlık & Menemen Merkez',
        title: 'Yoğun Kullanım ve Petek Temizliği',
        desc: 'Yıllardır çalışan tesisatlarda oluşan çamurlaşmayı çift yönlü darbeli yıkama makinelerimizle petekleri sökmeden, evi kirletmeden banyodan tahliye ediyoruz.'
      }
    ],
    localChallenges: 'Menemen, Koyundere ve Türkelli hattı Aliağa servis üssümüze çok yakın olduğu için acil ısınma ve sıcak su kesintilerinde hızlı müdahale avantajına sahiptir. Bölgedeki kireçli su nedeniyle iki yılda bir eşanjör ve filtre kontrolü öneriyoruz.',
    neighbors: ['aliaga', 'foca', 'kemalpasa'],
    sampleTicket: {
      code: 'SRV-35-4819',
      date: '13 Kasım 2026',
      brand: 'Buderus',
      location: 'Menemen / Ulukent',
      symptom: 'Kombi çalışıyor, ekran 55 dereceyi gösteriyor ancak salondaki ve çocuk odasındaki peteklerin alt yarısı tamamen soğuk.',
      solution: 'Termal kamera ve yüzey ısı ölçerle yapılan kontrolde peteklerin alt kısmında yoğun tortu tabakası olduğu ve kombi dönüş filtresinin %80 kapandığı görüldü. Makineli petek temizliği uygulandı, filtre yıkandı ve koruyucu tesisat sıvısı eklendi.',
      part: 'Makineli Petek Temizliği & Dönüş Filtresi Bakımı'
    },
    faqs: [
      {
        q: 'Menemen Ulukent ve Koyundere\'ye ne kadar sürede gelirsiniz?',
        a: 'Aliağa-Menemen İZBAN aksı üzerinde sürekli hareket halinde olan servis ekibimiz Koyundere, Türkelli ve Ulukent bölgelerine ortalama 20-30 dakika içinde ulaşmaktadır.'
      },
      {
        q: 'Petek temizliği yapılırken ev kirlenir mi, ne kadar sürer?',
        a: 'Kesinlikle kirlenmez. Makineyi sadece banyodaki havlupana veya kombinin altına bağlıyoruz; hiçbir peteği yerinden sökmüyoruz. Tüm kirli su doğrudan klozet/gider hattına akar ve işlem yaklaşık 60-75 dakika sürer.'
      }
    ]
  },
  {
    id: 'kemalpasa',
    name: 'Kemalpaşa',
    slug: 'kemalpasa-kombi-bakim-teknik-servisi',
    zone: 'Doğu İzmir Servis Bölgesi',
    distance: 'Planlı Hızlı Servis Rotası',
    mapCoords: { x: 760, y: 540, isCenter: false },
    shortDesc: 'Kemalpaşa Sekiz Eylül, Mehmet Akif Ersoy, Soğukpınar, Ulucak, Örnekköy ve Armutlu genelinde uzman kombi bakımı, arıza tamiri ve petek temizliği.',
    heroIntro: 'Nif Dağı eteklerinde yer alan ve İzmir\'in kışları en soğuk geçen ilçelerinden biri olan Kemalpaşa\'da (Merkez, Ulucak, Armutlu, Ören, Bağyurdu) tüm marka kombiler için profesyonel teknik servis hizmeti veriyoruz. Ücretsiz telefon danışmanlığımızla arızayı önceden değerlendiriyor, şeffaf fiyat politikasıyla yerinde onarım yapıyoruz.',
    neighborhoods: [
      'Sekiz Eylül Mahallesi', 'Mehmet Akif Ersoy Mahallesi', 'Soğukpınar Mahallesi', 'Çınar Mahallesi',
      'Ulucak (Cumhuriyet & İstiklal)', 'Armutlu', 'Örnekköy', 'Ören', 'Bağyurdu', 'Yukarıkızılca', 'Sütçüler'
    ],
    housingProfile: [
      {
        area: 'Sekiz Eylül & Soğukpınar',
        title: 'Kış Ayazına Dayanıklı Kalorifer Ayarı',
        desc: 'Sert kış koşullarında kombinin yüksek verimle ve az yakıtla çalışması için gaz valfi modülasyon ayarı, fan temizliği ve genleşme tankı basınç dengelemesi yapılır.'
      },
      {
        area: 'Ulucak & Armutlu',
        title: 'Dubleks, Villa ve Apartman Tesisatları',
        desc: 'Geniş tesisat hacmine sahip yapılarda sirkülasyon pompası debisi ve denge kabı / kolektör ayarları kontrol edilerek tüm odaların eşit ısınması sağlanır.'
      }
    ],
    localChallenges: 'Kemalpaşa\'da kış aylarında gece sıcaklıklarının sıfırın altına inmesi, açık balkonlardaki kombilerde donma riski ve yoğuşma gideri buzlanması yaratır. Bakım sırasında donma koruma fonksiyonu ve boru izolasyonları özellikle denetlenir.',
    neighbors: ['menemen', 'aliaga'],
    sampleTicket: {
      code: 'SRV-35-4740',
      date: '30 Ekim 2026',
      brand: 'Viessmann',
      location: 'Kemalpaşa / Ulucak',
      symptom: 'Kombi sıcak suyu açtığımızda petekleri de ısıtıyor, kış modunu kapatsak bile petekler ısınıyor.',
      solution: 'Üç yollu yönlendirme vanasının step motorunun sağlam olduğu ancak iç kartuş takımının kireç ve tortu yüzünden ara konumda sıkıştığı belirlendi. Sıcak su kullanımında ısıtılan suyun bir kısmı kalorifer hattına kaçıyordu. Üç yollu vana iç takımı yenilendi.',
      part: 'Viessmann Üç Yollu Vana İç Tamir Takımı Değişimi'
    },
    faqs: [
      {
        q: 'Kemalpaşa ve Ulucak bölgesine servis randevusu nasıl oluşturuluyor?',
        a: '0542 585 06 75 numaramızı aradığınızda veya WhatsApp üzerinden konum/arıza bilgisi bıraktığınızda, aynı gün veya size en uygun saat dilimi için net randevu saati veriyoruz.'
      }
    ]
  },
  {
    id: 'kinik',
    name: 'Kınık',
    slug: 'kinik-kombi-bakim-teknik-servisi',
    zone: 'Bakırçay Doğu Hattı',
    distance: 'Düzenli Günlük Servis Rotası',
    mapCoords: { x: 800, y: 190, isCenter: false },
    shortDesc: 'Kınık Türkcedit, Осmaniye, Fatih, Yeni Mahalle, Poyracık ve Yayakent genelinde her marka kombi için garantili tamir, bakım ve petek yıkama.',
    heroIntro: 'Bakırçay Havzası\'nın doğu ucundaki Kınık, Poyracık ve Yayakent bölgelerinde kombi kullanıcılarının güvenilir teknik servis ihtiyacını karşılıyoruz. Bergama-Kınık hattındaki gezici ekibimizle parça bekletmeden, işe başlamadan önce net ücret bilgisi vererek garantili kombi tamiri gerçekleştiriyoruz.',
    neighborhoods: [
      'Türkcedit Mahallesi', 'Osmaniye Mahallesi', 'Fatih Mahallesi', 'Yeni Mahalle',
      'Aşağı Mahalle', 'Yukarı Mahalle', 'Poyracık', 'Yayakent'
    ],
    housingProfile: [
      {
        area: 'Kınık Merkez & Poyracık',
        title: 'Kışlık Yüksek Performans Bakımı',
        desc: 'Bölgedeki sert kış şartlarında doğalgaz faturalarını düşüren eşanjör temizliği, baca gazı analizi ve petek içi tortu temizliği eksiksiz uygulanır.'
      }
    ],
    localChallenges: 'Kınık ve Poyracık\'ta şebeke suyu sertliği ve tesisat içine karışan tortular kombi sirkülasyon pompasını zorlayabilmektedir. Yıllık bakımda filtrelerin ve plaka eşanjörün kontrol edilmesi cihaz ömrünü iki katına çıkarır.',
    neighbors: ['bergama', 'dikili', 'aliaga'],
    sampleTicket: {
      code: 'SRV-35-4728',
      date: '26 Ekim 2026',
      brand: 'Protherm',
      location: 'Kınık / Poyracık',
      symptom: 'Kombi F62 hatası veriyor ve brülör ateşleme yaptıktan birkaç saniye sonra kapanıyor.',
      solution: 'Gaz valfi geri besleme ve anakart röle kontrolü yapıldı. Anakart üzerindeki gaz valfi sürücü rölesinin ark yaptığı tespit edildi. Kart revizyonu ve gaz valfi soket yenilemesi yapılarak kombi güvenle devreye alındı.',
      part: 'Elektronik Anakart Röle Onarımı ve Gaz Valfi Soket Bakımı'
    },
    faqs: [
      {
        q: 'Kınık ve Poyracık\'ta değiştirdiğiniz parçalara garanti veriyor musunuz?',
        a: 'Evet, taktığımız tüm yedek parçalar ve yaptığımız işçilik 1 yıl boyunca servis garantimiz altındadır; işlem sonunda resmi servis fişinizi teslim ediyoruz.'
      }
    ]
  },
  {
    id: 'candarli',
    name: 'Çandarlı',
    slug: 'candarli-kombi-bakim-teknik-servisi',
    zone: 'Körfez Sahil Bölgesi',
    distance: 'Aliağa Merkezden 20-25 dk',
    mapCoords: { x: 350, y: 210, isCenter: false },
    shortDesc: 'Çandarlı merkez, sahil siteleri ve Denizköy hattında tüm kombi markaları için hızlı arıza tespiti, kışlık bakım ve petek temizliği.',
    heroIntro: 'Aliağa ve Yeni Şakran\'a komşu olan Çandarlı\'da hem yaz-kış oturan ailelerin hem de kış başında evini açan site sakinlerinin kombi bakım ve arıza taleplerine hızla yetişiyoruz. Nem, rüzgar ve kireç kaynaklı tüm kombi arızalarını garantili olarak yerinde gideriyoruz.',
    neighborhoods: [
      'Çandarlı Merkez', 'Çandarlı Sahil Siteleri', 'Denizköy', 'Bademli Yolu', 'Eyko Sitesi Bölgesi'
    ],
    housingProfile: [
      {
        area: 'Çandarlı Merkez & Siteler',
        title: 'Körfez Rüzgarı ve Deniz Nemi Koruması',
        desc: 'Körfez rüzgarına açık baca hatları, prosestat ve fan sistemleri ile nemden etkilenen ateşleme grupları özel koruyucu bakımdan geçirilir.'
      }
    ],
    localChallenges: 'Çandarlı\'daki konutlarda uzun süre kullanılmayan kombilerin ilk çalıştırma esnasında pompa sıkışması (kuvvetli uğultu sesi ve aşırı ısınma) çok sık yaşanır. Cihazı zorlamadan bizi aradığınızda telefonda bile ücretsiz yönlendirme yapabiliyoruz.',
    neighbors: ['yeni-sakran', 'dikili', 'aliaga'],
    sampleTicket: {
      code: 'SRV-35-4782',
      date: '6 Kasım 2026',
      brand: 'Ariston',
      location: 'Çandarlı / Merkez',
      symptom: 'Kombi 104 sirkülasyon hatası veriyor, içinden kaynama ve vuruntu sesi geliyor.',
      solution: 'Sirkülasyon pompasının milinin kireç nedeniyle sıkıştığı ve suyun kombi içinde kaynadığı belirlendi. Pompa gövdesi açılarak kireç temizlendi, mil alıştırıldı ve kapasitör değeri ölçüldü. Devirdaim normale döndü.',
      part: 'Sirkülasyon Pompası Kireç Çözme ve Mil Revizyonu'
    },
    faqs: [
      {
        q: 'Çandarlı\'ya hafta sonu da servisiniz geliyor mu?',
        a: 'Evet, Cumartesi ve Pazar günleri de Çandarlı ve Yeni Şakran hattında nöbetçi servis ekibimiz hizmet vermektedir.'
      }
    ]
  },
  {
    id: 'yenifoca',
    name: 'Yeni Foça',
    slug: 'yenifoca-kombi-bakim-teknik-servisi',
    zone: 'Kıyı Öncelikli Servis Hattı',
    distance: 'Aliağa Merkezden 15-20 dk',
    mapCoords: { x: 310, y: 380, isCenter: false },
    shortDesc: 'Yeni Foça Mustafa Kemal Atatürk, Cumhuriyet mahalleleri ve Gencelli sahil hattında 20 dakikada adreste kombi tamiri ve bakımı.',
    heroIntro: 'Aliağa\'ya sadece 15 dakika mesafede bulunan Yeni Foça ve Gencelli sahil şeridinde kombi arızası, yıllık periyodik bakım ve petek temizliği için en hızlı ulaşan yerel teknik servisiz. Deniz kıyısındaki konutların tesisat ve kombi dilinden anlayan ustalarımızla yanınızdayız.',
    neighborhoods: [
      'Mustafa Kemal Atatürk Mahallesi', 'Cumhuriyet Mahallesi', 'Gencelli', 'Kozbeyli Yolu', 'Sazlıca Bölgesi'
    ],
    housingProfile: [
      {
        area: 'Yeni Foça & Gencelli',
        title: 'Dubleks Konutlar ve Kıyı İklimi',
        desc: 'Dubleks evlerde alt ve üst kat arasındaki ısı farkını ortadan kaldıran kolektör/vana regülasyonu ve kireç önleyici eşanjör bakımı uygulanır.'
      }
    ],
    localChallenges: 'Yeni Foça ve Gencelli\'de şebeke suyu kireci ile deniz nemi birleştiğinde doldurma musluğu, emniyet ventili ve üç yollu vana gruplarında sertleşme görülür. Yıllık bakımda bu parçalar sökülerek silikon gres ile koruma altına alınır.',
    neighbors: ['foca', 'aliaga', 'menemen'],
    sampleTicket: {
      code: 'SRV-35-4810',
      date: '11 Kasım 2026',
      brand: 'Ferroli',
      location: 'Yeni Foça / Cumhuriyet Mah.',
      symptom: 'Kombi sıcak suyu açtığımızda ateşleme yapıyor ama 10 saniye sonra sönüp F37 hatası veriyor.',
      solution: 'Su basınç anahtarının (hidrostat) iç diyaframının kireç tortusuyla tıkandığı ve basıncı 1.5 bar olmasına rağmen düşük algıladığı tespit edildi. Basınç sondası temizlenip test edildi, arıza tamamen giderildi.',
      part: 'Su Basınç Sondası (Hidrostat) Temizliği ve Kalibrasyonu'
    },
    faqs: [
      {
        q: 'Yeni Foça ve Gencelli\'ye ne kadar sürede ulaşıyorsunuz?',
        a: 'Aliağa-Yeni Foça yolu üzerinden 15-20 dakika içerisinde adresinizde olabiliyoruz.'
      }
    ]
  }
];

module.exports = { SITE, DISTRICTS };
