/**
 * Türkiye'de yaygın kullanılan tüm kombi markaları, popüler modelleri ve bilinen hata kodları + çözümleri
 */

const BRANDS = [
  {
    id: 'baymak',
    name: 'Baymak',
    slug: 'baymak-kombi-bakim-teknik-servisi',
    errorSlug: 'baymak-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'Türkiye / BDR Thermea Grup',
    popularModels: ['Lambert', 'Dolcevita', 'Duo Tec Compact', 'Eco 4', 'Luna Avant', 'Brötje Star Bridge', 'Falke'],
    shortDesc: 'Baymak Duo Tec, Lambert, Dolcevita, Eco ve Luna serisi yoğuşmalı ve hermetik kombiler için garantili bakım, kart onarımı ve orijinal yedek parça servisi.',
    techNote: 'Baymak kombilerde (özellikle Duo Tec tam yoğuşmalı ve Eco/Lambert modellerinde) E01 ateşleme hatası, E03 hava basınç/prosestat uyarısı ve E10 düşük su basıncı en sık karşılaşılan durumlardır. Yoğuşmalı modellerde silindirik yanma odası ve sifon temizliği yılda bir kez yapılmazsa yoğuşma suyu geri teperek fan ve kart arızasına yol açabilir.',
    errorCodes: [
      { code: 'E01', title: 'Başarısız Ateşleme / Gaz Yokluğu', cause: 'Kombiye gaz gelmiyor, ateşleme elektrodu kıvılcım çakmıyor veya iyonizasyon alevi algılamıyor.', userAction: 'Daire girişindeki ve kombi altındaki gaz vanalarının açık olduğunu, ocakta gaz bulunduğunu kontrol edin. Reset (R) tuşuna 3 saniye basılı tutun.', techSolution: 'Gaz valfi giriş/çıkış basıncı ölçülür, iyonizasyon elektrodu temizlenir veya anakart ateşleme trafosu onarılır.' },
      { code: 'E02', title: 'Emniyet Termostatı (Aşırı Isınma) Hatası', cause: 'Kombi içindeki su sıcaklığı 95°C üzerine çıkarak limit termostat devreyi kesmiştir.', userAction: 'Kombinin altındaki ve peteklerdeki vanaların açık olduğundan emin olun. Cihaz soğuduktan sonra resetleyin.', techSolution: 'Sirkülasyon pompası sıkışması, üç yollu vana takılması veya kalorifer dönüş filtresi tıkanıklığı giderilir.' },
      { code: 'E03', title: 'Baca Çekiş / Hava Basınç Şalteri (Prosestat) Hatası', cause: 'Atık gaz dışarı atılamıyor, fan motoru dönmüyor veya prosestat kontak kapatmıyor.', userAction: 'Dışarı çıkan baca borusunun yerinden çıkmadığını veya rüzgar/kuş yuvası nedeniyle kapanmadığını gözle kontrol edin.', techSolution: 'Fan motoru kanatları yıkanır, ventüri ve silikon hortum kontrol edilir, arızalıysa hava prosestatı veya fan rulmanı yenilenir.' },
      { code: 'E05', title: 'Kalorifer Gidiş Suyu NTC Sensör Arızası', cause: 'Isıtma hattı sıcaklık sensörü kısa devre yapmış veya açık devre olmuştur.', userAction: 'Kullanıcının müdahale edebileceği bir parça değildir; cihazı kapatıp servis hattımızı arayın.', techSolution: 'Kalorifer NTC sensörünün ohm/direnç değeri ölçülür, arızalı sensör veya oksitlenen soketi yenilenir.' },
      { code: 'E06', title: 'Kullanım Sıcak Suyu NTC Sensör Arızası', cause: 'Banyo/mutfak sıcak su sıcaklık sensörü arızalıdır.', userAction: 'Sıcak su musluğunu kapatıp kış modunda peteklerin çalışıp çalışmadığını gözlemleyin ve destek alın.', techSolution: 'Daldırma veya yüzey tip sıcak su NTC sensörü orijinal Baymak sensör ile değiştirilir.' },
      { code: 'E10', title: 'Düşük Su Basıncı Uyarı Kodu', cause: 'Tesisat su basıncı 0.8 barın altına düşmüştür.', userAction: 'Kombi altındaki mavi/siyah doldurma musluğunu sola çevirerek bar göstergesini 1.5 seviyesine getirin ve musluğu mutlaka sıkıca kapatın.', techSolution: 'Su basılmasına rağmen basınç tekrar düşüyorsa genleşme tankı havası tamamlanır veya tesisat/eşanjör kaçağı giderilir.' },
      { code: 'E25 / E26', title: 'Maksimum Sıcaklık Hızla Yükseliyor (Pompa Blokajı)', cause: 'Kombi suyu ısıtıyor ancak tesisata gönderemediği için sıcaklık saniyeler içinde fırlıyor.', userAction: 'Petek vanalarının en az 3 tanesinin açık olduğunu kontrol edin.', techSolution: 'Sirkülasyon pompası mili açılır, filtre temizlenir ve plaka eşanjör kireçten arındırılır.' },
      { code: 'E35', title: 'Alev Oluşumu (Parazit Alev) Hatası', cause: 'Gaz valfi kapalı olması gerekirken brülörde alev algılanıyor veya iyonizasyon devresi nemlenmiş.', userAction: 'Kombiyi resetleyin; tekrar ederse gaz vanasını kapatıp ücretsiz bilgi hattımızı arayın.', techSolution: 'Anakart üzerindeki alev algılama devresi ve gaz valfi sızdırmazlığı kontrol edilerek onarılır.' }
    ]
  },
  {
    id: 'vaillant',
    name: 'Vaillant',
    slug: 'vaillant-kombi-bakim-teknik-servisi',
    errorSlug: 'vaillant-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'Almanya',
    popularModels: ['ecoTEC Pure', 'ecoTEC Pro', 'ecoTEC Plus', 'turboTEC Pro', 'turboTEC Plus', 'atmoTEC', 'VUW Serisi'],
    shortDesc: 'Vaillant ecoTEC ve turboTEC serisi kombilerde F22, F28, F29, F75 ve F62 başta olmak üzere tüm arıza kodları için uzman teşhis ve garantili onarım.',
    techNote: 'Alman mühendisliğiyle üretilen Vaillant kombilerde su basınç sensörü (özellikle F.75 kodu) pompa ilk kalkışındaki 0.2 barlık basınç sıçramasını ölçerek çalışır. Tesisat filtresi kirli olduğunda veya genleşme tankı havası bittiğinde sensör sağlam olsa bile F.75 hatası verir. Doğru teşhis gereksiz parça değişimini önler.',
    errorCodes: [
      { code: 'F.22', title: 'Kuru Yanma / Düşük Su Basıncı Hatası', cause: 'Kombi içinde yeterli su yok (basınç 0.5 barın altında) veya pompa suyu çeviremiyor.', userAction: 'Kombi altındaki kelebek doldurma musluğu ile su basıncını 1.4 - 1.5 bar seviyesine yükseltin.', techSolution: 'Genleşme tankı membranı, su basınç sensörü ve sirkülasyon pompası kontrol edilir.' },
      { code: 'F.28', title: 'Ateşleme Sırasında Alev Oluşmadı', cause: 'Kombi 3 kez ateşleme denemesi yaptı ancak brülörde alev algılanamadı.', userAction: 'Doğalgaz vanalarını kontrol edin, ocağınızın yanıp yanmadığına bakın ve kombi üzerindeki alev/çarpı (Reset) tuşuna bir kez basın.', techSolution: 'Gaz armatürü (gaz valfi) step motoru, iyonizasyon elektrodu, yoğuşma sifonu tıkanıklığı ve anakart incelenir.' },
      { code: 'F.29', title: 'Çalışma Esnasında Alev Söndü', cause: 'Brülör yanarken gaz akışı kesildi veya atık gaz bacadan geri tepti.', userAction: 'Rüzgarlı havalarda baca çıkışını kontrol edin ve cihazı resetleyin.', techSolution: 'Baca iç boru contalarının sıyrılması (atık gazın temiz havaya karışması), gaz basıncı düşüklüğü veya topraklama sorunu giderilir.' },
      { code: 'F.75', title: 'Pompa Çalıştığında Basınç Farkı Algılanamadı', cause: 'Pompa devreye girdiğinde su basınç sensörü gerekli 50 mbar basınç artışını göremedi.', userAction: 'Su basıncını 1.5 bara tamamlayıp kombiyi kapatıp yeniden açın.', techSolution: 'Dijital su basınç sensörü tortudan temizlenir veya yenilenir, kalorifer dönüş filtresi açılır, pompa debisi ölçülür.' },
      { code: 'F.20', title: 'Aşırı Isınma Emniyet Termostatı (STB) Attı', cause: 'Gidiş suyu sıcaklığı 95°C sınırını aştı.', userAction: 'Kalorifer petek vanalarının açık olduğundan emin olun.', techSolution: 'Üç yollu vana motoru, plaka eşanjör kireçlenmesi ve pompa devri kontrol edilir.' },
      { code: 'F.32 / F.33', title: 'Fan Motoru Devir / Hava Akış Hatası', cause: 'Yoğuşmalı modellerde fan hızı beklenen devir aralığının dışında veya prosestat açmıyor.', userAction: 'Cihazı şalterinden kapatıp 1 dakika bekledikten sonra tekrar açın.', techSolution: 'PWM kontrollü fan motoru ve anakart haberleşme hattı test edilerek onarılır.' },
      { code: 'F.61 / F.62', title: 'Gaz Valfi Kumanda / Kapanma Hatası', cause: 'Elektronik kart gaz valfini kapatamıyor veya valf sürücü devresi arızalı.', userAction: 'Güvenlik için kombi altındaki gaz vanasını kapatıp servis hattımızı arayın.', techSolution: 'Anakart üzerindeki gaz valfi kontrol röleleri ve mikroişlemci devresi garantili olarak onarılır.' }
    ]
  },
  {
    id: 'demirdokum',
    name: 'Demirdöküm',
    slug: 'demirdokum-kombi-bakim-teknik-servisi',
    errorSlug: 'demirdokum-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'Türkiye / Vaillant Group',
    popularModels: ['Nitromix', 'Atromix', 'Ademix', 'Kion', 'Atron', 'Nepto', 'Kalisto', 'Aden', 'Isofast'],
    shortDesc: 'Demirdöküm Nitromix, Atromix, Ademix, Atron, Nepto ve Aden modellerinde tüm F serisi hata kodları, bakım ve orijinal parça servisi.',
    techNote: 'Aliağa ve Kuzey İzmir\'de en yüksek pazar payına sahip markalardan biri olan Demirdöküm\'de Atron/Nepto serilerinde F04-F10 hataları, Nitromix/Atromix yoğuşmalı serilerde ise F28 ve F75 kodları yaygındır. Aden modellerinde ise ışık kombinasyonlarıyla (30-40-50-60-70-80-90 LED\'leri) arıza teşhisi yapılır.',
    errorCodes: [
      { code: 'F01 / F20', title: 'Aşırı Isınma Emniyet Termostatı Hatası', cause: 'Kombi içindeki suyun sirküle edilememesi sonucu sıcaklık 95°C üzerine çıktı.', userAction: 'Petek vanalarının açık olduğunu kontrol edin, cihazın 15 dakika soğumasını bekleyip resetleyin.', techSolution: 'Pompa sıkışması, filtre tıkanıklığı ve üç yollu vana motoru kontrol edilir.' },
      { code: 'F02 / F06', title: 'Sıcak Su / Tesisat NTC Sensör Hatası', cause: 'Sıcaklık sensörü bağlantısı kopuk veya sensör direnci bozulmuş.', userAction: 'Kullanıcı müdahalesi önerilmez; servis çağrılmalıdır.', techSolution: 'Arızalı NTC sensör yenisiyle değiştirilir.' },
      { code: 'F04 / F28', title: 'Ateşleme Hatası (Alev Oluşmuyor)', cause: 'Gaz girişi yok, gaz valfi açmıyor veya ateşleme/iyonizasyon elektrodu görev yapmıyor.', userAction: 'Gaz vanalarını kontrol edin, kombiyi 1-2 kez resetleyin. Düzelmezse zorlamayın.', techSolution: 'Gaz valfi, iyonizasyon çubuğu ve elektronik kart ateşleme katı test edilir.' },
      { code: 'F05 / F33', title: 'Hava Akış / Prosestat / Baca Hatası', cause: 'Atık gaz fanı yeterli basınç oluşturamıyor veya prosestat arızalı.', userAction: 'Baca borusunun ek yerlerinde çıkma olup olmadığını kontrol edin.', techSolution: 'Fan kanatları temizlenir, prosestat ve ventüri borusu yenilenir.' },
      { code: 'F10 / F22', title: 'Düşük Su Basıncı Hatası', cause: 'Tesisat basıncı 0.8 barın altına inmiş veya su basınç anahtarı arızalı.', userAction: 'Doldurma musluğunu açarak basıncı 1.5 bar seviyesine getirin ve musluğu kapatın.', techSolution: 'Su basınç sondası (hidrostat) kireçten arındırılır veya değiştirilir.' },
      { code: 'F11', title: 'Sirkülasyon (Su Dolaşım) Hatası', cause: 'Gidiş ve dönüş suyu sıcaklık farkı çok yüksek; su kombi içinde dönmüyor.', userAction: 'Kalorifer vanalarını kontrol edin.', techSolution: 'Kalorifer dönüş filtresi temizlenir, pompa kapasitesi ve eşanjör tıkanıklığı giderilir.' }
    ]
  },
  {
    id: 'eca',
    name: 'E.C.A',
    slug: 'eca-kombi-bakim-teknik-servisi',
    errorSlug: 'eca-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'Türkiye / Elginkan Topluluğu',
    popularModels: ['Proteus Premix', 'Citius Premix', 'Calora Premix', 'Confeo Plus', 'Kronos', 'Fortius'],
    shortDesc: 'E.C.A Proteus Premix, Citius, Calora ve Confeo modellerinde E01, E03, F37, F40 ve T1/T3 arızaları için garantili teknik servis.',
    techNote: 'Yerli üretim gücüyle öne çıkan E.C.A kombilerde (özellikle Proteus Premix tam yoğuşmalı serisinde) pirinç hidroblok grubu oldukça dayanıklıdır ancak kireçli sularda üç yollu vana step motoru ve su basınç anahtarı düzenli bakım ister.',
    errorCodes: [
      { code: 'E01 / F04', title: 'Ateşleme Başarısızlığı (Alev Yok)', cause: 'Gaz kesintisi, elektrot kirlenmesi veya gaz valfi arızası.', userAction: 'Gaz vanasını kontrol edip R tuşuyla resetleme yapın.', techSolution: 'Ateşleme/iyonizasyon elektrodu ve gaz valfi bobinleri ölçülerek onarılır.' },
      { code: 'E02 / F01', title: 'Aşırı Isınma Limit Termostat Uyarısı', cause: 'Su sıcaklığı aşırı yükseldiği için güvenlik termostatı attı.', userAction: 'Petek vanalarını açın, su basıncının 1.5 bar olduğundan emin olun.', techSolution: 'Pompa, üç yollu vana ve limit termostat kontrol edilir.' },
      { code: 'E03 / F05', title: 'Atık Gaz / Fan / Prosestat Uyarısı', cause: 'Baca gazı tahliyesinde sorun var veya fan devir bilgisi gelmiyor.', userAction: 'Baca çıkışının açık olduğunu kontrol edip cihazı yeniden başlatın.', techSolution: 'Fan motoru, hall sensörü veya hava prosestatı onarılır.' },
      { code: 'F37 / E40', title: 'Düşük Su Basıncı Hatası', cause: 'Tesisat su basıncı 1 barın altına düşmüş.', userAction: 'Kombi altındaki doldurma vanasından basıncı 1.5 bara tamamlayın.', techSolution: 'Basınç anahtarı (hidrostat) ve genleşme tankı kontrol edilir.' },
      { code: 'F40', title: 'Yüksek Su Basıncı Uyarısı', cause: 'Tesisat basıncı 2.8 barın üzerine çıkmış.', userAction: 'Doldurma musluğunun kapalı olduğundan emin olun; en yakın peteğin hava alma purjöründen bir miktar su boşaltarak basıncı 1.5 bara düşürün.', techSolution: 'Doldurma musluğu kaçırıyorsa değiştirilir, genleşme tankına hava basılır.' },
      { code: 'T1 / T3 / T7', title: 'Aşırı Sıcaklık / Sensör Uyarısı', cause: 'Gidiş-dönüş veya dış hava sensörlerinde okuma hatası.', userAction: 'Cihazı kapatıp servis hattımızdan ücretsiz bilgi alın.', techSolution: 'İlgili NTC sensör ve anakart soket hattı yenilenir.' }
    ]
  },
  {
    id: 'bosch',
    name: 'Bosch',
    slug: 'bosch-kombi-bakim-teknik-servisi',
    errorSlug: 'bosch-buderus-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'Almanya / Bosch Termoteknik',
    popularModels: ['Condens 2200i W', 'Condens 2500 W', 'Condens 1200 W', 'Classic Condense', 'Eurostar', 'Comfort'],
    shortDesc: 'Bosch Condens 2200i, 2500W ve Classic serisi kombilerde EA, CE, C6, E9 ve A7 hata kodları için uzman bakım ve onarım.',
    techNote: 'Bosch kombiler sessiz çalışmaları ve yüksek yoğuşma verimleriyle bilinir. Condens serilerinde silindirik alüminyum-silisyum alaşımlı eşanjörün özel kimyasal ve fırça ile temizlenmesi, EA ve C6 hatalarının önüne geçmek için şarttır.',
    errorCodes: [
      { code: 'EA / 227', title: 'Alev Algılanmıyor (Ateşleme Hatası)', cause: 'Gaz girişi kapalı, yoğuşma sifonu dolu veya iyonizasyon elektrodu aşınmış.', userAction: 'Gaz vanasını kontrol edin, kombiyi resetleyin.', techSolution: 'Sifon temizlenir, elektrot takımı ve gaz valfi kalibre edilir.' },
      { code: 'CE / 1017', title: 'Tesisat Su Basıncı Düşük', cause: 'Su basıncı 0.7 barın altında.', userAction: 'Doldurma musluğu ile basıncı 1.5 bara getirin.', techSolution: 'Basınç sensörü ve genleşme tankı kontrol edilir.' },
      { code: 'C6 / 215', title: 'Fan Motoru / Baca Çekiş Hatası', cause: 'Fan dönmüyor veya devir hızı yetersiz.', userAction: 'Cihazı kapatıp açın, baca borusunu kontrol edin.', techSolution: 'Fan motoru rulman ve kart sürücü onarımı yapılır.' },
      { code: 'E9 / 224', title: 'Isı Bloğu Limit Termostatı Attı', cause: 'Aşırı ısınma veya eşanjör susuz kaldı.', userAction: 'Su basıncını ve petek vanalarını kontrol edin.', techSolution: 'Pompa, filtre ve limit sensör test edilir.' },
      { code: 'A7 / E2', title: 'Sıcak Su / Kalorifer NTC Sensör Arızası', cause: 'Sıcaklık sensörü kopuk ya da kısa devre.', userAction: 'Servis desteği alın.', techSolution: 'NTC sensör orijinaliyle değiştirilir.' }
    ]
  },
  {
    id: 'buderus',
    name: 'Buderus',
    slug: 'buderus-kombi-bakim-teknik-servisi',
    errorSlug: 'bosch-buderus-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'Almanya / Bosch Termoteknik',
    popularModels: ['Logamax Plus GB062', 'Logamax Plus GB122i', 'Logamax Plus GB022i', 'Logamax Plus GB072', 'Logamax U072'],
    shortDesc: 'Buderus Logamax Plus GB062, GB122i, GB022i ve U072 serisi kombilerde 6A, 4C, 3A, 2E ve H07 uyarıları için profesyonel teknik servis.',
    techNote: 'Buderus Logamax serisi kombiler EMS (Enerji Yönetim Sistemi) protokolüyle çalışır ve hata kodlarını harf+rakam + alt hata kodu (örn: 6A - 227) şeklinde gösterir. Bakım sırasında yanma odası contası ve yoğuşma sifonu mutlaka kontrol edilmelidir.',
    errorCodes: [
      { code: '6A (227)', title: 'Ateşleme / Alev Algılama Hatası', cause: 'Brülörde alev oluşmadı veya iyonizasyon akımı yetersiz.', userAction: 'Gaz vanasını kontrol edip OK veya Reset tuşuna 3 saniye basın.', techSolution: 'Ateşleme elektrodu, yoğuşma gideri ve gaz valfi kontrol edilir.' },
      { code: 'H07 / 2E', title: 'Düşük Su Basıncı Uyarısı', cause: 'Tesisat basıncı 1 barın altına düştü.', userAction: 'Kombi altındaki su doldurma vanasıyla basıncı 1.5 bara çıkarın.', techSolution: 'Genleşme tankı basıncı ve tesisat sızdırmazlığı ölçülür.' },
      { code: '4C (224)', title: 'Aşırı Isınma Emniyet Hatası', cause: 'Isı eşanjörü sıcaklığı izin verilen sınırı aştı.', userAction: 'Petek vanalarının açık olduğundan emin olun.', techSolution: 'Pompa sıkışması, hava yapma veya pislik tutucu tıkanıklığı giderilir.' },
      { code: '3A / 3C', title: 'Diferansiyel Basınç / Fan Hatası', cause: 'Fan motoru veya hava akış kontrolünde hata.', userAction: 'Baca çıkışını kontrol edip cihazı yeniden başlatın.', techSolution: 'Fan motoru ve hava basınç şalteri bakımı yapılır.' }
    ]
  },
  {
    id: 'viessmann',
    name: 'Viessmann',
    slug: 'viessmann-kombi-bakim-teknik-servisi',
    errorSlug: 'viessmann-ariston-protherm-ariza-kodlari',
    origin: 'Almanya',
    popularModels: ['Vitodens 050-W', 'Vitodens 100-W', 'Vitodens 111-W', 'Vitopend 100-W'],
    shortDesc: 'Viessmann Vitodens ve Vitopend serisi kombilerde F2, F4, F5, F30 ve F51 arıza kodları, Inox-Radial eşanjör bakımı ve onarımı.',
    techNote: 'Viessmann Vitodens kombilerde paslanmaz çelik Inox-Radial eşanjör bulunur. Uzun ömürlü çalışması için yanma odası aralığının özel aparatla temizlenmesi ve MatriX brülör tel dokusunun korunması gerekir.',
    errorCodes: [
      { code: 'F4 / EE', title: 'Alev Sinyali Yok (Ateşleme Arızası)', cause: 'Ateşleme gerçekleşmedi veya iyonizasyon elektrodu alevi görmüyor.', userAction: 'Gaz vanasını kontrol edip kombiyi R konumuna getirerek resetleyin.', techSolution: 'Gaz kombinasyon valfi, elektrot mesafesi ve anakart rölesi incelenir.' },
      { code: 'F2', title: 'Emniyet Termostatı Attı (Aşırı Isınma)', cause: 'Sirkülasyon yetersizliği nedeniyle aşırı ısınma.', userAction: 'Su basıncını (1.5 bar) ve petek vanalarını kontrol edin.', techSolution: 'Pompa, üç yollu vana ve limit termostat kontrol edilir.' },
      { code: 'F5 / F51', title: 'Hava Basınç / Fan / Çıkış Sıcaklık Hatası', cause: 'Baca gazı tahliyesi veya sıcak su sensör hatası.', userAction: 'Cihazı kapatıp açın, devam ederse servis çağırın.', techSolution: 'Prosestat, fan ve NTC sensörler ölçülerek değiştirilir.' },
      { code: 'F30 / F38', title: 'Kazan / Çıkış Sıcaklık Sensörü Hatası', cause: 'NTC sensör kısa devre veya kopuk.', userAction: 'Servis desteği alın.', techSolution: 'Viessmann uyumlu NTC sensör değişimi yapılır.' }
    ]
  },
  {
    id: 'ariston',
    name: 'Ariston',
    slug: 'ariston-kombi-bakim-teknik-servisi',
    errorSlug: 'viessmann-ariston-protherm-ariza-kodlari',
    origin: 'İtalya',
    popularModels: ['Cares Premium', 'Clas One', 'Genus One', 'Alteas One', 'Egis Plus', 'Matis'],
    shortDesc: 'Ariston Clas One, Genus One, Cares Premium ve Egis kombilerde 501, 101, 104, 108 ve 6P1 hata kodları için garantili teknik servis.',
    techNote: 'İtalyan Ariston kombilerde hata kodları 100\'lü (ısıtma/devirdaim), 400\'lü (çevre/kart), 500\'lü (ateşleme) ve 600\'lü (hava/baca) gruplar halinde sınıflandırılmıştır.',
    errorCodes: [
      { code: '501 / 5P3', title: 'Alev Yok / Ateşleme Kopması', cause: 'Gaz yokluğu, elektrot kirlenmesi veya anakart ateşleme arızası.', userAction: 'Gaz vanasını kontrol edip Reset tuşuna basın.', techSolution: 'Ateşleme grubu, gaz valfi ve anakart kondansatör/röle yapısı onarılır.' },
      { code: '108', title: 'Su Basıncı Düşük (Yetersiz Su)', cause: 'Tesisat basıncı 0.6 barın altına inmiş.', userAction: 'Kombi altındaki mavi/siyah musluktan 1.5 bara kadar su basın.', techSolution: 'Basınç şalteri ve genleşme tankı kontrol edilir.' },
      { code: '101 / 104', title: 'Aşırı Isınma / Yetersiz Sirkülasyon', cause: 'Kombi içinde su dolaşımı yavaş veya pompa sıkışmış.', userAction: 'Petek vanalarını açın, su basıncını kontrol edin.', techSolution: 'Filtre temizliği ve sirkülasyon pompası revizyonu yapılır.' },
      { code: '601 / 6P1', title: 'Atık Gaz Tahliye / Hava Prosestat Hatası', cause: 'Fan veya hava basınç şalteri gecikmesi.', userAction: 'Baca borusunu kontrol edin.', techSolution: 'Fan motoru ve prosestat bakımı yapılır.' }
    ]
  },
  {
    id: 'protherm',
    name: 'Protherm',
    slug: 'protherm-kombi-bakim-teknik-servisi',
    errorSlug: 'viessmann-ariston-protherm-ariza-kodlari',
    origin: 'Avrupa / Vaillant Group',
    popularModels: ['Lynx Condens', 'Puma Condens', 'Gepard Condens', 'Leopard', 'Panther'],
    shortDesc: 'Protherm Lynx, Puma, Gepard ve Leopard serisi kombilerde F22, F28, F62 ve F75 arıza kodları için yerinde garantili tamir ve bakım.',
    techNote: 'Vaillant Group bünyesinde üretilen Protherm kombiler, Vaillant ile benzer sensör ve hidroblok mimarisine sahiptir. Düzenli bakım yapıldığında son derece ekonomik ve dayanıklı cihazlardır.',
    errorCodes: [
      { code: 'F22', title: 'Düşük Su Basıncı (Susuz Çalışma Koruması)', cause: 'Tesisat su basıncı 0.5 barın altında.', userAction: 'Su doldurma vanasıyla basıncı 1.5 bara tamamlayın.', techSolution: 'Su basınç sensörü ve genleşme tankı kontrol edilir.' },
      { code: 'F28 / F29', title: 'Ateşleme ve Alev Kesintisi Hatası', cause: 'Gaz girişi yok, elektrot kirli veya gaz valfi açmıyor.', userAction: 'Gaz vanasını kontrol edip cihazı resetleyin.', techSolution: 'Gaz valfi, elektrot ve anakart kontrol edilir.' },
      { code: 'F62', title: 'Gaz Valfi Kapanma Gecikmesi / Kart Hatası', cause: 'Gaz valfi veya anakart sürücü devresi arızalı.', userAction: 'Cihazı kapatıp servis hattımızı arayın.', techSolution: 'Anakart revizyonu ve gaz valfi testi uygulanır.' }
    ]
  },
  {
    id: 'ferroli',
    name: 'Ferroli',
    slug: 'ferroli-kombi-bakim-teknik-servisi',
    errorSlug: 'kombi-hata-kodlari-ve-cozumleri',
    origin: 'İtalya',
    popularModels: ['Bluehelix Tech', 'Divatech', 'Domiproject', 'Domitech', 'Domicompact'],
    shortDesc: 'Ferroli Bluehelix, Divatech ve Domiproject kombilerde A01, A03, F37 ve F05 arıza kodları, bitermik ve plaka eşanjör bakımı.',
    techNote: 'Ferroli Domiproject ve Domicompact serilerinde bitermik (çift geçişli tek) eşanjör kullanılır. Kireçli sularda bu eşanjörün düzenli temizlenmesi kaynama sesini ve A03 aşırı ısınma hatasını önler.',
    errorCodes: [
      { code: 'A01', title: 'Brülör Ateşleme Yapmıyor', cause: 'Gaz yok, elektrot arızalı veya ateşleme gücü düşük.', userAction: 'Gaz vanasını kontrol edip resetleyin.', techSolution: 'Tekli ateşleme/iyonizasyon elektrodu ve gaz valfi ayarlanır.' },
      { code: 'F37', title: 'Düşük Tesisat Su Basıncı', cause: 'Su basıncı 0.8 barın altında.', userAction: 'Basıncı 1.5 bara tamamlayın.', techSolution: 'Hidrostat (basınç şalteri) temizlenir veya değiştirilir.' },
      { code: 'A03', title: 'Aşırı Isınma Koruması Devrede', cause: 'Sirkülasyon pompası sıkışmış veya eşanjör kireçlenmiş.', userAction: 'Petek vanalarını açıp cihazın soğumasını bekleyin.', techSolution: 'Pompa ve eşanjör bakımı yapılır.' }
    ]
  },
  {
    id: 'immergas',
    name: 'Immergas',
    slug: 'immergas-kombi-bakim-teknik-servisi',
    errorSlug: 'kombi-hata-kodlari-ve-cozumleri',
    origin: 'İtalya',
    popularModels: ['Victrix Tera', 'Victrix Omnia', 'Eolo Star', 'Eolo Mythos', 'Alpha'],
    shortDesc: 'Immergas Victrix ve Eolo Star serisi kombilerde 01, 02, 10, 11 ve 27 hata kodları için garantili bakım ve onarım servisi.',
    techNote: 'İtalyan Immergas kombiler kompakt yapıları ve uzun ömürlü bakır/paslanmaz bileşenleriyle öne çıkar. Eolo Star modellerinde bitermik eşanjör kireç bakımı önemlidir.',
    errorCodes: [
      { code: '01', title: 'Ateşleme Blokajı', cause: 'Brülör ateşlemedi.', userAction: 'Gaz vanasını kontrol edip Reset tuşuna basın.', techSolution: 'Gaz valfi ve elektrot kontrolü.' },
      { code: '10', title: 'Yetersiz Su Basıncı', cause: 'Tesisat basıncı düşük.', userAction: '1.5 bara kadar su basın.', techSolution: 'Basınç şalteri ve genleşme tankı bakımı.' },
      { code: '11 / 03', title: 'Duman / Hava Prosestatı Hatası', cause: 'Baca çekiş veya fan sorunu.', userAction: 'Baca hattını kontrol edin.', techSolution: 'Fan ve prosestat onarımı.' }
    ]
  },
  {
    id: 'alarko',
    name: 'Alarko',
    slug: 'alarko-kombi-bakim-teknik-servisi',
    errorSlug: 'kombi-hata-kodlari-ve-cozumleri',
    origin: 'Türkiye / Alarko Carrier',
    popularModels: ['Seradens Super', 'Seradens Smart', 'Super Fit', 'Serena', 'Trendy'],
    shortDesc: 'Alarko Seradens, Super Fit ve Serena kombilerde tüm hata kodları, periyodik kış bakımı ve orijinal yedek parça servisi.',
    techNote: 'Alarko Seradens serisi çift eşanjörlü tam yoğuşmalı yapısıyla yüksek tasarruf sağlar. Yıllık bakımda paslanmaz eşanjör ve sifon temizliği kritik önemdedir.',
    errorCodes: [
      { code: 'E01', title: 'Ateşleme Hatası', cause: 'Alev oluşmadı.', userAction: 'Gazı kontrol edip resetleyin.', techSolution: 'Elektrot ve gaz valfi kontrolü.' },
      { code: 'H20 / F37', title: 'Su Basıncı Düşük', cause: 'Basınç 1 barın altında.', userAction: '1.5 bar su basın.', techSolution: 'Su basınç anahtarı kontrolü.' }
    ]
  },
  {
    id: 'airfel',
    name: 'Airfel',
    slug: 'airfel-kombi-bakim-teknik-servisi',
    errorSlug: 'kombi-hata-kodlari-ve-cozumleri',
    origin: 'Türkiye / Daikin Grup',
    popularModels: ['Maestro Smart Premix', 'Digifel Premix', 'Digifel Duo', 'Integrity'],
    shortDesc: 'Airfel Digifel Premix, Maestro ve Duo serisi kombilerde C1, C6, E1, E9 ve AF hata kodları için uzman teknik servis.',
    techNote: 'Daikin güvencesiyle üretilen Airfel Digifel Premix kombilerde fan ve anakart uyumu yüksek verim sunar; voltaj dalgalanmalarına karşı bakım sırasında kart soketleri kontrol edilir.',
    errorCodes: [
      { code: 'E1 / C1', title: 'Ateşleme / Hava Akış Hatası', cause: 'Alev algılanmadı veya fan devri yetersiz.', userAction: 'Cihazı resetleyin, gazı kontrol edin.', techSolution: 'Fan, elektrot ve gaz valfi bakımı.' },
      { code: 'E4 / CE', title: 'Düşük Su Basıncı', cause: 'Tesisat suyu eksik.', userAction: '1.5 bara tamamlayın.', techSolution: 'Basınç sensörü kontrolü.' }
    ]
  },
  {
    id: 'daikin',
    name: 'Daikin',
    slug: 'daikin-kombi-bakim-teknik-servisi',
    errorSlug: 'kombi-hata-kodlari-ve-cozumleri',
    origin: 'Japonya / Türkiye Üretim',
    popularModels: ['NDJ Premix', 'VZ Premix', 'D2C', 'Condens'],
    shortDesc: 'Daikin Premix tam yoğuşmalı kombilerde U0, U4, E1, HJ-09 ve 81-01 hata kodları, özel eşanjör bakımı ve onarımı.',
    techNote: 'Daikin NDJ tam yoğuşmalı kombiler ultra kompakt eşanjör teknolojisine sahiptir. Özel yanma odası contası ve yoğuşma sifonu her yıl temizlenmelidir.',
    errorCodes: [
      { code: '11-64 / U0', title: 'Ateşleme Hatası', cause: 'Gaz yok veya alev algılanmadı.', userAction: 'Gaz vanasını kontrol edip resetleyin.', techSolution: 'İyonizasyon ve gaz valfi kalibrasyonu.' },
      { code: 'HJ-09', title: 'Su Basıncı Düşük', cause: 'Tesisat basıncı 0.8 barın altında.', userAction: 'Su basıncını 1.5 bara getirin.', techSolution: 'Basınç sensörü ve genleşme tankı kontrolü.' }
    ]
  },
  {
    id: 'warmhaus',
    name: 'Warmhaus',
    slug: 'warmhaus-kombi-bakim-teknik-servisi',
    errorSlug: 'kombi-hata-kodlari-ve-cozumleri',
    origin: 'Türkiye / Beyçelik Holding',
    popularModels: ['Ewa', 'Enerwa', 'Enerwa Plus', 'Minerwa', 'Viwa', 'Lawa'],
    shortDesc: 'Warmhaus Enerwa, Ewa ve Minerwa yoğuşmalı kombilerde E01, E10, E02 ve E96 hata kodları için garantili teknik servis.',
    techNote: 'Yerli üretim Warmhaus kombiler gaz adaptif sistemleriyle dikkat çeker. Yıllık bakımda gaz-hava karışım kalibrasyonu yapılması yakıt tasarrufunu korur.',
    errorCodes: [
      { code: 'E01', title: 'Ateşleme Arızası', cause: 'Brülör devreye girmedi.', userAction: 'Gazı kontrol edip resetleyin.', techSolution: 'Ateşleme elektrodu ve gaz valfi kontrolü.' },
      { code: 'E10', title: 'Düşük Su Basıncı', cause: 'Su basıncı yetersiz.', userAction: '1.5 bara kadar su basın.', techSolution: 'Su basınç sondası kontrolü.' }
    ]
  },
  {
    id: 'baxi',
    name: 'Baxi',
    slug: 'baxi-kombi-bakim-teknik-servisi',
    errorSlug: 'baymak-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'İtalya / BDR Thermea',
    popularModels: ['Luna', 'Eco', 'Nuvola', 'Main'],
    shortDesc: 'Baxi Luna, Eco ve Main serisi kombilerde E01, E03, E10 ve E25 arıza kodları, bakım ve orijinal yedek parça servisi.',
    techNote: 'Baxi ve Baymak aynı BDR Thermea platformunu paylaştığı için yedek parça ve kart mimarileri birebir uyumludur; tüm parçaları araçlarımızda mevcuttur.',
    errorCodes: [
      { code: 'E01', title: 'Ateşleme Başarısız', cause: 'Gaz veya elektrot sorunu.', userAction: 'Reset tuşuna basın.', techSolution: 'Ateşleme grubu onarımı.' },
      { code: 'E10', title: 'Su Basıncı Düşük', cause: 'Tesisat suyu eksik.', userAction: '1.5 bar su basın.', techSolution: 'Hidrostat ve genleşme tankı kontrolü.' }
    ]
  },
  {
    id: 'lambert',
    name: 'Lambert',
    slug: 'lambert-kombi-bakim-teknik-servisi',
    errorSlug: 'baymak-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'Türkiye / Baymak Grup',
    popularModels: ['Attivo', 'Lpy Compact', 'LX'],
    shortDesc: 'Lambert Attivo ve Lpy Compact yoğuşmalı kombilerde E01, E03, E10 ve sıcak su dalgalanma arızaları için hızlı yerinde servis.',
    techNote: 'Baymak fabrikasında üretilen Lambert kombilerin tüm sensör, üç yollu vana, eşanjör ve anakart parçaları servis araçlarımızda hazır bulunur.',
    errorCodes: [
      { code: 'E01', title: 'Ateşleme Hatası', cause: 'Gaz yok veya iyonizasyon hatası.', userAction: 'Gaz vanasını kontrol edip resetleyin.', techSolution: 'Elektrot ve gaz valfi bakımı.' },
      { code: 'E03', title: 'Hava Prosestat / Fan Uyarısı', cause: 'Atık gaz tahliye sorunu.', userAction: 'Bacayı kontrol edin.', techSolution: 'Fan ve prosestat temizliği.' }
    ]
  },
  {
    id: 'dolcevita',
    name: 'Dolcevita',
    slug: 'dolcevita-kombi-bakim-teknik-servisi',
    errorSlug: 'baymak-kombi-ariza-kodlari-ve-cozumleri',
    origin: 'Türkiye / Baymak Grup',
    popularModels: ['Dpy Compact', 'Felice', 'HC'],
    shortDesc: 'Dolcevita Dpy Compact ve Felice serisi kombilerde garantili arıza tespiti, yıllık periyodik bakım ve petek temizliği.',
    techNote: 'Dolcevita kombilerde kireç kaynaklı sıcak su azalması ve basınç düşmesi sorunlarına aynı gün yerinde müdahale ediyoruz.',
    errorCodes: [
      { code: 'E10', title: 'Düşük Su Basıncı', cause: 'Su basıncı 1 barın altında.', userAction: '1.5 bara tamamlayın.', techSolution: 'Basınç şalteri ve genleşme tankı kontrolü.' },
      { code: 'E01', title: 'Ateşleme Hatası', cause: 'Alev algılanmadı.', userAction: 'Resetleyin.', techSolution: 'Ateşleme grubu onarımı.' }
    ]
  }
];

module.exports = { BRANDS };
