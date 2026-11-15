/**
 * Aliağa Kombi Bakım (aliagakombibakim.com) - Tam Kapsamlı Statik Site Üretici (SSG)
 * GitHub Pages & Yerel Dosya (file://) %100 Uyumlu | Core Web Vitals 100/100
 */

const fs = require('fs');
const path = require('path');
const { SITE, DISTRICTS } = require('./data/site');
const { BRANDS } = require('./data/brands');
const { FAULTS } = require('./data/faults');

const ROOT_DIR = __dirname;

/* Yardımcı Fonksiyonlar */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Sayfadaki tüm kök bazlı (/...) linkleri ve kaynak yollarını (assets/...)
 * dosyanın bulunduğu klasör derinliğine göre (./, ../, ../../) otomatik dönüştürür.
 * Böylece hem bilgisayarda doğrudan çift tıklayarak (file://), hem GitHub Pages alt klasöründe
 * (username.github.io/repo/), hem de ana domainde (aliagakombibakim.com) %100 sorunsuz çalışır.
 */
function localizeHtmlForDepth(html, depth, isFileProtocolFriendly = true) {
  const prefix = depth === 0 ? './' : '../'.repeat(depth);

  return html.replace(/(href|src)="\/([^"]*)"/g, (match, attr, target) => {
    // Ana sayfa linki: href="/"
    if (target === '') {
      return `${attr}="${prefix}index.html"`;
    }
    // Statik varlıklar veya uzantılı dosyalar (assets/..., sitemap.xml, manifest.webmanifest)
    if (
      target.startsWith('assets/') ||
      target.endsWith('.xml') ||
      target.endsWith('.webmanifest') ||
      target.endsWith('.html')
    ) {
      return `${attr}="${prefix}${target}"`;
    }
    // Anchor içeren iç sayfa linkleri (örn: /kombi-bakimi#detay)
    const [cleanPath, hash] = target.split('#');
    const hashSuffix = hash ? `#${hash}` : '';
    // Hem GitHub Pages hem yerel file:// açılışında çalışması için .html uzantılı göreceli link
    if (isFileProtocolFriendly) {
      return `${attr}="${prefix}${cleanPath}.html${hashSuffix}"`;
    }
    return `${attr}="${prefix}${cleanPath}/${hashSuffix}"`;
  });
}

function writePage(urlPath, htmlContent) {
  const clean = urlPath.replace(/^\/+|\/+$/g, '');
  if (!clean) {
    // Ana sayfa: index.html (derinlik = 0)
    const rootHtml = localizeHtmlForDepth(htmlContent, 0, true);
    fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), rootHtml, 'utf8');
    return;
  }

  const segments = clean.split('/');

  // 1) Doğrudan .html dosyası (örn: aliaga-kombi-bakim-teknik-servisi.html -> derinlik 0,
  //    aliaga/baymak-kombi-bakim-teknik-servisi.html -> derinlik 1)
  const htmlFileDepth = segments.length - 1;
  const htmlFilePath = path.join(ROOT_DIR, `${clean}.html`);
  fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });
  fs.writeFileSync(
    htmlFilePath,
    localizeHtmlForDepth(htmlContent, htmlFileDepth, true),
    'utf8'
  );

  // 2) Klasör bazlı temiz URL (örn: /aliaga-kombi-bakim-teknik-servisi/index.html -> derinlik 1,
  //    /aliaga/baymak-kombi-bakim-teknik-servisi/index.html -> derinlik 2)
  const dirIndexDepth = segments.length;
  const dirPath = path.join(ROOT_DIR, clean);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(
    path.join(dirPath, 'index.html'),
    localizeHtmlForDepth(htmlContent, dirIndexDepth, true),
    'utf8'
  );
}

