/**
 * Arıza Rehberleri, Belirti Analizleri ve Marka Hata Kodları Sayfa Verileri ({domain}/{ariza-url})
 */

const FAULTS = [
  {
    slug: 'kombi-calisiyor-ama-ev-isinmiyor',
    codeBadge: 'ISINMA REHBERİ #01',
    category: 'Isınma ve Petek Sorunları',
    title: 'Kombi Çalışıyor Ama Ev ve Petekler Isınmıyor: Nedenleri ve 5 Adımda Çözümü',
    metaDesc: 'Kombi çalışıyor, sıcak su geliyor ama ev veya petekler ısınmıyor mu? Üç yollu vana, filtre tıkanıklığı, pompa ve basınç kontrolleri. Ücretsiz bilgi: 0542 585 06 75.',
    readTime: '5 dk okuma',
    updatedAt: '2026-11-12',
    shortTitle: 'Kombi çalışıyor, ev ısınmıyor',
    summary: 'Kombi devrede görünmesine rağmen peteklerin ılık veya buz gibi kalması durumunda evde yapabileceğiniz 5 güvenli kontrol ve teknik arıza nedenleri.',
    quickTip: 'Musluktan sıcak su sorunsuz akıyor, kombi kış modunda ateşleme yapıyor ama peteklere hiç sıcak su gitmiyorsa arıza %85 ihtimalle kombi altındaki pislik tutucu filtrenin tıkanmasından veya üç yollu yönlendirme vanasının sıcak su konumunda asılı kalmasından kaynaklanır.',
    symptomsTable: [
      { symptom: 'Kombi 60°C\'ye hemen çıkıp sönüyor ama petekler buz gibi', cause: 'Kalorifer dönüş filtresi tıkalı veya sirkülasyon pompası suyu çeviremiyor', action: 'Filtre temizliği ve pompa mil kontrolü gerekir' },
      { symptom: 'Sıcak su var, kombi yanıyor ama sadece kombinin alt borusu ısınıyor', cause: 'Üç yollu vana motoru veya iç kartuşu arızalı', action: 'Üç yollu vana tamir takımı veya step motoru test edilmeli' },
      { symptom: 'Kombiye yakın petekler sıcak, en uzak odadaki petekler soğuk', cause: 'Tesisatta çamurlaşma veya reglaj (vana denge) ayarsızlığı', action: 'Makineli petek temizliği ve vana dengelemesi yapılmalı' },
      { symptom: 'Peteğin üst kısmı soğuk, alt kısmı ılık', cause: 'Petek içinde hava birikmiş', action: 'Pürjör anahtarıyla peteğin havası alınmalı ve su basıncı 1.5 bara tamamlanmalı' },
      { symptom: 'Peteğin üst kısmı sıcak, alt yarısı tamamen soğuk', cause: 'Petek tabanında tortu ve balçık birikmiş', action: 'Darbeli makine ile ilaçsız/koruyuculu tesisat yıkaması yapılmalı' }
    ],
    userChecks: [
      { title: 'Kış (Kalorifer) Modunu Kontrol Edin', desc: 'Kombi ekranında petek/radyatör sembolünün göründüğünden ve kalorifer sıcaklık ayarının en az 45-55°C arasında olduğundan emin olun.' },
      { title: 'Su Basıncına (Bar Göstergesi) Bakın', desc: 'Kombi soğukken manometre 1.0 barın altındaysa sistemde yeterli su dolaşımı olmaz. Basıncı doldurma musluğuyla 1.5 bar seviyesine getirin.' },
      { title: 'Oda Termostatı ve Pillerini Denetleyin', desc: 'Kablosuz oda termostatı kullanıyorsanız pillerin zayıflaması alıcı üniteye "ısıt" komutunun gitmesini engeller.' },
      { title: 'Kombi Altı ve Petek Vanalarını Yoklayın', desc: 'Yazın kapatılmış olabilecek kombi altındaki kalın kalorifer gidiş-dönüş vanalarının boruyla paralel (açık) konumda olduğunu doğrulayın.' },
      { title: 'İlk Peteğin Havasını Alın', desc: 'Kombiye en yakın ve en uzak peteğin üst yanındaki hava alma vidasını hafifçe gevşeterek su gelene kadar havasını tahliye edin.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Üç Yollu Vana Arızası Nasıl Anlaşılır?',
        text: 'Kombiniz hem banyo suyunu hem de petek suyunu ısıtmak için "üç yollu vana" adı verilen motorlu bir yönlendirici kullanır. Siz musluğu açtığınızda bu vana petek yolunu kapatır, suyu plaka eşanjöre çevirir. Musluğu kapattığınızda tekrar petek yolunu açması gerekir. Ancak Aliağa ve çevre ilçelerdeki kireçli su nedeniyle vana mili sıkışırsa, musluğu kapatsanız bile sıcak su kombi içinde hapsolur ve peteklere gitmez. Ustalarımız komple vana gövdesini değiştirmek yerine çoğu zaman sadece iç tamir takımını yenileyerek yarı maliyetine sorunu çözer.'
      },
      {
        heading: 'Kalorifer Dönüş Filtresi Neden Tıkanır?',
        text: 'Kombinin sağ alt kısmındaki kalın dönüş borusu üzerinde metal bir pislik tutucu süzgeç bulunur. Peteklerin içinden kopan siyah metal oksit tortuları bu süzgeçte toplanır. Süzgeç dolduğunda kombi kendi içindeki 2 litrelik suyu 15 saniyede 70 dereceye çıkarır, "evi ısıttım" sanarak alevi keser. Bu duruma kısa döngü (short-cycling) denir; hem evi ısıtmaz hem de doğalgaz faturanızı yükseltir.'
      }
    ],
    faqs: [
      { q: 'Bu kontrolleri yaptım ama petekler hâlâ ısınmıyor, telefonda yardımcı olur musunuz?', a: 'Evet! 0542 585 06 75 numaramızı aradığınızda kombinizin markasını söyleyin; ustamız size ücretsiz olarak başka hangi detaya bakabileceğinizi anlatsın veya dilerseniz aynı gün adresinize gelsin.' },
      { q: 'Üç yollu vana veya filtre temizliği ne kadar sürer?', a: 'Adreste ortalama 30-40 dakika içerisinde tamamlanır ve işlem sonrası tüm peteklerin ısındığı birlikte kontrol edilir.' }
    ]
  },
  {
    slug: 'peteklerin-ustu-sicak-alti-soguk-cozumu',
    codeBadge: 'TESİSAT REHBERİ #02',
    category: 'Isınma ve Petek Sorunları',
    title: 'Peteklerin Üstü Sıcak Altı Soğuk Neden Olur? Kesin Çözüm Yöntemleri',
    metaDesc: 'Kalorifer peteklerinin üst kısmı ısınıyor ama alt yarısı buz gibi mi kalıyor? Tortu birikmesi, sirkülasyon yetersizliği ve makineli petek temizliği rehberi.',
    readTime: '4 dk okuma',
    updatedAt: '2026-11-10',
    shortTitle: 'Peteklerin altı ısınmıyor',
    summary: 'Radyatörlerin üst kısmının sıcak olup alt kanallarının soğuk kalmasının fiziksel nedenleri, reglaj ayarı ve makineli temizlik süreci.',
    quickTip: 'Bir peteğin üstü soğuksa içinde HAVA vardır (evde kendiniz alabilirsiniz). Ancak peteğin üstü sıcak, alt kısmı soğuksa petek tabanına ÇAMUR/TORTU çökmüştür; hava almak bu sorunu çözmez, suyun alt kanallardan geçmesi için tortunun dışarı atılması gerekir.',
    symptomsTable: [
      { symptom: 'Peteğin üstü el yakıyor, altı buz gibi', cause: 'Alt kanallarda kireç ve metal çamuru birikimi', action: 'Makineli darbeli petek yıkama' },
      { symptom: 'Peteğin giriş tarafı sıcak, sonu soğuk', cause: 'Su debisi düşük veya kombiye yakın petekler tüm suyu çalıyor', action: 'Kombiye yakın peteklerin vanasını yarıya kısın (Reglaj)' },
      { symptom: 'Peteğin tamamı soğuk, sadece vana borusu ılık', cause: 'Termostatik vana iğnesi basılı kalarak yapışmış', action: 'Termostatik başlığı söküp metal iğneyi hafifçe dışarı çekin' }
    ],
    userChecks: [
      { title: 'Kombiye En Yakın Peteklerin Vanalarını Yarıya Kısın', desc: 'Sıcak su her zaman en kolay yolu seçer. Kombiye yakın ilk 2 peteğin alt dönüş vanasını yarı yarıya kısarsanız, basınçlı sıcak su uzaktaki ve altı soğuk kalan peteklere ulaşır.' },
      { title: 'Termostatik Vana İğnesini Kontrol Edin', desc: 'Numaralı (1-5 arası) vana kullanıyorsanız, yaz boyu kapalı kaldığında içindeki yaylı pim sıkışabilir. Başlığı çıkarıp pimin yaylanıp yaylanmadığına bakın.' },
      { title: 'Kombi Kalorifer Derecesini 50°C Üzerine Alın', desc: 'Çok düşük sıcaklıklarda (35-40°C) su petek içinde üstten girip soğuyarak çıktığı için alt kısım ılık hissedilir.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Peteklerin Altında Neden Çamur Oluşur?',
        text: 'Kapalı devre kalorifer tesisatındaki su, yıllar boyunca çelik radyatörlerin iç yüzeyi ile reaksiyona girer ve ağır metal oksit (siyah tortu) oluşturur. Yerçekimi etkisiyle bu ağır tortu peteklerin en alt su kanallarına çöker. Sıcak su üstten girer, alt kanallar tıkalı olduğu için orta kanallardan kısa devre yaparak kombiden geri döner. Sonuç olarak peteğin yüzey alanının %40\'ını kaybedersiniz.'
      },
      {
        heading: 'Makineli Petek Temizliği Nasıl Yapılır?',
        text: 'Aliağa, Foça, Menemen ve Bergama\'da uyguladığımız işlemde hiçbir peteği yerinden sökmüyor, parkelerinize bir damla bile kirli su damlatmıyoruz. Banyodaki havlupanı söküp çift yönlü basınçlı su ve hava darbesi üreten cihazımızı bağlıyoruz. Her peteği tek tek yıkayarak içindeki siyah tortuyu doğrudan klozet giderine akıtıyor, ardından kombi filtresini temizleyip havalarını alarak sistemi teslim ediyoruz.'
      }
    ],
    faqs: [
      { q: 'Petek temizliği doğalgaz faturasını gerçekten düşürür mü?', a: 'Altı tıkalı petekler odayı ısıtamadığı için kombiyi 55-60 derecede çalıştırmak zorunda kalırsınız. Temizlik sonrası peteğin tamamı ısı yaymaya başlayacağından 45 derecede aynı sıcaklığı elde eder ve %15-25 arası yakıt tasarrufu sağlarsınız.' }
    ]
  },
  {
    slug: 'kombi-su-basinci-neden-duser',
    codeBadge: 'BASINÇ REHBERİ #03',
    category: 'Basınç ve Su Sorunları',
    title: 'Kombi Su Basıncı Neden Sürekli Düşer? Su Eksiltme ve Genleşme Tankı Çözümü',
    metaDesc: 'Kombi bar göstergesi sürekli 1 barın altına mı düşüyor? Haftada bir su basmak zorunda kalıyorsanız genleşme tankı, emniyet ventili ve kaçak nedenleri.',
    readTime: '5 dk okuma',
    updatedAt: '2026-11-11',
    shortTitle: 'Basınç sürekli düşüyor',
    summary: 'Kombinin sürekli su eksiltmesi, E10 / F22 / F10 basınç uyarıları ve genleşme tankı membran kontrolleri hakkında teknik rehber.',
    quickTip: 'Kombiye su bastıktan sonra ısıtma çalıştığında basınç bir anda 2.5 - 3.0 bara fırlıyor, kombi soğuduğunda ise tekrar 0.5 bara düşüyorsa tesisatınızda boru patlağı yoktur! Sorun kombinin içindeki Genleşme Tankı\'nın havasının bitmesidir ve adreste 20 dakikada çözülür.',
    symptomsTable: [
      { symptom: 'Kombi ısınınca bar 3\'e çıkıyor, soğuyunca sıfıra düşüyor', cause: 'Genleşme tankı havası bitmiş veya membranı delinmiş', action: 'Genleşme tankına 1.0 bar azot/hava basımı veya tank değişimi' },
      { symptom: 'Kombi altındaki ince borudan dışarı su damlıyor', cause: '3 Bar Emniyet Ventili kireçlenmiş ve suyu dışarı kaçırıyor', action: 'Emniyet ventili değişimi ve tank kontrolü' },
      { symptom: 'Kombi sadece kış modunda değil, yazın kapalıyken de su eksiltiyor', cause: 'Petek vanası terlemesi veya şap altı boru kaçağı', action: 'Vana rekorlarının sıkılması veya kaçak kimyasalı uygulaması' },
      { symptom: 'Tesisatta hiç kaçak yok ama su gizlice yok oluyor', cause: 'Ana eşanjörde kılcal çatlak (su yanma odasında buharlaşıyor)', action: 'Yanma odası ve eşanjör basınç testi' }
    ],
    userChecks: [
      { title: 'İdeal Basınç Değerini (1.5 Bar) Koruyun', desc: 'Kombi soğukken basınç 1.2 ile 1.5 bar arasında olmalıdır. 1 barın altına düştüğünde cihaz güvenlik amacıyla çalışmayı durdurur.' },
      { title: 'Petek Vana Rekorlarını Peçeteyle Kontrol Edin', desc: 'Tüm peteklerin alt ve üst bağlantı rekorlarına kuru bir peçete dokundurarak sızıntı veya yeşil-beyaz kireç izi olup olmadığına bakın.' },
      { title: 'Sürekli Taze Su Basmaktan Kaçının', desc: 'Tesisata her hafta yeni şebeke suyu basmak içeriye sürekli taze oksijen ve kireç sokar; bu da peteklerin çürümesini ve eşanjörün tıkanmasını hızlandırır.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Genleşme Tankı Nedir ve Basınç Düşmesiyle İlgisi Nedir?',
        text: 'Su ısındıkça hacmi genişler (genleşir). Kombinin arka veya yan kısmında bulunan yassı kırmızı/gri tankın içinde yarı yarıya azot gazı ve membran bulunur. Isınan suyun fazlalığı bu tankın içine esner. Eğer tankın içindeki hava zamanla biterse, ısınan su gidecek yer bulamaz ve basıncı 3 bara çıkarır. 3 bara ulaşan basınç, kombinin altındaki emniyet ventilini açarak suyu dışarı atar. Kombi soğuduğunda ise dışarı atılan su yüzünden basınç sıfıra düşer.'
      }
    ],
    faqs: [
      { q: 'Genleşme tankına hava basmak için kombiyi sökmek gerekir mi?', a: 'Hayır, kombi duvardayken üst sibobundan dijital manometreli kompresörümüzle 15 dakikada havasını tamamlıyoruz.' }
    ]
  },
  {
    slug: 'kombi-su-basinci-neden-yukselir',
    codeBadge: 'BASINÇ REHBERİ #04',
    category: 'Basınç ve Su Sorunları',
    title: 'Kombi Basıncı Neden Kendi Kendine 3 Bara Yükselir ve Su Akıtır?',
    metaDesc: 'Kombiye su basmadığınız halde basınç 2.5 - 3 bara çıkıyor ve altından su mu damlatıyor? Doldurma musluğu, plaka eşanjör ve genleşme tankı arızaları.',
    readTime: '4 dk okuma',
    updatedAt: '2026-11-09',
    shortTitle: 'Basınç 3 bara çıkıyor',
    summary: 'Kombi manometresinin kendi kendine yükselmesi ve emniyet ventilinden su tahliye etmesinin 3 temel sebebi ve evde ilk müdahale.',
    quickTip: 'Kombi çalışmazken (soğukken) bile basınç yavaş yavaş 3 bara tırmanıyorsa; ya su doldurma musluğu tam kapanmıyordur ya da plaka eşanjör içten delinerek şebeke suyunu kalorifer suyuna karıştırıyordur. Hemen kombi altındaki soğuk su giriş vanasını kapatarak test edebilirsiniz.',
    symptomsTable: [
      { symptom: 'Kombi kapalıyken bile basınç saatler içinde 3 bara çıkıyor', cause: 'Doldurma musluğu contası sıyrılmış veya plaka eşanjör içten delik', action: 'Doldurma musluğu veya plaka eşanjör değişimi' },
      { symptom: 'Basınç sadece petekler yanarken 3 bara fırlıyor', cause: 'Genleşme tankında hava kalmamış', action: 'Genleşme tankı azot/hava dolumu' }
    ],
    userChecks: [
      { title: 'Doldurma Musluğunu Kontrol Edin', desc: 'Kombi altındaki mavi veya siyah su basma vanasının tam kapalı olduğundan emin olun. Çok aşırı sıkmak iç contayı ezebilir.' },
      { title: 'Fazla Suyu Petek Hava Alma Vidasından Boşaltın', desc: 'Basınç 3 bara çıktıysa banyodaki havlupanın üst yanındaki purjör vidasını gevşetip bir kaba 2-3 bardak su alarak basıncı 1.5 bara düşürün.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Doldurma Musluğu mu, Plaka Eşanjör mü? (1 Dakikalık Test)',
        text: 'Basıncı 1.5 bara düşürdükten sonra kombinin altındaki soğuk su giriş vanasını kapatın. Eğer basınç yükselmeyi durdurduysa sorun şebeke suyunun kalorifere karışmasıdır. Bu durumun %70 sebebi doldurma musluğunun bozulması, %30 sebebi ise plaka eşanjörün kireçten delinmesidir. Her iki parça da servis araçlarımızda mevcuttur ve yerinde değiştirilir.'
      }
    ],
    faqs: [
      { q: 'Basınç 3 barda kalırsa kombi patlar mı?', a: 'Patlamaz çünkü her kombide 3 barda açılan "Emniyet Ventili" vardır ve fazla suyu kombi altından dışarı akıtır. Ancak akan bu su kombinin elektronik kartına veya pompasına sıçrayarak büyük arıza çıkarabilir.' }
    ]
  },
  {
    slug: 'kombi-sicak-su-vermiyor-nedenleri',
    codeBadge: 'SICAK SU REHBERİ #05',
    category: 'Sıcak Su Arızaları',
    title: 'Kombi Sıcak Su Vermiyor veya Su Bir Isınıp Bir Soğuyor: Nedenleri ve Çözümü',
    metaDesc: 'Petekler ısınıyor ama musluktan sıcak su gelmiyor mu? Banyoda su bir ısınıp bir buz gibi oluyorsa akış türbini, NTC sensör ve plaka eşanjör çözümleri.',
    readTime: '5 dk okuma',
    updatedAt: '2026-11-12',
    shortTitle: 'Sıcak su gelmiyor / dalgalanıyor',
    summary: 'Musluk açıldığında kombinin ateşleme yapmaması veya sıcak suyun sürekli soğuyup ısınması (dalgalanma) sorunlarının kesin çözümü.',
    quickTip: 'Musluğu açtığınızda kombi ekranında "musluk" işareti hiç çıkmıyorsa sorun Akış Türbini (Akış Şalteri) parçasındadır. Musluk işareti çıkıyor, kombi ateşliyor ama su 10 saniye sıcak akıp sonra buz gibi oluyorsa sorun Plaka Eşanjörün kireçlenmesidir.',
    symptomsTable: [
      { symptom: 'Musluk açılınca kombi hiç tepki vermiyor (Petekler çalışıyor)', cause: 'Su akış türbini (türbin pervanesi) kireçten sıkışmış veya sensörü arızalı', action: 'Akış türbini temizliği veya değişimi' },
      { symptom: 'Banyoda su bir sıcak bir soğuk akıyor (Kombi alevi açıp kapatıyor)', cause: 'Plaka eşanjör kireçlenmiş veya sıcak su NTC sensörü bozuk', action: 'Plaka eşanjör kireç temizliği ve NTC değişimi' },
      { symptom: 'Musluktan sıcak su akarken petekler de ısınıyor, musluktaki su ılıklaşıyor', cause: 'Üç yollu vana sıcak suyu peteklere kaçırıyor', action: 'Üç yollu vana tamiri' }
    ],
    userChecks: [
      { title: 'Musluk Ucundaki Perlatörü (Süzgeci) Temizleyin', desc: 'Banyo veya mutfak bataryasının ucundaki küçük filtre kum/kireçle tıkanırsa su akışı yavaşlar; kombi düşük debiyi algılayamaz veya suyu aşırı ısıtıp söner.' },
      { title: 'Sıcak Suya Soğuk Su Karıştırmadan Deneyin', desc: 'Kombi sıcak su derecesini 60°C yapıp duşta soğuk su karıştırmak kombiyi söndürür. Kombi derecesini 42-45°C\'ye ayarlayıp bataryayı sadece sıcak tarafa açarak kullanın.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Aliağa, Foça ve Bergama\'da Kireç Kaynaklı Sıcak Su Dalgalanması',
        text: 'Bölgemizdeki şebeke suyu ısındığında kalsiyum karbonat (kireç) kristalleri oluşturur. Kombinin içinde musluk suyunu ısıtan "Plaka Eşanjör" incecik paslanmaz kanallardan oluşur. Bu kanallar kireçle daraldığında kombi ürettiği ısıyı musluk suyuna aktaramaz; kendi iç suyu 85 dereceye fırlar ve alevi kapatır. Duştaki su buz gibi olur. 15 saniye sonra kombi soğuyup tekrar ateşler. Eşanjör değişimi veya kimyasal temizliği ile bu sorun 30 dakikada tamamen ortadan kalkar.'
      }
    ],
    faqs: [
      { q: 'Sıcak su arızası için ücretsiz telefon desteği alabilir miyim?', a: 'Elbette. 0542 585 06 75 hattımızı arayıp musluğu açtığınızda kombi ekranında hangi simgenin çıktığını söyleyin; arızanın türbin mi, sensör mü yoksa eşanjör mü olduğunu hemen söyleyelim.' }
    ]
  },
  {
    slug: 'kombi-atesleme-yapmiyor-cozumu',
    codeBadge: 'ATEŞLEME REHBERİ #06',
    category: 'Ateşleme ve Gaz Arızaları',
    title: 'Kombi Ateşleme Yapmıyor (E01 / F28 / EA / 501 Hatası): Nedenleri ve Çözümü',
    metaDesc: 'Kombi ateşleme yapmıyor ve kırmızı ışık / alev çarpı işareti mi yanıyor? Gaz vanası, iyonizasyon elektrodu, gaz valfi ve anakart arızası çözümleri.',
    readTime: '5 dk okuma',
    updatedAt: '2026-11-13',
    shortTitle: 'Kombi ateşleme yapmıyor',
    summary: 'Kombinin gaz almaması, çakmak çakıp alev oluşturamaması veya alevi algılayamayıp E01, F28, F04, EA hatasına geçmesinin nedenleri.',
    quickTip: 'Kombi "çıt-çıt-çıt" diye kıvılcım çakıyor, alev 2 saniye yanıyor ama çakmak çakmaya devam edip alevi söndürüyorsa; kombiye gaz geliyordur ancak İyonizasyon Elektrodu alevi göremediği için gazı geri kesiyordur.',
    symptomsTable: [
      { symptom: 'Hiç kıvılcım sesi yok, direkt ateşleme hatası veriyor', cause: 'Gaz vanası kapalı, gaz valfi açmıyor veya anakart ateşleme trafosu arızalı', action: 'Gaz kontrolü, valf ve kart testi' },
      { symptom: 'Alev 3 saniye yanıyor, sonra sönüp E01/F28 veriyor', cause: 'İyonizasyon elektrodu kurum bağlamış veya faz-nötr / topraklama hatası var', action: 'Elektrot temizliği ve voltaj/topraklama ölçümü' },
      { symptom: 'Yoğuşmalı kombide fokurdama sesiyle birlikte ateşleme hatası', cause: 'Yoğuşma sifonu tıkanmış, yanma odası suyla dolmuş', action: 'Yoğuşma sifonu ve gider hattı temizliği' }
    ],
    userChecks: [
      { title: 'Mutfak Ocağınızı Yakarak Gazı Test Edin', desc: 'Apartman girişinde veya sokakta doğalgaz kesintisi ya da sayaç vanasının kapanması söz konusu olabilir.' },
      { title: 'Kombi Yanındaki Gaz Vanasını Kontrol Edin', desc: 'Sarı kol boru ile aynı hizada (paralel) olmalıdır.' },
      { title: 'En Fazla 2 Kez Resetleyin', desc: 'Reset tuşuna 3 saniye basılı tutun. Üst üste 5-10 kez reset atmak elektronik anakartın ateşleme rölesini yakabilir.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Yoğuşmalı Kombilerde Sifon Tıkanıklığı Ateşlemeyi Nasıl Engeller?',
        text: 'Tam yoğuşmalı kombilerde (Baymak Duo Tec, Vaillant ecoTEC, Demirdöküm Nitromix, E.C.A Proteus Premix vb.) yanma sonucu oluşan asidik su, alttaki plastik sifondan gidere akar. Yıllık bakım yapılmazsa yanma odasındaki alüminyum/silisyum tortuları bu sifonu tıkar. Sifon tıkanınca su yanma odasına geri dolar ve ateşleme elektrodunu ıslatarak E01 / F28 / EA hatasına yol açar.'
      }
    ],
    faqs: [
      { q: 'Ateşleme arızası tehlikeli midir?', a: 'Modern kombilerde alev 3-5 saniye içinde oluşmazsa gaz valfi otomatik olarak kilitlenir ve içeriye çiğ gaz salınmaz. Yine de cihazı zorlamadan teknik servis desteği alınmalıdır.' }
    ]
  },
  {
    slug: 'kombi-neden-sesli-calisir',
    codeBadge: 'AKUSTİK TEŞHİS #07',
    category: 'Mekanik ve Ses Arızaları',
    title: 'Kombi Neden Ses Yapar? Uğultu, Islık, Fokurdama ve Vuruntu Seslerinin Anlamı',
    metaDesc: 'Kombiden uçak kalkar gibi uğultu, kaynama, fokurdama veya takırtı sesi mi geliyor? Fan motoru, sirkülasyon pompası ve eşanjör seslerinin teşhisi.',
    readTime: '4 dk okuma',
    updatedAt: '2026-11-08',
    shortTitle: 'Kombi gürültülü çalışıyor',
    summary: 'Kombiden gelen sesin türüne göre (uğultu, sürtünme, fokurdama, patlamalı yanma) hangi parçanın arızalanmak üzere olduğunu gösteren rehber.',
    quickTip: 'Sesin kaynağını bulmak çok kolaydır: Ses kombiye ilk çalışma komutu verdiğiniz anda başlıyorsa FAN MOTORU veya POMPA kaynaklıdır; alev yandıktan 10-15 saniye sonra çaydanlık kaynar gibi başlıyorsa EŞANJÖR KİREÇLENMESİ veya FİLTRE TIKANIKLIĞI kaynaklıdır.',
    symptomsTable: [
      { symptom: 'Metal sürtünmesi veya vınlama / uğultu sesi', cause: 'Atık gaz fan motoru rulmanları dağılmış veya balans yapmış', action: 'Fan motoru temizliği ve rulman revizyonu' },
      { symptom: 'Çaydanlık kaynaması / fokurdama ve çatlama sesi', cause: 'Ana eşanjör kireçlenmiş veya dönüş filtresi tıkandığı için su kombi içinde kaynıyor', action: 'Filtre ve eşanjör temizliği' },
      { symptom: 'Sıcak su açılıp kapanırken "tak" diye vuruntu sesi', cause: 'Üç yollu vana mili sıkışıyor', action: 'Üç yollu vana iç takım bakımı' },
      { symptom: 'Alev alırken "güm" diye patlamalı yanma sesi', cause: 'Ateşleme elektrodu ayarı bozulmuş veya minimum gaz basıncı yüksek', action: 'Elektrot mesafesi ve gaz valfi kalibrasyonu' }
    ],
    userChecks: [
      { title: 'Ön Kapak Sacını Hafifçe Bastırın', desc: 'El ile ön kapağa bastırdığınızda ses kesiliyorsa sorun mekanik arıza değil, kapağın vida/conta gevşemesinden kaynaklanan sac titreşimidir.' },
      { title: 'Patlamalı Yanma Varsa Cihazı Kapatın', desc: 'Kombi ateşlerken küçük bir patlama sesi çıkarıyorsa gaz birikip geç ateşleniyor demektir; gecikmeden servis çağırın.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Fan Motoru ve Pompa Sesleri Neden İhmal Edilmemeli?',
        text: 'Fan motoru veya devirdaim pompası ilk başta hafif bir uğultu ile sinyal verir. Bu aşamada yakalandığında sadece temizlik ve rulman bakımıyla kurtarılabilir. Ancak ses yaptığı halde aylarca çalıştırılmaya devam edilirse sargıları yanar ve anakart üzerindeki sürücü triyak/rölesini de yakarak masrafı katlar.'
      }
    ],
    faqs: [
      { q: 'WhatsApp\'tan kombinin ses videosunu göndersem teşhis koyabilir misiniz?', a: 'Evet! 0542 585 06 75 WhatsApp hattımıza kombinin çıkardığı sesin 10 saniyelik videosunu gönderirseniz ustamız ücretsiz olarak hangi parçadan geldiğini size hemen söyler.' }
    ]
  },
  {
    slug: 'kombi-surekli-reset-istiyor',
    codeBadge: 'ELEKTRONİK REHBER #08',
    category: 'Ateşleme ve Gaz Arızaları',
    title: 'Kombi Neden Sürekli Reset İster? Günde Birkaç Kez Arızaya Geçme Sebepleri',
    metaDesc: 'Kombiniz her sabah veya duş sırasında arızaya geçip sürekli reset mi istiyor? Resetlemenin zararları ve tekrarlayan arızaların kök neden analizi.',
    readTime: '4 dk okuma',
    updatedAt: '2026-11-07',
    shortTitle: 'Sürekli reset istiyor',
    summary: 'Kombinin gün içinde tekrar tekrar arıza koduna düşmesinin arkasındaki sensör, voltaj, baca ve elektronik kart problemleri.',
    quickTip: 'Reset tuşu arızayı tamir etmez; sadece elektronik kartın güvenlik kilidini sıfırlar. Aynı hata kodu 24 saat içinde ikinci kez ekrana geliyorsa içeride sınır değerde çalışan bir parça (sensör, elektrot, prosestat veya röle) vardır.',
    symptomsTable: [
      { symptom: 'Özellikle rüzgarlı havalarda reset istiyor', cause: 'Baca ek yeri gevşek veya hava prosestatı yorulmuş', action: 'Baca contası ve prosestat değişimi' },
      { symptom: 'Banyoda sıcak su uzun süre açık kalınca reset istiyor', cause: 'Aşırı ısınma (limit termostat) veya plaka eşanjör tıkanıklığı', action: 'Eşanjör ve NTC sensör bakımı' },
      { symptom: 'Sabah ilk çalışmada ateşleme hatası verip resetle düzeliyor', cause: 'Gaz valfi ilk açılışta takılıyor veya iyonizasyon zayıf', action: 'Gaz valfi ve elektrot kalibrasyonu' }
    ],
    userChecks: [
      { title: 'Resetlemeden Önce Ekrandaki Kodu Not Alın', desc: 'Reset bastığınız anda ekrandaki hata kodu silinir. Ustamızın doğru teşhis koyabilmesi için resetlemeden önce ekrandaki harf/rakamı (örn: F28, E03, 501) bir kenara yazın veya fotoğrafını çekin.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Sürekli Reset Atmak Anakartı Neden Bozar?',
        text: 'Her reset işleminde anakart üzerindeki ateşleme trafosu, fan rölesi ve pompa rölesi yüksek başlangıç akımı (demeraj) çeker. Arızalı veya sıkışmış bir parçayı sürekli resetleyerek zorlamak anakart yollarının yanmasına sebep olur.'
      }
    ],
    faqs: [
      { q: 'Ekrandaki kodu fotoğraf çekip size atabilir miyim?', a: 'Tabii ki. 0542 585 06 75 numaralı WhatsApp hattımıza ekran görüntüsünü gönderdiğinizde kodun ne anlama geldiğini ücretsiz açıklıyoruz.' }
    ]
  },
  {
    slug: 'kombi-su-akmasi-ve-kacak-nedenleri',
    codeBadge: 'SIZDIRMAZLIK #09',
    category: 'Basınç ve Su Sorunları',
    title: 'Kombi Altından Neden Su Akıtır? Su Damlatma Nedenleri ve Acil Önlemler',
    metaDesc: 'Kombinin altından su mu damlıyor? Emniyet ventili, doldurma musluğu, hidroblok, genleşme tankı ve yoğuşma gideri su kaçakları için çözümler.',
    readTime: '4 dk okuma',
    updatedAt: '2026-11-06',
    shortTitle: 'Kombi altından su akıtıyor',
    summary: 'Kombi gövdesinin altından gelen su sızıntılarının kaynağını tespit etme ve elektronik kartı sudan koruma adımları.',
    quickTip: 'Kombi altından su damladığını gördüğünüzde ilk bakacağınız yer basınç (bar) göstergesidir. Gösterge 3 barda ise suyu akıtan parça "Emniyet Ventili"dir. Gösterge 1.5 barda olmasına rağmen su damlıyorsa içerideki O-ring contalardan, otomatik hava purjöründen veya yoğuşma kabından sızıntı vardır.',
    symptomsTable: [
      { symptom: 'Basınç 3 barda ve alttan su damlıyor', cause: 'Emniyet ventili fazla basıncı tahliye ediyor', action: 'Genleşme tankı bakımı ve ventil değişimi' },
      { symptom: 'Basınç normal (1.5 bar) ama kombi çalışınca damlatıyor', cause: 'Üç yollu vana salmastrası, otomatik purjör veya yoğuşma hortumu kaçağı', action: 'Conta/purjör değişimi' }
    ],
    userChecks: [
      { title: 'Kombi Şalterini ve Su Giriş Vanasını Kapatın', desc: 'Suyun elektronik anakart üzerine sızma ihtimaline karşı kombiyi şalterinden kapatıp soğuk su giriş vanasını kısın.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Otomatik Hava Purjörü ve Hidroblok Sızıntıları',
        text: 'Kombi içindeki sirkülasyon pompasının hemen üzerinde tesisatın havasını atan otomatik purjör bulunur. Kireçlenme nedeniyle purjörün şamandırası takılı kalırsa buradan sızan su pompa kablolarının üzerinden akarak kombi altından damlar. Erken müdahale edildiğinde çok küçük bir conta/purjör değişimiyle pompa ve kart yanmadan sorun çözülür.'
      }
    ],
    faqs: [
      { q: 'Yoğuşmalı kombinin altındaki beyaz borudan su akması normal mi?', a: 'Yoğuşmalı kombilerde beyaz plastik gider borusundan su akması tamamen normaldir (kombi saatte 1-1.5 litre yoğuşma suyu üretir). Ancak bu boru giderden çıkmışsa veya kombi kasasının kendi içinden su damlıyorsa arıza vardır.' }
    ]
  },
  {
    slug: 'kombiye-su-nasil-basilir',
    codeBadge: 'KULLANICI REHBERİ #10',
    category: 'Basınç ve Su Sorunları',
    title: 'Kombiye Su Nasıl Basılır? Marka Marka Doldurma Musluğu Kullanımı (1.5 Bar)',
    metaDesc: 'Kombi su basıncı düştüğünde su nasıl basılır? Baymak, Vaillant, Demirdöküm, E.C.A, Bosch ve Buderus kombilerde doldurma musluğu yeri ve yönü.',
    readTime: '3 dk okuma',
    updatedAt: '2026-11-05',
    shortTitle: 'Kombiye su basma rehberi',
    summary: 'Basıncı 1 barın altına düşen kombiye güvenli şekilde su tamamlama adımları ve dikkat edilmesi gerekenler.',
    quickTip: 'Su basma işlemi mutlaka kombi SOĞUKKEN yapılmalıdır. Kombi altındaki mavi, siyah veya gri kelebek/çubuk vanayı saat yönünün tersine (sola) çevirin; su sesi duyacaksınız. Gösterge 1.5 bara geldiğinde vanayı sağa çevirerek sıkıca kapatın.',
    symptomsTable: [
      { symptom: 'Doldurma musluğunu çeviriyorum ama su sesi gelmiyor', cause: 'Musluk başlığı boşa dönüyor (sıyrılmış) veya daire su vanası kapalı', action: 'Doldurma musluğu değişimi' },
      { symptom: 'Yanlışlıkla 2.5 - 3 bara kadar su bastım', cause: 'Musluk geç kapatıldı', action: 'En yakın peteğin hava alma vidasından 1-2 bardak su boşaltın' }
    ],
    userChecks: [
      { title: '1. Adım: Kombinin Altına Eğilip Doldurma Musluğunu Bulun', desc: 'Üzerinde genellikle "Filling" yazar. Mavi, siyah veya metal kelebek başlıklıdır.' },
      { title: '2. Adım: Sola (Saat Yönü Tersine) Çevirin', desc: 'Bazı modellerde (örn: Demirdöküm Nitromix, E.C.A) vanayı önce aşağı doğru çekip sonra sola çevirmeniz gerekir.' },
      { title: '3. Adım: 1.5 Barda Kapatın', desc: 'Gözünüz bar saatinde (veya dijital ekranda) olsun. 1.4 - 1.5 bar seviyesinde vanayı sağa çevirerek kapatın.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Doldurma Musluğu Neden Kırılır veya Boşa Döner?',
        text: 'Doldurma musluklarının başlıkları plastiktir, iç gövdesi ise pirinçtir. Kullanıcılar su kaçırmasın diye vanayı penseyle veya aşırı güçle sıktığında plastik başlığın dişleri sıyrılır ve bir sonraki su basmada musluk boşa döner. Araçlarımızda tüm kombi markalarının orijinal doldurma muslukları mevcuttur.'
      }
    ],
    faqs: [
      { q: 'Kombi altındaki hangi vananın su basma vanası olduğunu bulamadım, ne yapmalıyım?', a: 'Hiçbir vanayı zorlamayın! Kombi altının fotoğrafını çekip 0542 585 06 75 WhatsApp hattımıza gönderin; ustamız fotoğraf üzerinde hangi vanayı çevireceğinizi işaretleyip ücretsiz göndersin.' }
    ]
  },
  {
    slug: 'baymak-kombi-ariza-kodlari-ve-cozumleri',
    codeBadge: 'MARKA KOD REHBERİ',
    category: 'Marka Hata Kodları',
    brandRef: 'baymak',
    title: 'Baymak Kombi Arıza Kodları ve Çözümleri (E01, E03, E05, E10, E25, E35)',
    metaDesc: 'Baymak Duo Tec, Lambert, Dolcevita, Eco ve Luna kombi arıza kodları tam listesi. E01 ateşleme, E03 baca, E10 su basıncı hatalarında ne yapılmalı?',
    readTime: '6 dk okuma',
    updatedAt: '2026-11-14',
    shortTitle: 'Baymak arıza kodları',
    summary: 'Baymak, Lambert, Dolcevita ve Baxi kombilerde ekranda beliren E serisi hata kodlarının anlamları, kullanıcı kontrolleri ve teknik çözümleri.',
    quickTip: 'Baymak kombilerde E10 kodu su basıncının düştüğünü (evde su basarak çözebilirsiniz), E01 kodu ise ateşleme yapılamadığını gösterir. E01 hatasında gaz vanalarını kontrol edip R tuşuna 3 saniye basın.',
    symptomsTable: [
      { symptom: 'E01 Hata Kodu', cause: 'Başarısız ateşleme / Gaz yokluğu / İyonizasyon hatası', action: 'Gaz vanasını kontrol edip R tuşuyla resetleyin' },
      { symptom: 'E02 Hata Kodu', cause: 'Emniyet termostatı (Aşırı ısınma 95°C)', action: 'Petek vanalarını açın, pompa ve filtreyi kontrol ettirin' },
      { symptom: 'E03 Hata Kodu', cause: 'Atık gaz baca çekiş / Fan / Prosestat arızası', action: 'Baca çıkışını kontrol edin, fan/prosestat bakımı yaptırın' },
      { symptom: 'E05 / E06 Hata Kodu', cause: 'Kalorifer veya sıcak su NTC sensör arızası', action: 'Sensör değişimi için servis çağırın' },
      { symptom: 'E10 Hata Kodu', cause: 'Düşük su basıncı (< 0.8 bar)', action: 'Doldurma musluğuyla 1.5 bar su basın' },
      { symptom: 'E25 / E26 Hata Kodu', cause: 'Pompa sıkışması veya sirkülasyon yetersizliği', action: 'Pompa mili ve dönüş filtresi temizlenmeli' }
    ],
    userChecks: [
      { title: 'E10 Kodunda Su Tamamlama', desc: 'Kombi altındaki mavi doldurma vanasını sola çevirip basıncı 1.5 bara getirin; hata otomatik silinecektir.' },
      { title: 'E01 Kodunda Gaz ve Reset Kontrolü', desc: 'Ocağınızda gaz olduğundan emin olduktan sonra kombi üzerindeki R tuşuna 3 saniye basılı tutun.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Baymak Duo Tec ve Eco Serilerinde Kronik Arızaların Önlenmesi',
        text: 'Aliağa ve çevresinde çok yaygın olan Baymak Duo Tec Premix kombilerde yanma odası ve sifon bakımı yılda bir kez yapıldığında cihaz yıllarca sorunsuz çalışır. Bakımsız kalan cihazlarda ise yoğuşma gideri tıkanarak E01 ve E35 hatalarına sebep olur.'
      }
    ],
    faqs: [
      { q: 'Baymak kombim E03 veriyor, rüzgardan olabilir mi?', a: 'Evet, şiddetli rüzgar bacadan içeri ters basınç yapabilir veya prosestat hortumunda nem birikmiş olabilir. Düzelmezse 0542 585 06 75 hattımızdan destek alabilirsiniz.' }
    ]
  },
  {
    slug: 'vaillant-kombi-ariza-kodlari-ve-cozumleri',
    codeBadge: 'MARKA KOD REHBERİ',
    category: 'Marka Hata Kodları',
    brandRef: 'vaillant',
    title: 'Vaillant Kombi Arıza Kodları ve Çözümleri (F22, F28, F29, F75, F62)',
    metaDesc: 'Vaillant ecoTEC ve turboTEC kombi hata kodları rehberi. F.22 su basıncı, F.28 ateşleme, F.75 basınç sensörü ve F.29 alev sönmesi çözümleri.',
    readTime: '6 dk okuma',
    updatedAt: '2026-11-14',
    shortTitle: 'Vaillant arıza kodları',
    summary: 'Vaillant kombilerde F ile başlayan tüm hata kodlarının detaylı açıklaması, evde yapılabilecek işlemler ve servis çözümleri.',
    quickTip: 'Vaillant kombilerde en sık görülen F.22 ve F.75 kodları su basıncı ve pompa sirkülasyonu ile ilgilidir. Önce kombi altındaki kelebek vanadan su basıncını 1.5 bara tamamlayın; F.28 kodunda ise gaz vanasını kontrol edip alev/çarpı tuşuna basın.',
    symptomsTable: [
      { symptom: 'F.22 Kodu', cause: 'Kuru yanma / Düşük su basıncı (0.5 bar altı)', action: '1.5 bara kadar su basın' },
      { symptom: 'F.28 Kodu', cause: 'Ateşleme sırasında alev oluşmadı', action: 'Gazı kontrol edip resetleyin; gaz valfi veya elektrot bakımı' },
      { symptom: 'F.29 Kodu', cause: 'Çalışırken alev söndü (Baca geri tepmesi veya gaz kesintisi)', action: 'Baca iç boru contası ve gaz basıncı kontrolü' },
      { symptom: 'F.75 Kodu', cause: 'Pompa kalkışında basınç farkı algılanamadı', action: 'Su basınç sensörü, filtre ve genleşme tankı kontrolü' },
      { symptom: 'F.61 / F.62 Kodu', cause: 'Gaz valfi kumanda / elektronik anakart arızası', action: 'Anakart ve gaz armatürü onarımı' }
    ],
    userChecks: [
      { title: 'Vaillant Ekranında Bar Değerini Görme', desc: 'Cihaz üzerindeki (-) eksi tuşuna bir kez bastığınızda ekranda güncel su basıncını (örn: 1.4 bar) görebilirsiniz.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Vaillant F.75 Hatasında Neden Yanlış Parça Değiştiriliyor?',
        text: 'Pek çok kullanıcıda F.75 hatası görüldüğünde doğrudan pompa değiştirilmek istenir. Oysa sahada yaptığımız ölçümlerde F.75 hatalarının büyük çoğunluğu su basınç sensörünün kireçlenmesinden, dönüş filtresinin tıkanmasından veya genleşme tankı havasının bitmesinden kaynaklanır. Ölçüm yaparak sadece gerçek arızalı noktaya müdahale ediyoruz.'
      }
    ],
    faqs: [
      { q: 'Vaillant F28 hatası resetleyince geçiyor ama ertesi gün tekrarlıyor, neden?', a: 'Gaz armatürü (step motorlu gaz valfi) ilk açılışta sıkışıyor veya iyonizasyon elektrodu ömrünü tamamlamış olabilir. 0542 585 06 75 üzerinden bize ulaşabilirsiniz.' }
    ]
  },
  {
    slug: 'demirdokum-kombi-ariza-kodlari-ve-cozumleri',
    codeBadge: 'MARKA KOD REHBERİ',
    category: 'Marka Hata Kodları',
    brandRef: 'demirdokum',
    title: 'Demirdöküm Kombi Arıza Kodları (Nitromix, Atromix, Atron, Nepto, Aden)',
    metaDesc: 'Demirdöküm kombi F01, F02, F04, F05, F10, F11, F22, F28 ve F75 arıza kodları ve çözümleri. Evde yapılacak kontroller ve teknik servis desteği.',
    readTime: '6 dk okuma',
    updatedAt: '2026-11-14',
    shortTitle: 'Demirdöküm arıza kodları',
    summary: 'Demirdöküm Nitromix, Atromix, Ademix, Atron ve Nepto modellerinde F serisi hata kodlarının anlamları ve çözüm adımları.',
    quickTip: 'Demirdöküm Atron ve Nepto modellerinde F10 su basıncının düştüğünü, F04 ateşleme yapamadığını, F05 ise baca/prosestat sorununu bildirir. Nitromix ve Atromix yoğuşmalı modellerde ise su basıncı F22, ateşleme F28 olarak görünür.',
    symptomsTable: [
      { symptom: 'F04 / F28 Kodu', cause: 'Ateşleme hatası (Alev algılanmadı)', action: 'Gaz vanasını kontrol edip resetleyin' },
      { symptom: 'F10 / F22 Kodu', cause: 'Tesisat su basıncı düşük (< 0.8 bar)', action: 'Doldurma musluğundan 1.5 bar su basın' },
      { symptom: 'F05 / F33 Kodu', cause: 'Hava akış / Prosestat / Fan hatası', action: 'Baca ve fan motoru kontrolü' },
      { symptom: 'F11 Kodu', cause: 'Gidiş-dönüş su sirkülasyon hatası', action: 'Filtre temizliği ve pompa kontrolü' },
      { symptom: 'F01 / F20 Kodu', cause: 'Aşırı ısınma limit termostat uyarısı', action: 'Petek vanalarını açın, pompa ve üç yollu vanayı kontrol ettirin' }
    ],
    userChecks: [
      { title: 'F10 veya F22 Uyarısında Su Basma', desc: 'Kombi altındaki mavi veya siyah doldurma musluğuyla basıncı 1.5 bara getirin.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Demirdöküm Atron ve Nepto Modellerinde F05 ve F11 Çözümü',
        text: 'Atron ve Nepto modellerinde F11 hatası kombinin ürettiği sıcak suyu peteklere gönderemediğini anlatır. Çoğunlukla kalorifer dönüş filtresi tıkanıklığı veya pompa kapasitör zayıflamasıyla ilgilidir ve yerinde 30 dakikada giderilir.'
      }
    ],
    faqs: [
      { q: 'Demirdöküm kombim sıcak suyu açtığımda F02 veriyor, sebebi nedir?', a: 'F02 kullanım sıcak suyu NTC sensörünün arızalandığını gösterir. Sensör değişimiyle kısa sürede çözülür.' }
    ]
  },
  {
    slug: 'eca-kombi-ariza-kodlari-ve-cozumleri',
    codeBadge: 'MARKA KOD REHBERİ',
    category: 'Marka Hata Kodları',
    brandRef: 'eca',
    title: 'E.C.A Kombi Arıza Kodları ve Çözümleri (Proteus Premix, Citius, Calora, Confeo)',
    metaDesc: 'E.C.A kombi E01, E02, E03, F37, F40, T1 ve T3 arıza kodları ne anlama gelir? Evde resetleme, su basıncı ayarı ve garantili E.C.A teknik servisi.',
    readTime: '5 dk okuma',
    updatedAt: '2026-11-14',
    shortTitle: 'E.C.A arıza kodları',
    summary: 'E.C.A Proteus Premix, Citius, Calora ve Confeo serisi kombilerde görülen E ve F serisi hata kodlarının çözüm rehberi.',
    quickTip: 'E.C.A kombilerde F37 (veya E40) su basıncının düştüğünü, F40 ise basıncın aşırı yükseldiğini gösterir. E01 / F04 ateşleme başarısızlığıdır.',
    symptomsTable: [
      { symptom: 'E01 / F04 Kodu', cause: 'Ateşleme başarısız (Alev yok)', action: 'Gaz vanasını kontrol edip R tuşuna basın' },
      { symptom: 'F37 / E40 Kodu', cause: 'Düşük su basıncı hatası', action: 'Su basıncını 1.5 bara tamamlayın' },
      { symptom: 'F40 Kodu', cause: 'Yüksek su basıncı (2.8 bar üstü)', action: 'Petek hava alma vidasından biraz su boşaltın' },
      { symptom: 'E03 / F05 Kodu', cause: 'Baca / Fan / Prosestat hatası', action: 'Fan ve baca kontrolü' },
      { symptom: 'E02 / F01 Kodu', cause: 'Aşırı ısınma emniyet termostatı', action: 'Sirkülasyon ve pompa kontrolü' }
    ],
    userChecks: [
      { title: 'F37 Hatasında Su Basma', desc: 'Kombi altındaki mavi vanayı aşağı çekip sola çevirerek 1.5 bar su basın, ardından vanayı kapatıp yukarı itin.' }
    ],
    technicalDeepDive: [
      {
        heading: 'E.C.A Proteus Premix Bakımında Dikkat Edilen Noktalar',
        text: 'E.C.A Premix kombilerde paslanmaz çelik sarmal eşanjör ve sifon temizliği yılda bir kez yapıldığında yanma verimi ilk günkü seviyesini korur.'
      }
    ],
    faqs: [
      { q: 'E.C.A kombide AP kodu yazıyor, arıza mıdır?', a: 'Hayır, AP (Air Purge) kombiye elektrik ilk verildiğinde yaklaşık 2-3 dakika süren otomatik hava atma modudur. Beklediğinizde kendiliğinden normal ekrana döner.' }
    ]
  },
  {
    slug: 'bosch-buderus-kombi-ariza-kodlari-ve-cozumleri',
    codeBadge: 'MARKA KOD REHBERİ',
    category: 'Marka Hata Kodları',
    brandRef: 'bosch',
    title: 'Bosch ve Buderus Kombi Arıza Kodları (EA, CE, C6, E9, 6A, 4C, H07)',
    metaDesc: 'Bosch Condens ve Buderus Logamax kombi hata kodları rehberi. EA / 6A ateşleme, CE / H07 düşük basınç, C6 / 3A fan arızaları ve çözümleri.',
    readTime: '6 dk okuma',
    updatedAt: '2026-11-14',
    shortTitle: 'Bosch & Buderus arıza kodları',
    summary: 'Bosch Termoteknik bünyesindeki Bosch ve Buderus kombilerde görülen harf-rakam hata kodlarının anlamları ve teknik çözümleri.',
    quickTip: 'Bosch kombide "EA", Buderus kombide ise "6A" kodu aynı arızayı (Alev algılanmadı / Ateşleme hatası) ifade eder. "CE" veya "H07" ise tesisat su basıncının düştüğünü bildirir.',
    symptomsTable: [
      { symptom: 'EA (Bosch) / 6A (Buderus)', cause: 'Alev algılanmadı (Gaz, elektrot veya sifon tıkanıklığı)', action: 'Gazı kontrol edip resetleyin; sifon ve elektrot bakımı' },
      { symptom: 'CE (Bosch) / H07 (Buderus)', cause: 'Tesisat su basıncı düşük', action: '1.5 bara kadar su basın' },
      { symptom: 'C6 (Bosch) / 3A-3C (Buderus)', cause: 'Fan motoru / Hava akış hatası', action: 'Fan ve prosestat onarımı' },
      { symptom: 'E9 (Bosch) / 4C (Buderus)', cause: 'Aşırı ısınma emniyet termostatı attı', action: 'Pompa, filtre ve üç yollu vana kontrolü' }
    ],
    userChecks: [
      { title: 'Reset İşlemi', desc: 'Bosch Condens 2200i/2500 modellerinde ünlem/ok tuşuna, Buderus modellerinde ise OK veya Reset tuşuna 3 saniye basılı tutarak resetleme yapabilirsiniz.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Alüminyum-Silisyum Eşanjör ve Sifon Bakımı',
        text: 'Bosch ve Buderus yoğuşmalı kombilerde eşanjör yüzeyinde oluşan beyaz oksit tortuları sifonu tıkadığında cihaz EA / 6A ateşleme hatasına geçer. Özel fırça ve solüsyonla yapılan yıllık bakım bu arızayı tamamen önler.'
      }
    ],
    faqs: [
      { q: 'Buderus kombim H07 uyarısı veriyor ama çalışmaya devam ediyor, ne yapmalıyım?', a: 'H07 su basıncının azaldığını gösteren ön uyarıdır. Kombi altındaki doldurma vanasından basıncı 1.5 bara tamamladığınızda H07 uyarısı kaybolur.' }
    ]
  },
  {
    slug: 'viessmann-ariston-protherm-ariza-kodlari',
    codeBadge: 'MARKA KOD REHBERİ',
    category: 'Marka Hata Kodları',
    brandRef: 'viessmann',
    title: 'Viessmann, Ariston, Protherm ve Ferroli Kombi Arıza Kodları ve Çözümleri',
    metaDesc: 'Viessmann (F2, F4, F5), Ariston (501, 108, 104), Protherm (F22, F28) ve Ferroli (A01, F37) kombi hata kodları ve uzman çözüm rehberi.',
    readTime: '6 dk okuma',
    updatedAt: '2026-11-14',
    shortTitle: 'Viessmann, Ariston & Protherm kodları',
    summary: 'Viessmann, Ariston, Protherm, Ferroli, Immergas, Airfel ve Daikin kombilerde en sık karşılaşılan hata kodları ve müdahale tablosu.',
    quickTip: 'Ariston kombilerde 501, Viessmann\'da F4, Protherm\'de F28 ve Ferroli\'de A01 kodu "Ateşleme Başarısızlığı" anlamına gelir. Su basıncı düşüklüğü ise Ariston\'da 108, Protherm\'de F22, Ferroli\'de F37 olarak gösterilir.',
    symptomsTable: [
      { symptom: 'Viessmann F4 / Ariston 501 / Protherm F28 / Ferroli A01', cause: 'Ateşleme ve alev algılama hatası', action: 'Gaz vanasını kontrol edip resetleyin' },
      { symptom: 'Ariston 108 / Protherm F22 / Ferroli F37 / Immergas 10', cause: 'Düşük su basıncı uyarısı', action: 'Kombiye 1.5 bar su basın' },
      { symptom: 'Viessmann F2 / Ariston 101-104 / Ferroli A03', cause: 'Aşırı ısınma ve sirkülasyon yetersizliği', action: 'Filtre temizliği ve pompa kontrolü' },
      { symptom: 'Viessmann F5 / Ariston 6P1 / Immergas 11', cause: 'Baca çekiş, fan veya prosestat hatası', action: 'Fan motoru ve baca kontrolü' }
    ],
    userChecks: [
      { title: 'Markanıza Göre Su Basıncını ve Gazı Kontrol Edin', desc: 'Tüm kombi markalarında arızaların %40\'ı su basıncının 1 barın altına düşmesinden veya gaz vanasının kapalı olmasından kaynaklanır.' }
    ],
    technicalDeepDive: [
      {
        heading: 'Farklı Markalarda Ortak Çalışma Prensibi',
        text: 'Her markanın ekranda gösterdiği harf ve rakam farklı olsa da kombi içindeki güvenlik zinciri aynıdır: Su basıncı -> Fan çalışması -> Prosestat onayı -> Kıvılcım ve Gaz açılması -> İyonizasyon alev onayı -> Sirkülasyon. Servis ekibimiz tüm bu markaların orijinal test değerlerine ve yedek parçalarına hakimdir.'
      }
    ],
    faqs: [
      { q: 'Listede olmayan bir hata kodu görüyorsam ne yapmalıyım?', a: '0542 585 06 75 numaramızı arayın veya WhatsApp\'tan yazın; kombinizin markasını ve kodu söylediğinizde ücretsiz olarak anlamını ve çözümünü hemen paylaşalım.' }
    ]
  }
];

module.exports = { FAULTS };
