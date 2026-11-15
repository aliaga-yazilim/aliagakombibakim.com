/**
 * Aliağa Kombi Bakım - Ana Build Scripti (Tüm Sayfalar + Sitemap + Robots + Manifest)
 */

const fs = require('fs');
const path = require('path');
const { SITE, DISTRICTS } = require('./data/site');
const { BRANDS } = require('./data/brands');
const { FAULTS } = require('./data/faults');
const {
  esc,
  writePage,
  ICONS,
  renderRegionalMapSvg,
  renderBoilerSchematicSvg,
  renderLayout,
  renderSidebarSupportCard
} = require('./build-helpers');

const ROOT_DIR = __dirname;
const generatedUrls = [];

function registerAndWrite(urlPath, htmlContent, priority = '0.8', changefreq = 'weekly') {
  writePage(urlPath, htmlContent);
  generatedUrls.push({ urlPath, priority, changefreq });
}

/* Schema Yardımcıları */
function createBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${SITE.domain}${it.url}`
    }))
  };
}

function createFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };
}

/* ==========================================================================
   1. ANA SAYFA (/)
   ========================================================================== */
function buildHomePage() {
  const homeFaqs = [
    {
      q: 'Kombi arızası için aradığımda telefonda ücretsiz bilgi alabilir miyim?',
      a: 'Evet! 0542 585 06 75 numaralı hattımızı aradığınızda çağrı merkeziyle değil, doğrudan sahadaki kombi ustamızla görüşürsünüz. Ekrandaki hata kodunu veya belirtiyi söylediğinizde evde kendinizin çözebileceği bir durumsa (su basıncı düşmesi, gaz vanası, yaz/kış modu vb.) telefonda ücretsiz tarif ederek gereksiz servis ücreti ödemenizi önlüyoruz.'
    },
    {
      q: 'Aliağa dışında hangi ilçelere kombi bakım ve tamir servisiniz var?',
      a: 'Aliağa merkezli gezici servis araçlarımızla her gün Foça, Yeni Foça, Yeni Şakran, Bergama, Dikili, Çandarlı, Menemen (Ulukent, Koyundere, Asarlık, Seyrek), Kemalpaşa ve Kınık ilçelerinin tamamına adreste servis hizmeti veriyoruz.'
    },
    {
      q: 'Onarım ücreti ne zaman belirleniyor, sürpriz masraf çıkar mı?',
      a: 'Ustamız adresinize gelip dijital ölçümlerle arızalı parçayı tespit ettikten sonra parçayı size gösterir ve net ücreti söyler. Sizin onayınız alınmadan hiçbir parça değişimi veya ücretli işlem başlatılmaz.'
    },
    {
      q: 'Değiştirilen kombi yedek parçalarının garantisi var mı?',
      a: 'Kullandığımız tüm orijinal yedek parçalar ve gerçekleştirdiğimiz elektronik kart onarımları 1 yıl boyunca resmi servis fişimiz ile garantimiz altındadır.'
    },
    {
      q: 'Yıllık kombi bakımı ve petek temizliği ne kadar sürüyor?',
      a: 'Detaylı kombi bakımı (yanma odası, fan, genleşme tankı bar dolumu, filtre ve gaz ayarı) yaklaşık 40-45 dakika; makineli ilaçsız/koruyuculu petek temizliği ise daire büyüklüğüne göre 60-75 dakika sürmektedir.'
    }
  ];

  const bodyContent = `
  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <div>
        <span class="badge-free"><span class="pulse-dot"></span> ÜCRETSİZ TELEFONDA ARIZA ÖN TEŞHİSİ</span>
        <h1 class="hero-title">Aliağa ve Kuzey İzmir <span>Kombi Bakım</span> &amp; Teknik Servisi</h1>
        <p class="hero-lead">Aliağa başta olmak üzere Foça, Yeni Şakran, Bergama, Dikili, Menemen, Kemalpaşa ve Kınık'ta 18 kombi markasına aynı gün yerinde arıza onarımı, yıllık bakım ve makineli petek temizliği.</p>
        
        <div class="free-advice-banner">
          <div class="free-advice-banner-top">${ICONS.phone} ÇEKİNMEDEN ARAYIN • ÜCRETSİZ DANIŞMA HATTI</div>
          <p>Kombiniz çalışmıyor veya ekranda hata kodu mu var? <strong>Hemen servis çağırmak zorunda değilsiniz!</strong> <strong>${SITE.phoneDisplay}</strong> numaramızı arayın; ustamız telefonda ücretsiz bilgi versin, basit bir ayarsa yerinde çözdürsün.</p>
        </div>
        
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="${SITE.phoneTel}">${ICONS.phone} Ücretsiz Danış: ${SITE.phoneDisplay}</a>
          <a class="btn btn-whatsapp btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp'tan Kod Gönder</a>
          <a class="btn btn-outline btn-lg" href="#ilceler">${ICONS.pin} İlçenizi Seçin</a>
        </div>
        
        <ul class="trust-list">
          <li>${ICONS.shield} Onarım öncesi net fiyat onayı</li>
          <li>${ICONS.wrench} 1 Yıl parça &amp; işçilik garantisi</li>
          <li>${ICONS.check} Tüm kombi markalarına tek numara</li>
        </ul>
      </div>
      
      <div class="hero-visual">
        <div class="schematic-card">
          ${renderBoilerSchematicSvg()}
        </div>
        <a class="live-ticket-badge" href="/aliaga-kombi-bakim-teknik-servisi">
          <span class="live-ticket-head"><span class="pulse-dot"></span> Son Saha Kaydı <b>SRV-35-4812</b></span>
          <span class="live-ticket-title">Vaillant ecoTEC • F.28 Ateşleme ve Sifon Bakımı</span>
          <span class="live-ticket-meta">Aliağa / Yeni Mahalle • Parça değişimsiz çözüldü</span>
        </a>
      </div>
    </div>
  </section>

  <!-- RAKAMLAR -->
  <section class="stats-bar" aria-label="Servis İstatistikleri">
    <div class="container">
      <ul>
        ${SITE.stats.map((s) => `<li><b>${esc(s.value)}</b><span>${esc(s.label)}</span></li>`).join('')}
      </ul>
    </div>
  </section>

  <!-- KAYAN MARKALAR ŞERİDİ -->
  <section class="brand-ticker" aria-label="Hizmet Verdiğimiz Kombi Markaları">
    <div class="brand-ticker-track">
      <ul>
        ${BRANDS.map((b) => `<li><a href="/${b.slug}">${esc(b.name)}</a></li>`).join('')}
      </ul>
      <ul aria-hidden="true">
        ${BRANDS.map((b) => `<li><a href="/${b.slug}" tabindex="-1">${esc(b.name)}</a></li>`).join('')}
      </ul>
    </div>
  </section>

  <!-- ARIZA TEŞHİS KARTLARI -->
  <section class="section">
    <div class="container">
      <div class="section-head section-head-split">
        <div>
          <span class="eyebrow">Hızlı Arıza Rehberi</span>
          <h2>Kombinizde hangi belirti var?</h2>
        </div>
        <p>Yaşadığınız sorunu seçin; servis çağırmadan önce evde güvenle kontrol edebileceğiniz noktaları ve olası teknik nedenleri inceleyin.</p>
      </div>
      
      <div class="fault-grid">
        ${FAULTS.slice(0, 8).map((f, i) => `
          <a class="fault-card" href="/${f.slug}">
            <span class="fault-card-num">0${i + 1}</span>
            <span class="fault-card-icon">${ICONS.flame}</span>
            <b>${esc(f.shortTitle)}</b>
            <p>${esc(f.summary)}</p>
            <span class="fault-card-link">Çözüm adımlarını oku</span>
          </a>
        `).join('')}
      </div>
      
      <div style="text-align:center;margin-top:32px;display:flex;flex-wrap:wrap;justify-content:center;gap:14px">
        <a class="btn btn-outline" href="/kombi-hata-kodlari-ve-cozumleri">Tüm Bilinen Hata Kodları Tablosunu Aç →</a>
        <a class="btn btn-primary" href="${SITE.phoneTel}">${ICONS.phone} Ustaya Ücretsiz Sor: ${SITE.phoneDisplay}</a>
      </div>
    </div>
  </section>

  <!-- KUZEY İZMİR HARİTA VE İLÇELER BÖLÜMÜ -->
  <section class="section section-alt" id="ilceler">
    <div class="container">
      <div class="section-head section-head-split">
        <div>
          <span class="eyebrow">Hizmet Bölgelerimiz</span>
          <h2>Aliağa Merkezli Kuzey İzmir Servis Ağı</h2>
        </div>
        <p>Haritadan veya listeden ilçenizi seçin; o bölgedeki mahalle rotamızı, sık karşılaştığımız tesisat sorunlarını ve marka bazlı servis sayfalarımızı görün.</p>
      </div>
      
      <div class="map-layout">
        <div class="map-card">
          ${renderRegionalMapSvg('aliaga')}
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 8px 4px;flex-wrap:wrap;gap:10px">
            <span style="font-family:var(--font-mono);font-size:11.5px;color:var(--slate)">İnteraktif Harita • İlçenize dokunun</span>
            <a href="${SITE.phoneTel}" style="font-family:var(--font-head);font-weight:800;font-size:16px;text-decoration:none">${ICONS.phone} Acil Servis: ${SITE.phoneDisplay}</a>
          </div>
        </div>
        
        <div class="district-list-cards">
          ${DISTRICTS.map((d) => `
            <a class="district-item-card" href="/${d.slug}">
              <div class="district-item-top">
                <b>${esc(d.name)}</b>
                <small>${esc(d.zone)}</small>
              </div>
              <p>${esc(d.shortDesc)}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- 4 ADIMDA ŞEFFAF SERVİS SÜRECİ -->
  <section class="section section-dark">
    <div class="container">
      <div class="section-head section-head-split">
        <div>
          <span class="eyebrow eyebrow-light">Nasıl Çalışıyoruz?</span>
          <h2>Aradığınız Andan Onarım Sonuna Kadar Şeffaf Süreç</h2>
        </div>
        <p>Tahminle parça değiştiren değil, ölçü aletiyle teşhis koyan mühendislik yaklaşımı. Ücretsiz bilgi alma hakkınız her zaman önceliğimizdir.</p>
      </div>
      
      <ol class="process-steps">
        <li class="process-step">
          <span class="process-step-num">ADIM 01 • ÜCRETSİZ BİLGİ</span>
          <b>Arayın &amp; Danışın</b>
          <p>${SITE.phoneDisplay} hattımızı arayın. Kombinin markasını ve arıza kodunu söyleyin; basit bir işlemse telefonda ücretsiz çözelim.</p>
        </li>
        <li class="process-step">
          <span class="process-step-num">ADIM 02 • YERİNDE ÖLÇÜM</span>
          <b>Adreste Teşhis</b>
          <p>İlçenize en yakın mobil aracımız kapınıza gelir. Gaz basıncı, NTC dirençleri, tank barı ve anakart değerleri ölçülür.</p>
        </li>
        <li class="process-step">
          <span class="process-step-num">ADIM 03 • FİYAT ONAYI</span>
          <b>Net Ücret &amp; Onay</b>
          <p>Arızalı parçayı size gösterir, yapılacak işlemi ve toplam tutarı baştan söyleriz. Onayınız olmadan işe başlamayız.</p>
        </li>
        <li class="process-step">
          <span class="process-step-num">ADIM 04 • GARANTİLİ TESLİM</span>
          <b>Test &amp; 1 Yıl Garanti</b>
          <p>Kombi sıcak su ve kalorifer modunda tam yükte test edilir, 1 yıl garantili servis fişiniz düzenlenerek teslim edilir.</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- TÜRKİYE'DEKİ TÜM KOMBİ MARKALARI BÖLÜMÜ -->
  <section class="section">
    <div class="container">
      <div class="section-head section-head-split">
        <div>
          <span class="eyebrow">Uzmanlık Alanımız</span>
          <h2>Hizmet Verdiğimiz Tüm Kombi Markaları</h2>
        </div>
        <p>Baymak, Vaillant, Demirdöküm, E.C.A, Bosch, Buderus ve Viessmann dahil Türkiye'de kullanılan tüm kombi markalarının orijinal yedek parçaları araçlarımızda mevcuttur.</p>
      </div>
      
      <div class="brands-grid">
        ${BRANDS.map((b) => `
          <a class="brand-card" href="/${b.slug}">
            <div>
              <div class="brand-card-head">
                <b>${esc(b.name)} Kombi Servisi</b>
                <small>${esc(b.origin)}</small>
              </div>
              <p style="margin-top:8px">${esc(b.shortDesc)}</p>
            </div>
            <div class="brand-card-foot">
              <span>Modeller: ${esc(b.popularModels.slice(0, 3).join(', '))}</span>
              <span>İncele →</span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- KAPSAMLI KOMBİ BAKIM VE KULLANIM REHBERİ (SEO İÇERİK) -->
  <section class="section section-warm">
    <div class="container">
      <div class="content-layout" style="padding:0">
        <article class="prose">
          <span class="eyebrow">Kuzey İzmir Kombi Rehberi</span>
          <h2 style="border-top:0;padding-top:0;margin-top:0">Aliağa ve Çevre İlçelerde Kombi Bakımı Neden Hayati Önem Taşır?</h2>
          <p>Aliağa, Foça, Yeni Şakran, Menemen, Bergama, Dikili ve Kınık hattı; hem Ege kıyısının yüksek nemli ve poyrazlı havasını hem de Bakırçay Havzası'nın sert kış ayazlarını bir arada yaşayan özel bir coğrafyadır. Buna bölgedeki şebeke sularının yüksek kireç (kalsiyum karbonat) oranı eklendiğinde, kombilerin yılda bir kez profesyonel bakımdan geçirilmesi hem doğalgaz tasarrufu hem de cihaz güvenliği açısından zorunludur.</p>
          
          <div class="callout-box">
            <b>Ücretsiz Danışmanlık Sözümüz</b>
            Kombinizde bir gariplik hissettiğinizde "Acaba servis çağırsam yüksek ücret çıkar mı?" endişesi yaşamayın. <strong>${SITE.phoneDisplay}</strong> numaramızı arayarak ustamızdan tamamen ücretsiz teknik bilgi alabilirsiniz.
          </div>

          <h2>Gerçek Bir Kombi Bakımında Yapılması Gereken 8 İşlem</h2>
          <p>Sadece kombinin kapağını açıp elektrik süpürgesi tutmak kombi bakımı değildir. Aliağa Kombi Bakım ekibi olarak her periyodik bakımda şu mühendislik adımlarını eksiksiz uyguluyoruz:</p>
          <ol>
            <li><strong>Cihazın Mevcut Performans Testi:</strong> Bakıma başlamadan önce kombinin sıcak su ve kalorifer modundaki ateşleme süresi ile ses seviyesi kontrol edilir.</li>
            <li><strong>Genleşme Tankı Azot/Hava Basıncı Ölçümü:</strong> Kombi içindeki suyu boşaltarak genleşme tankı basıncı dijital manometre ile ölçülür ve 1.0 bar seviyesine tamamlanır.</li>
            <li><strong>Yanma Odası ve Brülör Temizliği:</strong> Yoğuşmalı kombilerde eşanjör yüzeyi özel kimyasal ve fırça ile temizlenir, yanma verimi artırılır.</li>
            <li><strong>Atık Gaz Fan Motoru Yıkaması:</strong> Rüzgarla bacadan giren tozların fan kanatlarında oluşturduğu balans bozukluğu giderilir.</li>
            <li><strong>Ateşleme ve İyonizasyon Elektrotlarının Kalibrasyonu:</strong> E01 / F28 / EA gibi ateşleme hatalarını önlemek için elektrot uçları temizlenir.</li>
            <li><strong>Yoğuşma Sifonu Temizliği:</strong> Tıkanmaya yüz tutmuş sifon sökülerek içindeki tortular boşaltılır.</li>
            <li><strong>Kalorifer Dönüş Filtresi (Pislik Tutucu) Temizliği:</strong> Peteklerden dönen suyun akışını kesen metal süzgeç yıkanır.</li>
            <li><strong>Gaz Valfi Modülasyon ve Sızdırmazlık Testi:</strong> Elektronik gaz dedektörü ile kaçak kontrolü yapılarak bakım fişi teslim edilir.</li>
          </ol>

          <div class="inline-cta">
            <div>
              <b>Kış Gelmeden Kombinizi Güvenceye Alın</b>
              <p>Aliağa ve tüm çevre ilçelerde garantili kombi bakımı ve petek temizliği randevusu için hemen arayın.</p>
            </div>
            <a class="btn btn-primary" href="${SITE.phoneTel}">${ICONS.phone} ${SITE.phoneDisplay}</a>
          </div>
        </article>
        
        <div class="sidebar">
          ${renderSidebarSupportCard('Ustaya Ücretsiz Danışın')}
          <div class="side-box">
            <span class="side-box-title">Popüler Hata Kodları</span>
            <ul>
              <li><a href="/baymak-kombi-ariza-kodlari-ve-cozumleri"><span>Baymak E01, E03, E10 Kodları</span> <span>→</span></a></li>
              <li><a href="/vaillant-kombi-ariza-kodlari-ve-cozumleri"><span>Vaillant F22, F28, F75 Kodları</span> <span>→</span></a></li>
              <li><a href="/demirdokum-kombi-ariza-kodlari-ve-cozumleri"><span>Demirdöküm F04, F05, F10 Kodları</span> <span>→</span></a></li>
              <li><a href="/eca-kombi-ariza-kodlari-ve-cozumleri"><span>E.C.A E01, F37, F40 Kodları</span> <span>→</span></a></li>
              <li><a href="/bosch-buderus-kombi-ariza-kodlari-ve-cozumleri"><span>Bosch EA, CE / Buderus 6A</span> <span>→</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SIKÇA SORULAN SORULAR -->
  <section class="section" id="sss">
    <div class="container faq-layout">
      <div class="section-head" style="margin:0">
        <span class="eyebrow">Merak Edilenler</span>
        <h2>Sıkça Sorulan Sorular</h2>
        <p>Aliağa ve Kuzey İzmir'deki kombi kullanıcılarının en çok sorduğu sorular ve şeffaf yanıtlarımız. Aklınıza takılan her şey için bizi ücretsiz arayabilirsiniz.</p>
        <div style="margin-top:20px">
          <a class="btn btn-primary" href="${SITE.phoneTel}">${ICONS.phone} ${SITE.phoneDisplay}</a>
        </div>
      </div>
      
      <div class="faq-list">
        ${homeFaqs.map((f, idx) => `
          <details${idx === 0 ? ' open' : ''}>
            <summary><span class="faq-num">0${idx + 1}</span> ${esc(f.q)}</summary>
            <div class="faq-answer"><p>${esc(f.a)}</p></div>
          </details>
        `).join('')}
      </div>
    </div>
  </section>
  `;

  const html = renderLayout({
    title: `Aliağa Kombi Bakım ve Teknik Servisi | Ücretsiz Bilgi • ${SITE.phoneDisplay}`,
    description: `Aliağa, Foça, Yeni Şakran, Bergama, Dikili, Menemen, Kemalpaşa ve Kınık kombi bakım & tamir servisi. Tüm markalarda 1 yıl garantili onarım. Ücretsiz danışma: ${SITE.phoneDisplay}.`,
    canonicalPath: '/',
    schemaJson: [createFaqSchema(homeFaqs)],
    bodyContent
  });

  registerAndWrite('/', html, '1.0', 'daily');
}

/* ==========================================================================
   2. İLÇE SAYFALARI (/{ilce}-kombi-bakim-teknik-servisi)
   ========================================================================== */
function buildDistrictPages() {
  DISTRICTS.forEach((d) => {
    const urlPath = `/${d.slug}`;
    const neighborObjs = d.neighbors
      .map((nid) => DISTRICTS.find((x) => x.id === nid))
      .filter(Boolean);

    const breadcrumbs = [
      { name: SITE.brandName, url: '/' },
      { name: 'Servis Bölgeleri', url: '/servis-bolgeleri' },
      { name: `${d.name} Kombi Bakım Teknik Servisi`, url: urlPath }
    ];

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${d.name} Kombi Bakım ve Teknik Servisi`,
      serviceType: 'Kombi Bakımı, Arıza Tamiri ve Petek Temizliği',
      provider: { '@id': `${SITE.domain}/#organization` },
      areaServed: {
        '@type': 'City',
        name: `${d.name}, İzmir`
      },
      description: d.shortDesc
    };

    const bodyContent = `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="Konum">
          <ol class="breadcrumb">
            <li><a href="/">${esc(SITE.brandName)}</a></li>
            <li><a href="/servis-bolgeleri">Servis Bölgeleri</a></li>
            <li><span aria-current="page">${esc(d.name)} Kombi Servisi</span></li>
          </ol>
        </nav>
        
        <div class="page-hero-grid">
          <div>
            <span class="badge-pill">${ICONS.pin} ${esc(d.zone)} • ${esc(d.distance)}</span>
            <h1>${esc(d.name)} Kombi Bakım ve Teknik Servisi</h1>
            <p class="hero-lead" style="margin-bottom:18px">${esc(d.heroIntro)}</p>
            
            <div class="free-advice-banner" style="margin:18px 0">
              <div class="free-advice-banner-top"><span class="pulse-dot"></span> ${esc(d.name.toUpperCase())} ÜCRETSİZ ÖN TEŞHİS HATTI</div>
              <p>${esc(d.name)} bölgesinde kombiniz arızalandıysa hemen <strong>${SITE.phoneDisplay}</strong> numaramızı arayın. Ekrandaki hata kodunu söyleyin; ustamız telefonda ücretsiz bilgi versin, gerekirse en yakın aracımızı yönlendirsin.</p>
            </div>
            
            <div class="hero-actions" style="margin-bottom:18px">
              <a class="btn btn-primary btn-lg" href="${SITE.phoneTel}">${ICONS.phone} Hemen Ara: ${SITE.phoneDisplay}</a>
              <a class="btn btn-whatsapp btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp Konum/Kod At</a>
            </div>
            
            <ul class="page-facts">
              <li>${ICONS.pin} ${d.neighborhoods.length} Mahallede Mobil Ekip</li>
              <li>${ICONS.wrench} 18 Kombi Markasına Garantili Tamir</li>
              <li>${ICONS.shield} 1 Yıl Parça ve İşçilik Garantisi</li>
            </ul>
          </div>
          
          <div class="map-card" style="position:static">
            ${renderRegionalMapSvg(d.id)}
            <a class="btn btn-primary btn-full" style="margin-top:12px" href="${SITE.phoneTel}">
              ${ICONS.phone} ${esc(d.name)} Servis Hattı: ${SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="container content-layout">
      <article class="prose">
        <h2>${esc(d.name)} Bölgesinde Kombi Servisi Nasıl İşliyor?</h2>
        <p>${esc(d.localChallenges)}</p>
        <p>Aradığınızda sizden üç temel bilgi rica ediyoruz: <strong>kombinin markası</strong>, <strong>yaşadığınız sorun / ekrandaki arıza kodu</strong> ve <strong>${esc(d.name)} içindeki mahalleniz</strong>. Eğer sorun kombinin su basıncının düşmesi, gaz vanasının kapalı kalması veya petek havası gibi sizin 2 dakikada çözebileceğiniz bir durumsa ustamız bunu telefonda ücretsiz tarif eder ve hiçbir ücret ödemezsiniz.</p>

        <h2>${esc(d.name)} Konut ve Tesisat Yapısına Göre Çözümlerimiz</h2>
        <ul>
          ${d.housingProfile.map((hp) => `<li><strong>${esc(hp.area)} (${esc(hp.title)}):</strong> ${esc(hp.desc)}</li>`).join('')}
        </ul>

        <div class="inline-cta">
          <div>
            <b>${esc(d.name)} İçin Ücretsiz Bilgi ve Randevu</b>
            <p>Kombinizin sesini veya arıza kodunu ustamıza danışmak için tek tıkla arayın.</p>
          </div>
          <a class="btn btn-primary" href="${SITE.phoneTel}">${ICONS.phone} ${SITE.phoneDisplay}</a>
        </div>

        <h2>${esc(d.name)} İlçesinde Hizmet Verdiğimiz Kombi Markaları</h2>
        <p>${esc(d.name)} genelinde aşağıdaki tüm kombi markaları için özel arıza tespiti, anakart tamiri, yıllık periyodik bakım ve orijinal yedek parça desteğimiz bulunmaktadır. Markanızı seçerek ${esc(d.name)} özel marka servis sayfamıza gidebilirsiniz:</p>
        
        <div class="brands-grid" style="margin:20px 0 32px">
          ${BRANDS.map((b) => `
            <a class="brand-card" href="/${d.id}/${b.slug}">
              <div>
                <b>${esc(d.name)} ${esc(b.name)} Servisi</b>
                <p style="margin-top:6px">${esc(d.name)} bölgesinde ${esc(b.name)} (${esc(b.popularModels.slice(0, 2).join(', '))}) kombi tamiri ve bakımı.</p>
              </div>
              <div class="brand-card-foot">
                <span>${esc(b.name)} Sayfası</span>
                <span>→</span>
              </div>
            </a>
          `).join('')}
        </div>

        <h2>${esc(d.name)} Saha Onarım Kaydımız (Örnek Servis Fişi)</h2>
        <div class="ticket-card" style="margin:20px 0 32px">
          <div class="ticket-head">
            <span>KAYIT NO: <b>${esc(d.sampleTicket.code)}</b></span>
            <span>${esc(d.sampleTicket.date)}</span>
          </div>
          <div class="ticket-body">
            <div class="ticket-tags">
              <span class="brand-badge">${esc(d.sampleTicket.brand)}</span>
              <span class="code-pill">${esc(d.sampleTicket.location)}</span>
            </div>
            <h3 style="margin-top:0">${esc(d.sampleTicket.symptom)}</h3>
            <div class="ticket-row">
              <span>Uygulanan Teknik Çözüm</span>
              <p style="margin:0">${esc(d.sampleTicket.solution)}</p>
            </div>
            <div class="ticket-row">
              <span>İşlem / Parça Durumu</span>
              <p style="margin:0;font-weight:700;color:var(--navy)">${esc(d.sampleTicket.part)}</p>
            </div>
          </div>
        </div>

        <h2>${esc(d.name)} İçinde Adrese Geldiğimiz Mahalleler</h2>
        <p>Listede mahalleniz veya sokağınız yer almasa bile ${esc(d.name)} sınırları içerisindeki tüm merkez ve kırsal mahallelere aynı gün servisimiz vardır:</p>
        <ul class="neighborhood-grid" style="padding:0;list-style:none">
          ${d.neighborhoods.map((m, i) => `<li class="neighborhood-item" style="padding-left:16px"><span>${String(i + 1).padStart(2, '0')}</span> ${esc(m)}</li>`).join('')}
        </ul>
      </article>

      <div class="sidebar">
        ${renderSidebarSupportCard(`${d.name} Kombi Destek Hattı`)}
        
        <div class="side-box">
          <span class="side-box-title">${esc(d.name)} Komşu Servis Bölgeleri</span>
          <ul>
            ${neighborObjs.map((nb) => `<li><a href="/${nb.slug}"><span>${esc(nb.name)} Kombi Servisi</span> <span>→</span></a></li>`).join('')}
            <li><a href="/servis-bolgeleri"><span>Tüm Kuzey İzmir Bölgeleri</span> <span>→</span></a></li>
          </ul>
        </div>

        <div class="side-box">
          <span class="side-box-title">Sık Okunan Arıza Rehberleri</span>
          <ul>
            ${FAULTS.slice(0, 5).map((f) => `<li><a href="/${f.slug}"><span>${esc(f.shortTitle)}</span> <span>→</span></a></li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container faq-layout">
        <div class="section-head" style="margin:0">
          <span class="eyebrow">${esc(d.name)} Sık Sorulanlar</span>
          <h2>${esc(d.name)} Kombi Servisi Hakkında Sorular</h2>
          <p>Ücretsiz bilgi ve randevu için <strong>${SITE.phoneDisplay}</strong> numaramızdan bize her an ulaşabilirsiniz.</p>
        </div>
        <div class="faq-list">
          ${d.faqs.map((f, idx) => `
            <details${idx === 0 ? ' open' : ''}>
              <summary><span class="faq-num">0${idx + 1}</span> ${esc(f.q)}</summary>
              <div class="faq-answer"><p>${esc(f.a)}</p></div>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
    `;

    const html = renderLayout({
      title: `${d.name} Kombi Bakım ve Teknik Servisi | Garantili Tamir • ${SITE.phoneDisplay}`,
      description: `${d.name} kombi servisi: ${d.neighborhoods.slice(0, 4).join(', ')} ve tüm mahallelerde 1 yıl garantili kombi tamiri, bakım ve petek temizliği. Ücretsiz danışma: ${SITE.phoneDisplay}.`,
      canonicalPath: urlPath,
      activeNav: 'bolgeler',
      schemaJson: [createBreadcrumbSchema(breadcrumbs), serviceSchema, createFaqSchema(d.faqs)],
      bodyContent
    });

    registerAndWrite(urlPath, html, '0.9', 'weekly');
  });
}