/* SVG İkon Kütüphanesi */
const ICONS = {
  phone: `<svg class="ic" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp: `<svg class="ic" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  check: `<svg class="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,
  shield: `<svg class="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  pin: `<svg class="ic" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  wrench: `<svg class="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  flame: `<svg class="ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  menu: `<svg class="ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h12M4 17h16"/></svg>`,
  close: `<svg class="ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  search: `<svg class="ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`
};

const LOGO_SVG = `<svg class="brand-logo-icon" viewBox="0 0 48 48" aria-hidden="true">
  <rect width="48" height="48" rx="12" fill="#0F172A"/>
  <rect x="3" y="3" width="42" height="42" rx="9" fill="none" stroke="#E84A1B" stroke-width="2" stroke-opacity="0.5"/>
  <path d="M24 9c5.2 6.2 9.5 10.8 9.5 17a9.5 9.5 0 0 1-19 0c0-3.8 1.7-6.5 4.2-9 .4 2.7 1.7 4.2 3.4 4.7-.6-4.7.5-8.7 1.9-12.7z" fill="#E84A1B"/>
  <path d="M24 22c2.2 2.8 4 4.8 4 7.6a4 4 0 0 1-8 0c0-2.8 1.8-4.8 4-7.6z" fill="#FFF1EC"/>
</svg>`;

/* Kuzey İzmir / Bakırçay ve Sahil Aksı İnteraktif SVG Harita Üretici */
function renderRegionalMapSvg(activeDistrictId = 'aliaga') {
  const nodesHtml = DISTRICTS.map((d) => {
    const isCurrent = d.id === activeDistrictId;
    const cls = isCurrent ? 'map-node active' : 'map-node';
    const r = isCurrent ? 10 : 6.5;
    const pulse = isCurrent
      ? `<circle class="map-pulse" cx="${d.mapCoords.x}" cy="${d.mapCoords.y}" r="18"/>`
      : '';
    return `<a class="${cls}" href="/${d.slug}" aria-label="${esc(d.name)} Kombi Bakım ve Teknik Servisi">
      ${pulse}
      <circle class="map-dot" cx="${d.mapCoords.x}" cy="${d.mapCoords.y}" r="${r}"/>
      <text x="${d.mapCoords.x}" y="${d.mapCoords.y - 14}">${esc(d.name)}</text>
    </a>`;
  }).join('\n');

  return `<svg class="map-svg" viewBox="120 40 780 560" role="img" aria-label="Aliağa ve Kuzey İzmir Kombi Servis Bölgeleri Haritası">
    <defs>
      <pattern id="map-dots" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.3" fill="#E84A1B" fill-opacity="0.18"/>
      </pattern>
    </defs>
    <rect x="120" y="40" width="780" height="560" fill="#E6F2FF"/>
    <path class="map-land" d="M360 40 L900 40 L900 600 L440 600 L410 530 L340 500 L220 465 L235 410 L290 385 L355 360 L405 335 L385 280 L330 225 L365 180 L415 150 L405 95 Z"/>
    <path d="M360 40 L900 40 L900 600 L440 600 L410 530 L340 500 L220 465 L235 410 L290 385 L355 360 L405 335 L385 280 L330 225 L365 180 L415 150 L405 95 Z" fill="url(#map-dots)"/>
    <path class="map-road" d="M420 340 L460 260 L640 150 L800 190"/>
    <path class="map-road" d="M460 260 L350 210 L430 110"/>
    <path class="map-road" d="M420 340 L310 380 L250 440"/>
    <path class="map-road" d="M420 340 L470 490 L760 540"/>
    <text x="165" y="295" fill="#3B82F6" fill-opacity="0.65" font-family="JetBrains Mono, monospace" font-size="13" font-weight="700" letter-spacing="3">EGE DENİZİ</text>
    <text x="580" y="90" fill="#64748B" font-family="JetBrains Mono, monospace" font-size="11.5" font-weight="700" letter-spacing="2">BAKIRÇAY &amp; KUZEY İZMİR ROTASI</text>
    ${nodesHtml}
  </svg>`;
}

/* Ana Sayfa Özgün Termodinamik Kombi Kesiti SVG */
function renderBoilerSchematicSvg() {
  return `<svg viewBox="0 0 600 540" role="img" aria-labelledby="boiler-svg-title boiler-svg-desc">
    <title id="boiler-svg-title">Tam Yoğuşmalı Kombi İç Mimarisi ve Kontrol Noktaları</title>
    <desc id="boiler-svg-desc">Eşanjör, fan motoru, üç yollu vana, sirkülasyon pompası, genleşme tankı, iyonizasyon elektrodu ve dijital manometre noktalarını gösteren teknik şema.</desc>
    <defs>
      <pattern id="bg-grid-sm" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" fill="none" stroke="#E84A1B" stroke-opacity="0.08" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="600" height="540" fill="#FFFDFB"/>
    <rect width="600" height="540" fill="url(#bg-grid-sm)"/>
    <rect x="278" y="12" width="44" height="56" rx="4" fill="#fff" stroke="#0F172A" stroke-width="2.5"/>
    <path d="M278 30h44M278 46h44" stroke="#E84A1B" stroke-width="1.5" stroke-dasharray="4 3"/>
    <rect x="166" y="64" width="268" height="376" rx="24" fill="#fff" stroke="#0F172A" stroke-width="3"/>
    <rect x="186" y="84" width="228" height="254" rx="14" fill="#FFF8F5" stroke="#E84A1B" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="6 4"/>
    <rect x="195" y="98" width="26" height="68" rx="13" fill="#FEE2E2" stroke="#0F172A" stroke-width="2"/>
    <path d="M195 132h26" stroke="#E84A1B" stroke-width="2.5"/>
    <circle cx="300" cy="122" r="28" fill="#fff" stroke="#0F172A" stroke-width="2.2"/>
    <g class="spin-fan" style="transform-origin:300px 122px">
      <circle cx="300" cy="122" r="16" fill="none" stroke="#E84A1B" stroke-width="2"/>
      <path d="M300 106v32M284 122h32M289 111l22 22M311 111l-22 22" stroke="#E84A1B" stroke-width="2.4" stroke-linecap="round"/>
    </g>
    <path d="M238 168h124a8 8 0 0 1 0 16H238a8 8 0 0 0 0 16h124a8 8 0 0 1 0 16H238" fill="none" stroke="#E84A1B" stroke-width="4.2" stroke-linecap="round"/>
    <g class="flame-anim" fill="#E84A1B">
      <path style="transform-origin:250px 245px" d="M250 245c-5-5-4-11 0-18 4 7 5 13 0 18z"/>
      <path style="transform-origin:270px 245px" d="M270 245c-5-5-4-11 0-18 4 7 5 13 0 18z"/>
      <path style="transform-origin:290px 245px" d="M290 245c-5-5-4-11 0-18 4 7 5 13 0 18z"/>
      <path style="transform-origin:310px 245px" d="M310 245c-5-5-4-11 0-18 4 7 5 13 0 18z"/>
      <path style="transform-origin:330px 245px" d="M330 245c-5-5-4-11 0-18 4 7 5 13 0 18z"/>
      <path style="transform-origin:350px 245px" d="M350 245c-5-5-4-11 0-18 4 7 5 13 0 18z"/>
    </g>
    <rect x="234" y="245" width="132" height="11" rx="5" fill="#0F172A"/>
    <rect x="206" y="280" width="96" height="42" rx="6" fill="#fff" stroke="#0F172A" stroke-width="2"/>
    <path d="M216 292h76M216 301h76M216 310h76" stroke="#E84A1B" stroke-width="1.6"/>
    <circle cx="362" cy="301" r="22" fill="#fff" stroke="#0F172A" stroke-width="2.2"/>
    <g class="spin-fan" style="transform-origin:362px 301px;animation-duration:2.2s">
      <path d="M362 287v28M348 301h28" stroke="#059669" stroke-width="2.8" stroke-linecap="round"/>
    </g>
    <rect x="206" y="354" width="188" height="54" rx="12" fill="#0F172A"/>
    <text x="224" y="387" fill="#6EE7B7" font-family="JetBrains Mono, monospace" font-size="16" font-weight="700">1.5 bar • 52°C</text>
    <circle cx="372" cy="381" r="8" fill="#E84A1B"/>
    <g stroke="#0F172A" stroke-width="2.5">
      <path d="M212 440v52"/><path d="M256 440v52"/><path d="M300 440v52"/><path d="M344 440v52"/><path d="M388 440v52"/>
    </g>
    <rect x="291" y="458" width="18" height="16" rx="3" fill="#FACC15" stroke="#0F172A" stroke-width="1.8"/>
    <rect x="379" y="458" width="18" height="16" rx="3" fill="#E84A1B" stroke="#0F172A" stroke-width="1.8"/>
    <g font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700" fill="#334155" text-anchor="middle">
      <text x="212" y="510">GİDİŞ</text>
      <text x="256" y="510">SICAK SU</text>
      <text x="300" y="510">GAZ VANASI</text>
      <text x="344" y="510">SOĞUK SU</text>
      <text x="388" y="510">FİLTRE/DÖNÜŞ</text>
    </g>
    <g font-family="Inter, sans-serif" font-size="12.5" font-weight="700" fill="#0F172A">
      <line x1="195" y1="128" x2="142" y2="128" stroke="#94A3B8" stroke-width="1.4"/>
      <circle cx="130" cy="128" r="11" fill="#0F172A"/><text x="130" y="132" fill="#fff" font-size="10.5" text-anchor="middle">01</text>
      <text x="112" y="132" text-anchor="end">Genleşme Tankı</text>

      <line x1="236" y1="184" x2="142" y2="184" stroke="#94A3B8" stroke-width="1.4"/>
      <circle cx="130" cy="184" r="11" fill="#E84A1B"/><text x="130" y="188" fill="#fff" font-size="10.5" text-anchor="middle">02</text>
      <text x="112" y="188" text-anchor="end">Ana Eşanjör</text>

      <line x1="234" y1="242" x2="142" y2="242" stroke="#94A3B8" stroke-width="1.4"/>
      <circle cx="130" cy="242" r="11" fill="#0F172A"/><text x="130" y="246" fill="#fff" font-size="10.5" text-anchor="middle">03</text>
      <text x="112" y="246" text-anchor="end">Brülör &amp; Elektrot</text>

      <line x1="206" y1="301" x2="142" y2="301" stroke="#94A3B8" stroke-width="1.4"/>
      <circle cx="130" cy="301" r="11" fill="#E84A1B"/><text x="130" y="305" fill="#fff" font-size="10.5" text-anchor="middle">04</text>
      <text x="112" y="305" text-anchor="end">Plaka Eşanjör</text>

      <line x1="328" y1="122" x2="454" y2="122" stroke="#94A3B8" stroke-width="1.4"/>
      <circle cx="466" cy="122" r="11" fill="#E84A1B"/><text x="466" y="126" fill="#fff" font-size="10.5" text-anchor="middle">05</text>
      <text x="484" y="126">Atık Gaz Fanı</text>

      <line x1="384" y1="301" x2="454" y2="301" stroke="#94A3B8" stroke-width="1.4"/>
      <circle cx="466" cy="301" r="11" fill="#059669"/><text x="466" y="305" fill="#fff" font-size="10.5" text-anchor="middle">06</text>
      <text x="484" y="305">Devirdaim Pompası</text>

      <line x1="394" y1="381" x2="454" y2="381" stroke="#94A3B8" stroke-width="1.4"/>
      <circle cx="466" cy="381" r="11" fill="#0F172A"/><text x="466" y="385" fill="#fff" font-size="10.5" text-anchor="middle">07</text>
      <text x="484" y="385">Anakart &amp; Basınç</text>
    </g>
    <text x="20" y="528" font-family="JetBrains Mono, monospace" font-size="10" fill="#64748B" letter-spacing="1.4">TERMODİNAMİK KESİT • ALİAĞA KOMBİ BAKIM</text>
  </svg>`;
}

/* Ortak HTML İskeleti */
function renderLayout({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  activeNav = '',
  schemaJson = [],
  bodyContent
}) {
  const canonicalUrl = canonicalPath === '/' ? `${SITE.domain}/` : `${SITE.domain}${canonicalPath}`;
  const ogImage = `${SITE.domain}/assets/img/og-paylasim.svg`;

  const baseBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${SITE.domain}/#organization`,
    name: SITE.brandName,
    url: `${SITE.domain}/`,
    telephone: SITE.phoneRaw,
    priceRange: '₺₺',
    image: ogImage,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kültür Mah. İstiklal Cad. No:48/A',
      addressLocality: 'Aliağa',
      addressRegion: 'İzmir',
      postalCode: '35800',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng
    },
    areaServed: DISTRICTS.map((d) => ({
      '@type': 'City',
      name: `${d.name}, İzmir`
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:30',
        closes: '18:00'
      }
    ]
  };

  const allSchemas = [baseBusinessSchema, ...schemaJson];

  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${esc(canonicalUrl)}">
  
  <!-- Geo & Local SEO Meta -->
  <meta name="geo.region" content="${SITE.geo.region}">
  <meta name="geo.placename" content="${esc(SITE.geo.placename)}">
  <meta name="geo.position" content="${SITE.geo.lat};${SITE.geo.lng}">
  <meta name="ICBM" content="${SITE.geo.lat}, ${SITE.geo.lng}">
  
  <!-- Open Graph / Facebook / WhatsApp -->
  <meta property="og:locale" content="tr_TR">
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="${esc(SITE.brandName)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonicalUrl)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(title)}">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${ogImage}">
  
  <meta name="theme-color" content="#0F172A">
  <meta name="format-detection" content="telephone=no">
  <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/manifest.webmanifest">
  
  <!-- Core Web Vitals Font Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap">
  <link rel="stylesheet" href="/assets/css/style.css">
  
  <script type="application/ld+json">${JSON.stringify(allSchemas)}</script>