/* ==========================================================================
   3. GENEL MARKA SAYFALARI (/{marka}-kombi-bakim-teknik-servisi)
      VE İLÇE × MARKA SAYFALARI (/{ilce}/{marka}-kombi-bakim-teknik-servisi)
   ========================================================================== */
function buildBrandAndDistrictBrandPages() {
  // 3A. Genel Marka Sayfaları
  BRANDS.forEach((b) => {
    const urlPath = `/${b.slug}`;
    const breadcrumbs = [
      { name: SITE.brandName, url: '/' },
      { name: 'Kombi Markaları', url: '/kombi-markalari' },
      { name: `${b.name} Kombi Bakım Teknik Servisi`, url: urlPath }
    ];

    const brandFaqs = [
      {
        q: `${b.name} kombim arıza kodu veriyor, telefonda ücretsiz bilgi alabilir miyim?`,
        a: `Evet, ${SITE.phoneDisplay} numaramızı arayıp ${b.name} kombinizin ekranındaki kodu (${b.errorCodes.map((e) => e.code).join(', ')}) söylediğinizde ustamız ücretsiz olarak ne yapmanız gerektiğini anlatır.`
      },
      {
        q: `Aliağa ve çevre ilçelerde ${b.name} yedek parçaları aracınızda mevcut mu?`,
        a: `Evet. ${b.name} (${b.popularModels.join(', ')}) modellerinin sirkülasyon pompası, üç yollu vanası, plaka eşanjörü, NTC sensörleri, fan motoru ve anakart bileşenleri gezici servis araçlarımızda hazır bulunur ve 1 yıl garantili olarak değiştirilir.`
      }
    ];

    const bodyContent = `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="Konum">
          <ol class="breadcrumb">
            <li><a href="/">${esc(SITE.brandName)}</a></li>
            <li><a href="/kombi-markalari">Kombi Markaları</a></li>
            <li><span aria-current="page">${esc(b.name)} Kombi Servisi</span></li>
          </ol>
        </nav>
        
        <div class="page-hero-grid">
          <div>
            <span class="badge-pill">${ICONS.wrench} ${esc(b.origin)} • Özel Teknik Servis</span>
            <h1>Aliağa ${esc(b.name)} Kombi Bakım ve Teknik Servisi</h1>
            <p class="hero-lead">${esc(b.shortDesc)} Aliağa, Foça, Yeni Şakran, Bergama, Dikili, Menemen, Kemalpaşa ve Kınık'ta aynı gün yerinde onarım.</p>
            
            <div class="free-advice-banner">
              <div class="free-advice-banner-top"><span class="pulse-dot"></span> ${esc(b.name.toUpperCase())} ÜCRETSİZ DANIŞMA HATTI</div>
              <p>${esc(b.name)} kombinizde arıza kodu mu belirdi? <strong>${SITE.phoneDisplay}</strong> numaramızı arayın; ustamız kodu ücretsiz analiz etsin, evde çözebileceğiniz bir durumsa hemen tarif etsin.</p>
            </div>
            
            <div class="hero-actions">
              <a class="btn btn-primary btn-lg" href="${SITE.phoneTel}">${ICONS.phone} Ücretsiz Danış: ${SITE.phoneDisplay}</a>
              <a class="btn btn-whatsapp btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp'tan Arıza Sor</a>
            </div>
            
            <ul class="page-facts">
              <li>Modeller: ${esc(b.popularModels.slice(0, 4).join(', '))}</li>
              <li>1 Yıl Garantili Orijinal Parça &amp; Kart Tamiri</li>
            </ul>
          </div>
          
          <div>
            ${renderSidebarSupportCard(`${b.name} Teknik Destek Hattı`)}
          </div>
        </div>
      </div>
    </section>

    <div class="container content-layout">
      <article class="prose">
        <h2>${esc(b.name)} Kombilerde Teknik Uzmanlığımız</h2>
        <p>${esc(b.techNote)}</p>
        <p>Hizmet verdiğimiz başlıca <strong>${esc(b.name)}</strong> kombi serileri: <strong>${esc(b.popularModels.join(', '))}</strong>. Tüm bu modellerde arıza tespitini tahmine dayalı değil, dijital manometre ve multimetre ölçümleriyle gerçekleştiriyoruz.</p>

        <h2>${esc(b.name)} Kombi Bilinen Hata Kodları ve Çözümleri</h2>
        <p>Aşağıdaki tabloda ${esc(b.name)} kombilerde en sık karşılaşılan arıza kodlarını, nedenlerini ve servis çağırmadan önce evde yapabileceğiniz kontrolleri bulabilirsiniz:</p>
        
        <div class="error-table-wrap" style="margin:20px 0 32px">
          <table class="error-table">
            <thead>
              <tr>
                <th>Hata Kodu</th>
                <th>Arıza Tanımı &amp; Nedenleri</th>
                <th>Evde İlk Kontrol</th>
                <th>Teknik Servis Çözümü</th>
              </tr>
            </thead>
            <tbody>
              ${b.errorCodes.map((ec) => `
                <tr>
                  <td><span class="code-pill">${esc(ec.code)}</span></td>
                  <td><strong>${esc(ec.title)}</strong><br><span style="color:var(--slate);font-size:14px">${esc(ec.cause)}</span></td>
                  <td>${esc(ec.userAction)}</td>
                  <td>${esc(ec.techSolution)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="inline-cta">
          <div>
            <b>${esc(b.name)} Kombiniz İçin Ücretsiz Bilgi Alın</b>
            <p>Yukarıdaki adımları denediniz ama arıza devam mı ediyor? Ustalarımız telefonda size yardımcı olmaya hazır.</p>
          </div>
          <a class="btn btn-primary" href="${SITE.phoneTel}">${ICONS.phone} ${SITE.phoneDisplay}</a>
        </div>

        <h2>İlçelere Göre ${esc(b.name)} Kombi Servis Noktalarımız</h2>
        <p>Bulunduğunuz ilçeyi seçerek o bölgedeki ${esc(b.name)} mobil servis rotamızı inceleyebilirsiniz:</p>
        <div class="brands-grid" style="margin-top:18px">
          ${DISTRICTS.map((d) => `
            <a class="brand-card" href="/${d.id}/${b.slug}">
              <div>
                <b>${esc(d.name)} ${esc(b.name)} Servisi</b>
                <p style="margin-top:6px">${esc(d.name)} (${esc(d.neighborhoods.slice(0, 2).join(', '))}) ${esc(b.name)} kombi bakım ve tamiri.</p>
              </div>
              <div class="brand-card-foot">
                <span>${esc(d.distance)}</span>
                <span>→</span>
              </div>
            </a>
          `).join('')}
        </div>
      </article>

      <div class="sidebar">
        <div class="side-box">
          <span class="side-box-title">Diğer Kombi Markaları</span>
          <ul>
            ${BRANDS.filter((x) => x.id !== b.id).slice(0, 10).map((other) => `
              <li><a href="/${other.slug}"><span>${esc(other.name)} Kombi Servisi</span> <span>→</span></a></li>
            `).join('')}
            <li><a href="/kombi-markalari"><span>Tüm Markaları Gör (18 Marka)</span> <span>→</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    `;

    const html = renderLayout({
      title: `Aliağa ${b.name} Kombi Bakım Teknik Servisi | Arıza & Tamir • ${SITE.phoneDisplay}`,
      description: `Aliağa ve Kuzey İzmir ${b.name} kombi servisi. ${b.popularModels.slice(0, 4).join(', ')} modellerinde garantili tamir, bakım ve hata kodu çözümleri: ${SITE.phoneDisplay}.`,
      canonicalPath: urlPath,
      activeNav: 'markalar',
      schemaJson: [createBreadcrumbSchema(breadcrumbs), createFaqSchema(brandFaqs)],
      bodyContent
    });

    registerAndWrite(urlPath, html, '0.85', 'weekly');

    // 3B. İlçe × Marka Kombinasyon Sayfaları (/{ilce}/{marka}-kombi-bakim-teknik-servisi)
    DISTRICTS.forEach((d) => {
      const comboPath = `/${d.id}/${b.slug}`;
      const comboBreadcrumbs = [
        { name: SITE.brandName, url: '/' },
        { name: `${d.name} Kombi Servisi`, url: `/${d.slug}` },
        { name: `${d.name} ${b.name} Kombi Bakım Teknik Servisi`, url: comboPath }
      ];

      const comboFaqs = [
        {
          q: `${d.name} bölgesinde ${b.name} kombi arızasına aynı gün geliyor musunuz?`,
          a: `Evet, ${d.name} (${d.neighborhoods.slice(0, 4).join(', ')} ve tüm mahalleler) günlük servis rotamız içerisindedir. ${b.name} kombinizin yedek parçalarıyla birlikte aynı gün adresinize ulaşıyoruz.`
        },
        {
          q: `${d.name} ${b.name} servisi çağırmadan önce telefonda ücretsiz bilgi alabilir miyim?`,
          a: `Elbette! ${SITE.phoneDisplay} numaramızı aradığınızda ${b.name} kombinizin ekranındaki hata kodunu söyleyin; ustamız telefonda ücretsiz ön teşhis yaparak size rehberlik etsin.`
        }
      ];

      const comboBody = `
      <section class="page-hero">
        <div class="container">
          <nav aria-label="Konum">
            <ol class="breadcrumb">
              <li><a href="/">${esc(SITE.brandName)}</a></li>
              <li><a href="/${d.slug}">${esc(d.name)} Kombi Servisi</a></li>
              <li><span aria-current="page">${esc(d.name)} ${esc(b.name)} Kombi Bakım Teknik Servisi</span></li>
            </ol>
          </nav>
          
          <div class="page-hero-grid">
            <div>
              <span class="badge-pill">${ICONS.pin} ${esc(d.name)} • ${esc(b.name)} Uzman Ekip</span>
              <h1>${esc(d.name)} ${esc(b.name)} Kombi Bakım ve Teknik Servisi</h1>
              <p class="hero-lead">${esc(d.name)} ilçesinin tüm mahallelerinde (${esc(d.neighborhoods.slice(0, 5).join(', '))}) <strong>${esc(b.name)}</strong> (${esc(b.popularModels.slice(0, 4).join(', '))}) kombiler için 1 yıl garantili arıza tamiri, yıllık bakım, anakart onarımı ve petek temizliği.</p>
              
              <div class="free-advice-banner">
                <div class="free-advice-banner-top"><span class="pulse-dot"></span> ${esc(d.name.toUpperCase())} ${esc(b.name.toUpperCase())} ÜCRETSİZ BİLGİ HATTI</div>
                <p>${esc(d.name)} adresinizdeki ${esc(b.name)} kombiniz ısıtmıyor, sıcak su vermiyor veya arıza kodu mu gösteriyor? <strong>${SITE.phoneDisplay}</strong> numaramızı arayın, ustamızdan ücretsiz bilgi ve ön teşhis alın.</p>
              </div>
              
              <div class="hero-actions">
                <a class="btn btn-primary btn-lg" href="${SITE.phoneTel}">${ICONS.phone} Hemen Ara: ${SITE.phoneDisplay}</a>
                <a class="btn btn-whatsapp btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp Destek</a>
              </div>
              
              <ul class="page-facts">
                <li>${ICONS.pin} ${esc(d.distance)}</li>
                <li>${ICONS.wrench} Orijinal ${esc(b.name)} Yedek Parça</li>
                <li>${ICONS.shield} 1 Yıl Servis Garantisi</li>
              </ul>
            </div>
            
            <div>
              ${renderSidebarSupportCard(`${d.name} ${b.name} Destek`)}
            </div>
          </div>
        </div>
      </section>

      <div class="container content-layout">
        <article class="prose">
          <h2>${esc(d.name)} Bölgesinde ${esc(b.name)} Kombi Tamiri ve Bakımı</h2>
          <p>${esc(b.techNote)}</p>
          <p>${esc(d.localChallenges)}</p>

          <h2>${esc(b.name)} Kombilerde Sık Görülen Arıza Kodları ve Çözümleri</h2>
          <p>${esc(d.name)} genelindeki kullanıcılarımızın ${esc(b.name)} kombilerde en sık karşılaştığı hata kodları ve çözüm yöntemleri:</p>
          
          <div class="error-table-wrap" style="margin:18px 0 28px">
            <table class="error-table">
              <thead>
                <tr>
                  <th>Kod</th>
                  <th>Anlamı ve Nedeni</th>
                  <th>Kullanıcı Kontrolü</th>
                  <th>Servis Müdahalesi</th>
                </tr>
              </thead>
              <tbody>
                ${b.errorCodes.map((ec) => `
                  <tr>
                    <td><span class="code-pill">${esc(ec.code)}</span></td>
                    <td><strong>${esc(ec.title)}</strong><br><span style="font-size:13.5px;color:var(--slate)">${esc(ec.cause)}</span></td>
                    <td>${esc(ec.userAction)}</td>
                    <td>${esc(ec.techSolution)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <h2>${esc(d.name)} İçinde ${esc(b.name)} Servisi Verdiğimiz Mahalleler</h2>
          <ul class="neighborhood-grid" style="padding:0;list-style:none">
            ${d.neighborhoods.map((m, i) => `<li class="neighborhood-item" style="padding-left:16px"><span>${String(i + 1).padStart(2, '0')}</span> ${esc(m)}</li>`).join('')}
          </ul>

          <h2>${esc(d.name)} İlçesindeki Diğer Kombi Marka Servislerimiz</h2>
          <div class="brands-grid" style="margin-top:16px">
            ${BRANDS.filter((x) => x.id !== b.id).slice(0, 6).map((other) => `
              <a class="brand-card" href="/${d.id}/${other.slug}">
                <b>${esc(d.name)} ${esc(other.name)} Servisi</b>
                <div class="brand-card-foot"><span>Sayfaya Git</span><span>→</span></div>
              </a>
            `).join('')}
          </div>
        </article>

        <div class="sidebar">
          <div class="side-box">
            <span class="side-box-title">${esc(b.name)} Diğer İlçe Servisleri</span>
            <ul>
              ${DISTRICTS.filter((x) => x.id !== d.id).map((otherD) => `
                <li><a href="/${otherD.id}/${b.slug}"><span>${esc(otherD.name)} ${esc(b.name)} Servisi</span> <span>→</span></a></li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
      `;

      const comboHtml = renderLayout({
        title: `${d.name} ${b.name} Kombi Bakım ve Teknik Servisi • ${SITE.phoneDisplay}`,
        description: `${d.name} ${b.name} kombi bakım ve teknik servisi. ${d.name} tüm mahallelerinde ${b.name} kombi arıza tamiri, yıllık bakım ve yedek parça. Ücretsiz bilgi: ${SITE.phoneDisplay}.`,
        canonicalPath: comboPath,
        activeNav: 'bolgeler',
        schemaJson: [createBreadcrumbSchema(comboBreadcrumbs), createFaqSchema(comboFaqs)],
        bodyContent: comboBody
      });

      registerAndWrite(comboPath, comboHtml, '0.75', 'weekly');
    });
  });
}

/* ==========================================================================
   4. TÜM BİLİNEN HATA KODLARI VE ÇÖZÜMLERİ MERKEZ SAYFASI
      (/kombi-hata-kodlari-ve-cozumleri)
   ========================================================================== */
function buildAllErrorCodesHubPage() {
  const urlPath = '/kombi-hata-kodlari-ve-cozumleri';
  const breadcrumbs = [
    { name: SITE.brandName, url: '/' },
    { name: 'Tüm Kombi Hata Kodları ve Çözümleri', url: urlPath }
  ];

  const allErrorRows = [];
  BRANDS.forEach((b) => {
    b.errorCodes.forEach((ec) => {
      allErrorRows.push({
        brandId: b.id,
        brandName: b.name,
        brandSlug: b.slug,
        ...ec
      });
    });
  });

  const hubFaqs = [
    {
      q: 'Kombi ekranındaki hata kodunu resetledim ama tekrar çıktı, ne yapmalıyım?',
      a: 'Bir arıza kodunun resetlendikten sonra tekrar belirmesi, sensörün veya ilgili mekanik parçanın (gaz valfi, pompa, prosestat, NTC veya genleşme tankı) gerçekten arızalı ya da tıkanmış olduğunu gösterir. Cihazı üst üste resetlemek anakarta zarar verebileceği için 0542 585 06 75 numaramızı arayarak ücretsiz teknik görüş alabilirsiniz.'
    },
    {
      q: 'Hangi hata kodlarını servis çağırmadan evde kendim çözebilirim?',
      a: 'Düşük su basıncı kodları (Baymak E10, Vaillant F.22, Demirdöküm F10, E.C.A F37, Bosch CE, Buderus H07, Ariston 108) kombi altındaki doldurma musluğundan 1.5 bar su basılarak evde kolayca çözülebilir. Ayrıca gaz kesintisi sonrası oluşan E01 / F.28 / F04 / EA kodları da ocakta gaz varsa tek seferlik resetleme ile düzelebilir.'
    }
  ];

  const bodyContent = `
  <section class="page-hero">
    <div class="container">
      <nav aria-label="Konum">
        <ol class="breadcrumb">
          <li><a href="/">${esc(SITE.brandName)}</a></li>
          <li><span aria-current="page">Kombi Hata Kodları ve Çözümleri</span></li>
        </ol>
      </nav>
      
      <span class="badge-free"><span class="pulse-dot"></span> TÜM MARKALAR İÇİN CANLI ARIZA KODU SÖZLÜĞÜ</span>
      <h1 style="margin-top:12px">Kombi Hata Kodları ve Çözümleri (Tüm Markalar)</h1>
      <p class="hero-lead" style="max-width:780px">Baymak, Vaillant, Demirdöküm, E.C.A, Bosch, Buderus, Viessmann, Ariston, Protherm, Ferroli ve Türkiye'deki tüm kombi markalarının ekranlarında beliren arıza kodlarının anlamları, evde yapabileceğiniz kontroller ve kesin çözümleri.</p>
      
      <div class="free-advice-banner" style="max-width:900px">
        <div class="free-advice-banner-top">${ICONS.phone} KODU BULAMADINIZ VEYA DÜZELMEDİ Mİ? ÜCRETSİZ DANIŞIN</div>
        <p>Tabloda arama yapmakla uğraşmak istemiyorsanız veya resetlemenize rağmen hata silinmiyorsa <strong>${SITE.phoneDisplay}</strong> numaramızı hemen arayın. Ustamız ekrandaki kodun ne anlama geldiğini ve nasıl çözüleceğini telefonda ücretsiz anlatsın.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <!-- Canlı Arama ve Marka Filtresi -->
      <div class="error-finder-box">
        <div class="error-finder-controls">
          <div class="search-input-wrap">
            ${ICONS.search}
            <input type="search" data-error-search placeholder="Hata kodunu veya sorunu yazın (Örn: E01, F28, F75, E10, EA, 501, basınç, ateşleme...)" aria-label="Hata kodu ara">
          </div>
          <select class="brand-select" data-error-brand aria-label="Kombi markasına göre filtrele">
            <option value="">Tüm Markalar (${BRANDS.length} Marka)</option>
            ${BRANDS.map((b) => `<option value="${b.id}">${esc(b.name)}</option>`).join('')}
          </select>
          <a class="btn btn-primary" href="${SITE.phoneTel}">${ICONS.phone} Ustaya Sor: ${SITE.phoneDisplay}</a>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:13.5px;color:var(--slate);flex-wrap:wrap;gap:8px">
          <span data-error-count>${allErrorRows.length} kayıt gösteriliyor</span>
          <span>İpucu: Kodu yazdıktan sonra "Evde İlk Müdahale" sütunundaki adımı uygulayın.</span>
        </div>
      </div>

      <!-- Tüm Hata Kodları Tablosu -->
      <div class="error-table-wrap">
        <table class="error-table">
          <thead>
            <tr>
              <th>Marka</th>
              <th>Hata Kodu</th>
              <th>Arıza Tanımı ve Nedenleri</th>
              <th>Evde İlk Müdahale (Kullanıcı)</th>
              <th>Teknik Servis Çözümü</th>
            </tr>
          </thead>
          <tbody data-error-tbody>
            ${allErrorRows.map((row) => `
              <tr data-brand="${row.brandId}">
                <td><a href="/${row.brandSlug}" class="brand-badge" style="text-decoration:none">${esc(row.brandName)}</a></td>
                <td><span class="code-pill">${esc(row.code)}</span></td>
                <td><strong>${esc(row.title)}</strong><br><span style="color:var(--slate);font-size:13.5px">${esc(row.cause)}</span></td>
                <td>${esc(row.userAction)}</td>
                <td>${esc(row.techSolution)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Belirti Bazlı Detaylı Arıza Rehberleri -->
  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Detaylı Rehberler</span>
        <h2>Belirtiye ve Markaya Göre Arıza Çözüm Sayfaları</h2>
        <p>Ekranda kod yazmasa bile kombinizin gösterdiği belirtiye göre hazırladığımız kapsamlı çözüm rehberleri:</p>
      </div>
      <div class="fault-grid">
        ${FAULTS.map((f, idx) => `
          <a class="fault-card" href="/${f.slug}">
            <span class="fault-card-num">${String(idx + 1).padStart(2, '0')}</span>
            <span class="fault-card-icon">${ICONS.wrench}</span>
            <b>${esc(f.shortTitle)}</b>
            <p>${esc(f.summary)}</p>
            <span class="fault-card-link">Detaylı rehberi oku</span>
          </a>
        `).join('')}
      </div>
    </div>
  </section>
  `;

  const html = renderLayout({
    title: `Kombi Hata Kodları ve Çözümleri (Tüm Markalar) • ${SITE.phoneDisplay}`,
    description: `Baymak, Vaillant, Demirdöküm, E.C.A, Bosch, Buderus, Viessmann, Ariston kombi arıza kodları ve çözümleri tam listesi. Ücretsiz arıza danışma: ${SITE.phoneDisplay}.`,
    canonicalPath: urlPath,
    activeNav: 'kodlar',
    schemaJson: [createBreadcrumbSchema(breadcrumbs), createFaqSchema(hubFaqs)],
    bodyContent
  });

  registerAndWrite(urlPath, html, '0.95', 'weekly');
}

/* ==========================================================================
   5. BİREYSEL ARIZA VE HATA KODU REHBER SAYFALARI (/{ariza-url})
   ========================================================================== */
function buildFaultPages() {
  FAULTS.forEach((f) => {
    const urlPath = `/${f.slug}`;
    const breadcrumbs = [
      { name: SITE.brandName, url: '/' },
      { name: 'Hata Kodları ve Arıza Rehberi', url: '/kombi-hata-kodlari-ve-cozumleri' },
      { name: f.shortTitle, url: urlPath }
    ];

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: f.title,
      description: f.metaDesc,
      datePublished: '2026-06-15T09:00:00+03:00',
      dateModified: `${f.updatedAt}T12:00:00+03:00`,
      author: { '@id': `${SITE.domain}/#organization` },
      publisher: { '@id': `${SITE.domain}/#organization` },
      mainEntityOfPage: `${SITE.domain}${urlPath}`
    };

    const bodyContent = `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="Konum">
          <ol class="breadcrumb">
            <li><a href="/">${esc(SITE.brandName)}</a></li>
            <li><a href="/kombi-hata-kodlari-ve-cozumleri">Arıza &amp; Hata Kodları</a></li>
            <li><span aria-current="page">${esc(f.shortTitle)}</span></li>
          </ol>
        </nav>
        
        <span class="badge-pill">${esc(f.codeBadge)} • ${esc(f.category)}</span>
        <h1 style="max-width:920px">${esc(f.title)}</h1>
        <p class="hero-lead" style="max-width:780px">${esc(f.summary)}</p>
        
        <ul class="page-facts">
          <li>Güncelleme: <time datetime="${f.updatedAt}">${esc(f.updatedAt)}</time></li>
          <li>Okuma Süresi: ${esc(f.readTime)}</li>
          <li>Aliağa Kombi Bakım Teknik Ekibi Tarafından Hazırlandı</li>
        </ul>
      </div>
    </section>

    <div class="container content-layout">
      <article class="prose">
        <div class="callout-box">
          <b>Ustanın Özeti (Kısaca Teşhis)</b>
          ${esc(f.quickTip)}
        </div>

        <h2>Belirtiye Göre Olası Arıza Nedenleri Tablosu</h2>
        <p>Kombinizde yaşadığınız durumu aşağıdaki tabloyla karşılaştırarak sorunun hangi parçadan kaynaklandığını hızlıca tespit edebilirsiniz:</p>
        
        <table>
          <thead>
            <tr>
              <th>Gözlemlenen Belirti / Kod</th>
              <th>Olası Teknik Neden</th>
              <th>Çözüm Yöntemi</th>
            </tr>
          </thead>
          <tbody>
            ${f.symptomsTable.map((r) => `
              <tr>
                <td><strong>${esc(r.symptom)}</strong></td>
                <td>${esc(r.cause)}</td>
                <td>${esc(r.action)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <h2>Servis Çağırmadan Önce Evde Güvenle Yapabileceğiniz Kontroller</h2>
        <p>Bizi aramadan önce veya ustamızla telefonda konuşurken şu adımları kontrol etmeniz sorunun belki de hiçbir masraf çıkmadan çözülmesini sağlar:</p>
        <ol>
          ${f.userChecks.map((uc) => `<li><strong>${esc(uc.title)}:</strong> ${esc(uc.desc)}</li>`).join('')}
        </ol>

        <div class="inline-cta">
          <div>
            <b>Kontrolleri Yaptınız Ama Sorun Devam mı Ediyor?</b>
            <p>Cihazı zorlamayın! <strong>${SITE.phoneDisplay}</strong> numaramızı arayın, ustamız telefonda ücretsiz yönlendirme yapsın veya Aliağa ve çevre ilçelerdeki adresinize aynı gün gelsin.</p>
          </div>
          <a class="btn btn-primary" href="${SITE.phoneTel}">${ICONS.phone} Ücretsiz Danış: ${SITE.phoneDisplay}</a>
        </div>

        ${f.technicalDeepDive.map((td) => `
          <h2>${esc(td.heading)}</h2>
          <p>${esc(td.text)}</p>
        `).join('')}

        <h2>Aliağa ve Çevre İlçelerde Yerinde Garantili Onarım</h2>
        <p>Aliağa merkezli servis araçlarımızla <a href="/aliaga-kombi-bakim-teknik-servisi">Aliağa</a>, <a href="/foca-kombi-bakim-teknik-servisi">Foça</a>, <a href="/yeni-sakran-kombi-bakim-teknik-servisi">Yeni Şakran</a>, <a href="/bergama-kombi-bakim-teknik-servisi">Bergama</a>, <a href="/dikili-kombi-bakim-teknik-servisi">Dikili</a>, <a href="/menemen-kombi-bakim-teknik-servisi">Menemen</a>, <a href="/kemalpasa-kombi-bakim-teknik-servisi">Kemalpaşa</a> ve <a href="/kinik-kombi-bakim-teknik-servisi">Kınık</a> ilçelerinde tüm kombi arızalarına 1 yıl parça ve işçilik garantisiyle müdahale ediyoruz.</p>
      </article>

      <div class="sidebar">
        ${renderSidebarSupportCard('Kendi Başınıza Çözemediyseniz')}
        
        <div class="side-box">
          <span class="side-box-title">Diğer Arıza Rehberleri</span>
          <ul>
            ${FAULTS.filter((x) => x.slug !== f.slug).slice(0, 8).map((other) => `
              <li><a href="/${other.slug}"><span>${esc(other.shortTitle)}</span> <span>→</span></a></li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container faq-layout">
        <div class="section-head" style="margin:0">
          <span class="eyebrow">Sorular &amp; Yanıtlar</span>
          <h2>Bu Konuda Sık Sorulanlar</h2>
          <p>Farklı bir sorunuz varsa <strong>${SITE.phoneDisplay}</strong> hattımızdan ücretsiz bilgi alabilirsiniz.</p>
        </div>
        <div class="faq-list">
          ${f.faqs.map((fq, idx) => `
            <details${idx === 0 ? ' open' : ''}>
              <summary><span class="faq-num">0${idx + 1}</span> ${esc(fq.q)}</summary>
              <div class="faq-answer"><p>${esc(fq.a)}</p></div>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
    `;

    const html = renderLayout({
      title: `${f.title} | ${SITE.brandName}`,
      description: f.metaDesc,
      canonicalPath: urlPath,
      ogType: 'article',
      activeNav: 'kodlar',
      schemaJson: [createBreadcrumbSchema(breadcrumbs), articleSchema, createFaqSchema(f.faqs)],
      bodyContent
    });

    registerAndWrite(urlPath, html, '0.85', 'weekly');
  });
}

/* ==========================================================================
   6. KURUMSAL VE HİZMET SAYFALARI
      (/kombi-bakimi, /petek-temizligi, /servis-bolgeleri, /kombi-markalari, /hakkimizda, /iletisim)
   ========================================================================== */
function buildStaticCorePages() {
  // 6.1 /kombi-bakimi
  registerAndWrite(
    '/kombi-bakimi',
    renderLayout({
      title: `Periyodik Kombi Bakımı Aliağa & Kuzey İzmir • ${SITE.phoneDisplay}`,
      description: `Aliağa, Foça, Bergama, Menemen ve Yeni Şakran'da 8 aşamalı detaylı yıllık kombi bakımı. Yanma odası, genleşme tankı, filtre ve gaz ayarı: ${SITE.phoneDisplay}.`,
      canonicalPath: '/kombi-bakimi',
      activeNav: 'bakim',
      schemaJson: [
        createBreadcrumbSchema([
          { name: SITE.brandName, url: '/' },
          { name: 'Periyodik Kombi Bakımı', url: '/kombi-bakimi' }
        ])
      ],
      bodyContent: `
      <section class="page-hero">
        <div class="container">
          <nav aria-label="Konum"><ol class="breadcrumb"><li><a href="/">${esc(SITE.brandName)}</a></li><li><span aria-current="page">Kombi Bakımı</span></li></ol></nav>
          <span class="badge-pill">${ICONS.wrench} YILLIK PERİYODİK BAKIM</span>
          <h1>Aliağa ve Kuzey İzmir Garantili Kombi Bakımı</h1>
          <p class="hero-lead">Kış ortasında soğukta kalmamak ve doğalgaz faturanızı %15'e varan oranda düşürmek için 45 dakikalık ölçüm odaklı, eksiksiz yıllık kombi bakımı.</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${SITE.phoneTel}">${ICONS.phone} Bakım Randevusu &amp; Bilgi: ${SITE.phoneDisplay}</a>
            <a class="btn btn-whatsapp btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp'tan Fiyat Sor</a>
          </div>
        </div>
      </section>
      <div class="container content-layout">
        <article class="prose">
          <h2>Kombi Bakımında Neler Yapıyoruz?</h2>
          <p>Aliağa, Foça, Yeni Şakran, Bergama, Dikili, Menemen, Kemalpaşa ve Kınık'ta gerçekleştirdiğimiz kombi bakımında cihazınızı sadece tozdan arındırmıyor, tüm mekanik ve elektronik bileşenlerini fabrika verilerine göre kalibre ediyoruz:</p>
          <ol>
            <li><strong>Sıcak Su ve Kalorifer Ön Testi:</strong> Cihazın mevcut ısıtma performansı ve pompa sesi dinlenir.</li>
            <li><strong>Genleşme Tankı Bar Kontrolü:</strong> Dijital manometre ile tank havası ölçülür, eksikse 1.0 bar seviyesine tamamlanır (Su basıncı dalgalanmalarını bitirir).</li>
            <li><strong>Yanma Odası, Brülör ve Eşanjör Yıkaması:</strong> Yoğuşmalı kombilerde özel solüsyonla eşanjör kanalları açılır.</li>
            <li><strong>Fan Motoru ve Ventüri Temizliği:</strong> Baca çekiş hatalarını (E03 / F05 / C6) önlemek için fan kanatları yıkanır.</li>
            <li><strong>Ateşleme ve İyonizasyon Elektrot Bakımı:</strong> Elektrot uçları zımparalanır, alev algılama akımı ölçülür.</li>
            <li><strong>Yoğuşma Sifonu ve Gider Temizliği:</strong> Sifon sökülerek içindeki çamur ve kireç tortusu boşaltılır.</li>
            <li><strong>Kalorifer Dönüş Filtresi Temizliği:</strong> Petek suyunun rahat dönmesi için pislik tutucu filtre yıkanır.</li>
            <li><strong>Gaz Kaçak ve Modülasyon Kontrolü:</strong> Gaz valfi ayarı kontrol edilip resmi bakım fişi teslim edilir.</li>
          </ol>
        </article>
        <div class="sidebar">${renderSidebarSupportCard('Kombi Bakım Randevusu')}</div>
      </div>`
    }),
    '0.9',
    'weekly'
  );

  // 6.2 /petek-temizligi
  registerAndWrite(
    '/petek-temizligi',
    renderLayout({
      title: `Makineli Petek Temizliği Aliağa, Foça, Menemen, Bergama • ${SITE.phoneDisplay}`,
      description: `Peteklerin altı ısınmıyor mu? Evi kirletmeden, petekleri sökmeden çift yönlü darbeli makine ile garantili petek ve tesisat temizliği: ${SITE.phoneDisplay}.`,
      canonicalPath: '/petek-temizligi',
      activeNav: 'petek',
      schemaJson: [
        createBreadcrumbSchema([
          { name: SITE.brandName, url: '/' },
          { name: 'Makineli Petek Temizliği', url: '/petek-temizligi' }
        ])
      ],
      bodyContent: `
      <section class="page-hero">
        <div class="container">
          <nav aria-label="Konum"><ol class="breadcrumb"><li><a href="/">${esc(SITE.brandName)}</a></li><li><span aria-current="page">Petek Temizliği</span></li></ol></nav>
          <span class="badge-pill">${ICONS.flame} %25'E VARAN YAKIT TASARRUFU</span>
          <h1>Darbeli Makine ile Evi Kirletmeden Petek Temizliği</h1>
          <p class="hero-lead">Kombiniz çalıştığı halde peteklerin alt yarısı soğuk kalıyorsa veya en uzak odanız ısınmıyorsa, tesisat içindeki siyah çamur ve kireç tortusunu tek noktadan sökmeden temizliyoruz.</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${SITE.phoneTel}">${ICONS.phone} Ücretsiz Bilgi &amp; Randevu: ${SITE.phoneDisplay}</a>
            <a class="btn btn-whatsapp btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp Destek</a>
          </div>
        </div>
      </section>
      <div class="container content-layout">
        <article class="prose">
          <h2>Evi Kirletmeden Petek Temizliği Nasıl Yapılır?</h2>
          <p>Pek çok ev sahibi "Evim batar mı, parkelere siyah su damlar mı?" endişesiyle petek temizliğini erteler. Oysa kullandığımız profesyonel tesisat yıkama teknolojisinde <strong>odalardaki hiçbir petek yerinden sökülmez:</strong></p>
          <ol>
            <li>Cihazımız sadece banyodaki havlupana (veya kombinin alt bağlantılarına) bağlanır.</li>
            <li>Tahliye hortumu doğrudan banyo giderine / klozete verilir.</li>
            <li>Sisteme su ve basınçlı hava darbeleri gönderilerek her petek tek tek yıkanır; petek tabanına çökmüş tüm tortu ve çamur dışarı atılır.</li>
            <li>Kombi altındaki pislik tutucu filtre temizlenir, sisteme koruyucu sıvı eklenir.</li>
            <li>Tüm peteklerin havası alınır, reglaj (vana denge) ayarı yapılır ve her peteğin üstten alta eşit ısındığı test edilerek teslim edilir.</li>
          </ol>
        </article>
        <div class="sidebar">${renderSidebarSupportCard('Petek Temizliği Danışma')}</div>
      </div>`
    }),
    '0.9',
    'weekly'
  );

  // 6.3 /servis-bolgeleri
  registerAndWrite(
    '/servis-bolgeleri',
    renderLayout({
      title: `Kombi Servis Bölgelerimiz (Aliağa ve Tüm Çevre İlçeler) • ${SITE.phoneDisplay}`,
      description: `Aliağa, Foça, Yeni Foça, Yeni Şakran, Bergama, Dikili, Çandarlı, Menemen, Kemalpaşa ve Kınık kombi bakım ve teknik servis bölgelerimiz.`,
      canonicalPath: '/servis-bolgeleri',
      activeNav: 'bolgeler',
      schemaJson: [
        createBreadcrumbSchema([
          { name: SITE.brandName, url: '/' },
          { name: 'Servis Bölgeleri', url: '/servis-bolgeleri' }
        ])
      ],
      bodyContent: `
      <section class="page-hero">
        <div class="container">
          <nav aria-label="Konum"><ol class="breadcrumb"><li><a href="/">${esc(SITE.brandName)}</a></li><li><span aria-current="page">Servis Bölgeleri</span></li></ol></nav>
          <span class="badge-pill">${ICONS.pin} KUZEY İZMİR &amp; BAKIRÇAY SERVİS AĞI</span>
          <h1>Hizmet Verdiğimiz Tüm İlçeler ve Bölgeler</h1>
          <p class="hero-lead">Aliağa merkezli mobil servis araçlarımızla komşu ilçelerin tamamına her gün düzenli servis çıkarıyoruz. İlçenizi seçerek mahalle listesini ve bölge detaylarını inceleyebilirsiniz.</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="map-layout">
            <div class="map-card">
              ${renderRegionalMapSvg('aliaga')}
            </div>
            <div class="district-list-cards">
              ${DISTRICTS.map((d) => `
                <a class="district-item-card" href="/${d.slug}">
                  <div class="district-item-top">
                    <b>${esc(d.name)} Kombi Servisi</b>
                    <small>${esc(d.zone)}</small>
                  </div>
                  <p>${esc(d.shortDesc)}</p>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </section>`
    }),
    '0.9',
    'weekly'
  );

  // 6.4 /kombi-markalari
  registerAndWrite(
    '/kombi-markalari',
    renderLayout({
      title: `Hizmet Verdiğimiz Kombi Markaları (18 Marka) • ${SITE.phoneDisplay}`,
      description: `Baymak, Vaillant, Demirdöküm, E.C.A, Bosch, Buderus, Viessmann, Ariston, Protherm, Ferroli, Immergas, Alarko, Airfel, Daikin, Warmhaus kombi servisi.`,
      canonicalPath: '/kombi-markalari',
      activeNav: 'markalar',
      schemaJson: [
        createBreadcrumbSchema([
          { name: SITE.brandName, url: '/' },
          { name: 'Kombi Markaları', url: '/kombi-markalari' }
        ])
      ],
      bodyContent: `
      <section class="page-hero">
        <div class="container">
          <nav aria-label="Konum"><ol class="breadcrumb"><li><a href="/">${esc(SITE.brandName)}</a></li><li><span aria-current="page">Kombi Markaları</span></li></ol></nav>
          <span class="badge-pill">${ICONS.wrench} 18 KOMBİ MARKASINDA TAM DONANIM</span>
          <h1>Servis ve Bakım Hizmeti Verdiğimiz Kombi Markaları</h1>
          <p class="hero-lead">Türkiye genelinde kullanılan tüm yoğuşmalı, hermetik ve geleneksel kombi markalarının arıza tespiti, bakım ve orijinal yedek parça değişimi için markanızı seçin.</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="brands-grid">
            ${BRANDS.map((b) => `
              <a class="brand-card" href="/${b.slug}">
                <div>
                  <div class="brand-card-head">
                    <b>${esc(b.name)} Kombi Servisi</b>
                    <small>${esc(b.origin)}</small>
                  </div>
                  <p style="margin-top:8px">${esc(b.shortDesc)}</p>
                </div>
                <div class="brand-card-foot">
                  <span>Popüler: ${esc(b.popularModels.slice(0, 3).join(', '))}</span>
                  <span>Detay →</span>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>`
    }),
    '0.9',
    'weekly'
  );

  // 6.5 /hakkimizda
  registerAndWrite(
    '/hakkimizda',
    renderLayout({
      title: `Hakkımızda | ${SITE.brandName} • ${SITE.phoneDisplay}`,
      description: `Aliağa Kombi Bakım kimdir? Aliağa, Foça, Bergama, Yeni Şakran, Dikili ve Menemen'de şeffaf fiyatlı, ölçüm odaklı bağımsız kombi teknik servisi.`,
      canonicalPath: '/hakkimizda',
      activeNav: 'hakkimizda',
      schemaJson: [
        createBreadcrumbSchema([
          { name: SITE.brandName, url: '/' },
          { name: 'Hakkımızda', url: '/hakkimizda' }
        ])
      ],
      bodyContent: `
      <section class="page-hero">
        <div class="container">
          <nav aria-label="Konum"><ol class="breadcrumb"><li><a href="/">${esc(SITE.brandName)}</a></li><li><span aria-current="page">Hakkımızda</span></li></ol></nav>
          <h1>Aliağa ve Kuzey İzmir'in Yerel Kombi Uzmanı</h1>
          <p class="hero-lead">Tahminle değil ölçümle arıza bulan, müşterisine telefonda ücretsiz bilgi vermekten çekinmeyen ve yaptığı her işin arkasında 1 yıl garantisiyle duran yerel teknik servis.</p>
        </div>
      </section>
      <div class="container content-layout">
        <article class="prose">
          <h2>Çalışma İlkelerimiz</h2>
          <p><strong>Aliağa Kombi Bakım</strong> olarak yola çıkarken tek bir kural koyduk: <em>"Kendi evimizdeki kombiye nasıl bakılmasını istiyorsak, müşterimizin kombisine de öyle yaklaşacağız."</em></p>
          <ul>
            <li><strong>Önce Ücretsiz Bilgi:</strong> Bizi arayan her ziyaretçimize önce telefonda ücretsiz destek veririz. Basit bir vana veya su basıncı sorunu için kimseye boşuna servis ücreti ödetmeyiz.</li>
            <li><strong>İşe Başlamadan Net Fiyat:</strong> Kombinin kapağını açıp arızayı ölçtükten sonra değişecek parçayı ve toplam tutarı açıkça söyleriz.</li>
            <li><strong>Çıkan Parçayı Gösteririz:</strong> Değiştirdiğimiz eski parçayı müşterimize gösterir ve teslim ederiz.</li>
            <li><strong>1 Yıl Resmi Garanti:</strong> Tüm onarım ve yedek parça işlemlerimizi yazılı servis fişi ile 1 yıl garanti altına alırız.</li>
          </ul>
        </article>
        <div class="sidebar">${renderSidebarSupportCard('Bize Ulaşın')}</div>
      </div>`
    }),
    '0.7',
    'monthly'
  );

  // 6.6 /iletisim
  registerAndWrite(
    '/iletisim',
    renderLayout({
      title: `İletişim & Ücretsiz Destek Hattı | ${SITE.brandName} • ${SITE.phoneDisplay}`,
      description: `Aliağa Kombi Bakım telefon numarası (${SITE.phoneDisplay}), WhatsApp arıza destek hattı, adres ve Kuzey İzmir servis saatleri.`,
      canonicalPath: '/iletisim',
      activeNav: 'iletisim',
      schemaJson: [
        createBreadcrumbSchema([
          { name: SITE.brandName, url: '/' },
          { name: 'İletişim', url: '/iletisim' }
        ])
      ],
      bodyContent: `
      <section class="page-hero">
        <div class="container">
          <nav aria-label="Konum"><ol class="breadcrumb"><li><a href="/">${esc(SITE.brandName)}</a></li><li><span aria-current="page">İletişim</span></li></ol></nav>
          <span class="badge-free"><span class="pulse-dot"></span> 7/24 BİLGİ &amp; WHATSAPP DESTEK HATTI</span>
          <h1 style="margin-top:12px">İletişim ve Ücretsiz Arıza Danışma Hattı</h1>
          <p class="hero-lead">Kombi arızası, yıllık bakım randevusu, petek temizliği veya sadece aklınıza takılan teknik bir soruyu ücretsiz sormak için bize doğrudan ulaşabilirsiniz.</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="map-layout">
            <div class="support-card" style="padding:36px">
              <span class="support-card-tag"><span class="pulse-dot"></span> DOĞRUDAN USTA İLE GÖRÜŞÜN</span>
              <h2 style="color:#fff;margin-top:12px">Telefon &amp; WhatsApp Servis Hattı</h2>
              <p style="color:#CBD5E1;font-size:17px">Çağrı merkezi bekletmesi olmadan doğrudan kombi ustamızla görüşün. Kombinizin ekranındaki hata kodunu veya fotoğrafını WhatsApp üzerinden de gönderebilirsiniz.</p>
              <a class="support-card-phone" style="font-size:clamp(2.2rem,5vw,3.4rem);margin:20px 0" href="${SITE.phoneTel}">${SITE.phoneDisplay}</a>
              <div style="display:flex;flex-wrap:wrap;gap:12px">
                <a class="btn btn-primary btn-lg" href="${SITE.phoneTel}">${ICONS.phone} Hemen Ara (Ücretsiz Bilgi)</a>
                <a class="btn btn-whatsapp btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp'tan Yazın</a>
              </div>
            </div>
            
            <div class="side-box" style="padding:28px">
              <span class="side-box-title">Merkez Adres &amp; Çalışma Saatleri</span>
              <p style="font-weight:700;color:var(--navy);font-size:17px;margin-bottom:6px">${esc(SITE.brandName)} Merkez Servis</p>
              <p style="color:var(--slate);margin-bottom:20px">${esc(SITE.address)}<br>E-posta: ${esc(SITE.email)}</p>
              
              <span class="side-box-title">Servis Çalışma Saatlerimiz</span>
              <ul>
                <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)"><span>Pazartesi - Cuma</span><strong>08:00 – 21:00</strong></li>
                <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)"><span>Cumartesi</span><strong>08:30 – 20:00</strong></li>
                <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)"><span>Pazar (Nöbetçi Ekip)</span><strong>09:30 – 18:00</strong></li>
                <li style="display:flex;justify-content:space-between;padding:8px 0"><span>WhatsApp Ön Teşhis</span><strong style="color:var(--emerald)">7/24 Aktif</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>`
    }),
    '0.8',
    'monthly'
  );

  // 6.7 404 Sayfası
  writePage(
    '/404',
    renderLayout({
      title: `Sayfa Bulunamadı | ${SITE.brandName} • ${SITE.phoneDisplay}`,
      description: `Aradığınız sayfa bulunamadı. Kombi arıza ve bakım desteği için ${SITE.phoneDisplay} numaramızı ücretsiz arayabilirsiniz.`,
      canonicalPath: '/404',
      bodyContent: `
      <section class="section" style="text-align:center">
        <div class="container" style="max-width:640px">
          <span class="badge-pill">HATA 404</span>
          <h1>Aradığınız Sayfa Bulunamadı</h1>
          <p style="font-size:18px;color:var(--slate)">Aradığınız bağlantı taşınmış olabilir. Kombinizle ilgili acil bir sorun yaşıyorsanız aşağıdaki numaradan ustamıza ücretsiz danışabilir veya ana sayfaya dönebilirsiniz.</p>
          <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:12px;margin-top:24px">
            <a class="btn btn-primary btn-lg" href="${SITE.phoneTel}">${ICONS.phone} ${SITE.phoneDisplay}</a>
            <a class="btn btn-outline btn-lg" href="/">Anasayfaya Dön</a>
          </div>
        </div>
      </section>`
    })
  );
}

/* ==========================================================================
   7. SITEMAP.XML, ROBOTS.TXT, MANIFEST & HTACCESS / REWRITES
   ========================================================================== */
function buildSeoFiles() {
  const today = '2026-11-15';
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generatedUrls
  .map((u) => {
    const loc = u.urlPath === '/' ? `${SITE.domain}/` : `${SITE.domain}${u.urlPath}`;
    return `  <url>
    <loc>${esc(loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE.domain}/sitemap.xml
`;
  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robotsTxt, 'utf8');

  const manifestJson = {
    name: SITE.brandName,
    short_name: 'Aliağa Kombi',
    description: 'Aliağa ve Kuzey İzmir Garantili Kombi Bakım ve Teknik Servisi',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0F172A',
    icons: [
      {
        src: '/assets/img/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ]
  };
  fs.writeFileSync(path.join(ROOT_DIR, 'manifest.webmanifest'), JSON.stringify(manifestJson, null, 2), 'utf8');

  // Apache / LiteSpeed sunucular için .htaccess (Clean URL & Gzip/Brotli & Cache)
  const htaccess = `RewriteEngine On
RewriteBase /

# HTTPS yönlendirmesi
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Uzantısız temiz URL desteği
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^([^\.]+)$ $1.html [NC,L]

ErrorDocument 404 /404.html

# Core Web Vitals Tarayıcı Önbellekleme
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
`;
  fs.writeFileSync(path.join(ROOT_DIR, '.htaccess'), htaccess, 'utf8');
}

/* Çalıştır */
console.log('Aliağa Kombi Bakım statik sayfaları üretiliyor...');
buildHomePage();
buildDistrictPages();
buildBrandAndDistrictBrandPages();
buildAllErrorCodesHubPage();
buildFaultPages();
buildStaticCorePages();
buildSeoFiles();
console.log(`Tamamlandı! Toplam üretilen benzersiz SEO URL sayısı: ${generatedUrls.length}`);