</head>
<body>
  <a class="skip-link" href="#icerik">Ana içeriğe atla</a>
  
  <!-- Üst Bilgi ve Ücretsiz Danışma Şeridi -->
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <span class="pulse-dot" aria-hidden="true"></span>
        <span>Ücretsiz Arıza Ön Teşhis &amp; Bilgi Hattı</span>
        <span class="topbar-sub">• Aliağa, Foça, Yeni Şakran, Bergama, Dikili, Menemen, Kemalpaşa, Kınık</span>
      </div>
      <div class="topbar-right">
        <span class="live-status" data-live-status>Şu an açığız • Ücretsiz telefon danışmanlığı aktif</span>
        <a href="/kombi-hata-kodlari-ve-cozumleri">Hata Kodları Rehberi</a>
      </div>
    </div>
  </div>
  
  <!-- Sticky Header -->
  <header class="site-header" data-header>
    <div class="container">
      <a class="brand-logo" href="/" aria-label="${esc(SITE.brandName)} Anasayfa">
        ${LOGO_SVG}
        <span class="brand-logo-text">
          <b>${esc(SITE.brandName)}</b>
          <small>${esc(SITE.brandSub)}</small>
        </span>
      </a>
      
      <nav class="main-nav" aria-label="Ana Menü">
        <a href="/kombi-bakimi"${activeNav === 'bakim' ? ' aria-current="page"' : ''}>Kombi Bakımı</a>
        <a href="/petek-temizligi"${activeNav === 'petek' ? ' aria-current="page"' : ''}>Petek Temizliği</a>
        <a href="/servis-bolgeleri"${activeNav === 'bolgeler' ? ' aria-current="page"' : ''}>Servis Bölgeleri</a>
        <a href="/kombi-markalari"${activeNav === 'markalar' ? ' aria-current="page"' : ''}>Markalar</a>
        <a href="/kombi-hata-kodlari-ve-cozumleri"${activeNav === 'kodlar' ? ' aria-current="page"' : ''}>Hata Kodları</a>
        <a href="/iletisim"${activeNav === 'iletisim' ? ' aria-current="page"' : ''}>İletişim</a>
      </nav>
      
      <a class="header-cta" href="${SITE.phoneTel}" aria-label="Ücretsiz bilgi ve servis için hemen arayın: ${SITE.phoneDisplay}">
        <span class="header-cta-icon">${ICONS.phone}</span>
        <span class="header-cta-text">
          <small>Ücretsiz Bilgi Alın</small>
          <b>${SITE.phoneDisplay}</b>
        </span>
      </a>
      
      <button class="menu-toggle" type="button" aria-controls="drawer" aria-expanded="false" data-menu-open>
        ${ICONS.menu}
        <span class="sr-only">Menüyü aç</span>
      </button>
    </div>
  </header>
  
  <!-- Mobil Çekmece Menü -->
  <div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Gezinme Menüsü">
    <div class="drawer-backdrop" data-menu-close></div>
    <div class="drawer-panel">
      <div class="drawer-head">
        <span>Hızlı Menü</span>
        <button type="button" data-menu-close aria-label="Menüyü kapat">${ICONS.close}</button>
      </div>
      <nav class="drawer-nav" aria-label="Mobil Menü">
        <a href="/">Anasayfa <span>→</span></a>
        <a href="/kombi-bakimi">Periyodik Kombi Bakımı <span>→</span></a>
        <a href="/petek-temizligi">Makineli Petek Temizliği <span>→</span></a>
        <a href="/servis-bolgeleri">Hizmet Verdiğimiz İlçeler <span>→</span></a>
        <a href="/kombi-markalari">Kombi Markaları <span>→</span></a>
        <a href="/kombi-hata-kodlari-ve-cozumleri">Tüm Hata Kodları ve Çözümleri <span>→</span></a>
        <a href="/hakkimizda">Hakkımızda <span>→</span></a>
        <a href="/iletisim">İletişim &amp; Adres <span>→</span></a>
      </nav>
      <div class="free-advice-banner" style="margin:auto 0 0;padding:16px">
        <div class="free-advice-banner-top"><span class="pulse-dot"></span> ÜCRETSİZ TELEFON DESTEĞİ</div>
        <p style="font-size:13.5px;margin-bottom:12px">Servis çağırmadan önce arayıp arıza kodunu söyleyin, evde çözebileceğiniz bir durumsa ücretsiz tarif edelim.</p>
        <a class="btn btn-primary btn-full" href="${SITE.phoneTel}">${ICONS.phone} ${SITE.phoneDisplay}</a>
        <a class="btn btn-whatsapp btn-full" style="margin-top:8px" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp'tan Sorun</a>
      </div>
    </div>
  </div>
  
  <main id="icerik">
    ${bodyContent}
  </main>
  
  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-cta">
      <div class="container">
        <div>
          <span class="eyebrow" style="color:#fff">ÜCRETSİZ DANIŞMA &amp; ACİL SERVİS HATTI</span>
          <p class="footer-cta-title">Kombiniz arıza mı verdi? Hemen arayın, ekrandaki kodu söyleyin; ustamızdan ücretsiz bilgi ve ön teşhis alın.</p>
        </div>
        <div class="footer-cta-actions">
          <a class="footer-phone-big" href="${SITE.phoneTel}">${ICONS.phone} ${SITE.phoneDisplay}</a>
          <a class="btn btn-whatsapp btn-lg" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp Destek</a>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand-logo" href="/" style="margin-bottom:14px">
            ${LOGO_SVG}
            <span class="brand-logo-text">
              <b style="color:#fff">${esc(SITE.brandName)}</b>
              <small>${esc(SITE.brandSub)}</small>
            </span>
          </a>
          <p style="line-height:1.6;margin-bottom:14px">Aliağa merkezli gezici teknik servis araçlarımızla Foça, Yeni Şakran, Bergama, Dikili, Menemen, Kemalpaşa, Kınık ve Çandarlı genelinde tüm marka kombilere 1 yıl garantili tamir, yıllık bakım ve makineli petek temizliği sunuyoruz.</p>
          <p style="margin:0;color:#fff;font-weight:700">${ICONS.pin} ${esc(SITE.address)}</p>
          <p style="margin:6px 0 0;color:#6EE7B7;font-weight:700">${ICONS.phone} <a href="${SITE.phoneTel}" style="color:#6EE7B7">${SITE.phoneDisplay}</a> (7/24 Bilgi &amp; Çağrı)</p>
        </div>
        
        <div>
          <span class="footer-col-title">Servis İlçelerimiz</span>
          <ul class="footer-links footer-links-2col">
            ${DISTRICTS.map((d) => `<li><a href="/${d.slug}">${esc(d.name)}</a></li>`).join('')}
          </ul>
        </div>
        
        <div>
          <span class="footer-col-title">Kombi Markaları</span>
          <ul class="footer-links footer-links-2col">
            ${BRANDS.map((b) => `<li><a href="/${b.slug}">${esc(b.name)}</a></li>`).join('')}
          </ul>
        </div>
        
        <div>
          <span class="footer-col-title">Arıza &amp; Hata Rehberi</span>
          <ul class="footer-links">
            <li><a href="/kombi-hata-kodlari-ve-cozumleri"><strong style="color:#fff">Tüm Hata Kodları ve Çözümleri</strong></a></li>
            ${FAULTS.slice(0, 7).map((f) => `<li><a href="/${f.slug}">${esc(f.shortTitle)}</a></li>`).join('')}
            <li><a href="/kombi-bakimi">Yıllık Kombi Bakımı</a></li>
            <li><a href="/petek-temizligi">Makineli Petek Temizliği</a></li>
          </ul>
        </div>
      </div>
      
      <p class="footer-legal">${esc(SITE.legalNote)}</p>
      
      <div class="footer-bottom">
        <span>© 2026 ${esc(SITE.brandName)} (${SITE.domain.replace('https://', '')}) • Tüm Hakları Saklıdır.</span>
        <nav aria-label="Alt Menü">
          <a href="/hakkimizda">Hakkımızda</a>
          <a href="/iletisim">İletişim</a>
          <a href="/servis-bolgeleri">Servis Bölgeleri</a>
          <a href="/kombi-hata-kodlari-ve-cozumleri">Hata Kodları</a>
          <a href="/sitemap.xml">Site Haritası</a>
        </nav>
      </div>
    </div>
  </footer>
  
  <!-- Mobil Sabit Çağrı ve WhatsApp Barı -->
  <div class="mobile-sticky-bar">
    <a class="m-btn-call" href="${SITE.phoneTel}">${ICONS.phone} Ücretsiz Danış: ${SITE.phoneDisplay}</a>
    <a class="m-btn-wa" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp</a>
  </div>
  
  <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

/* Sağ Sütun (Sidebar) Sabit Destek Kartı Bileşeni */
function renderSidebarSupportCard(contextTitle = 'Ücretsiz Arıza Ön Teşhisi') {
  return `<aside class="support-card" aria-label="Ücretsiz Destek ve Servis Hattı">
    <span class="support-card-tag"><span class="pulse-dot"></span> ÜCRETSİZ BİLGİ HATTI</span>
    <p class="support-card-title">${esc(contextTitle)}</p>
    <p class="support-card-desc">Hemen servis çağırmak zorunda değilsiniz! Kombinizin markasını ve ekrandaki hata kodunu söyleyin; evde kendinizin çözebileceği bir durumsa ustamız telefonda ücretsiz tarif etsin.</p>
    <ul class="support-card-checks">
      <li>${ICONS.check} <span>Telefonda ücretsiz usta danışmanlığı</span></li>
      <li>${ICONS.check} <span>Onarım öncesi net fiyat, sürpriz yok</span></li>
      <li>${ICONS.check} <span>Değişen parça + işçilik 1 yıl garantili</span></li>
    </ul>
    <a class="support-card-phone" href="${SITE.phoneTel}">${SITE.phoneDisplay}</a>
    <a class="btn btn-primary btn-full" href="${SITE.phoneTel}">${ICONS.phone} Hemen Ara &amp; Bilgi Al</a>
    <a class="btn btn-whatsapp btn-full" href="${SITE.whatsappUrl}" target="_blank" rel="noopener">${ICONS.whatsapp} WhatsApp'tan Fotoğraf Gönder</a>
  </aside>`;
}

module.exports = {
  esc,
  writePage,
  ICONS,
  LOGO_SVG,
  renderRegionalMapSvg,
  renderBoilerSchematicSvg,
  renderLayout,
  renderSidebarSupportCard
};
