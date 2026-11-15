/**
 * Aliağa Kombi Bakım - Sıfır Bağımlılıklı Hızlı İstemci Scripti (CWV INP Optimized)
 */
(function () {
  "use strict";

  var D = document;
  var H = D.documentElement;

  /* 1. Mobil Çekmece Menü (Drawer) */
  var drawer = D.getElementById("drawer");
  var menuBtn = D.querySelector("[data-menu-open]");

  function toggleDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle("open", open);
    H.style.overflow = open ? "hidden" : "";
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      var firstLink = drawer.querySelector("nav a");
      if (firstLink) firstLink.focus();
    } else if (menuBtn) {
      menuBtn.focus();
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      toggleDrawer(true);
    });
  }

  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-menu-close") || e.target.closest("[data-menu-close]")) {
        toggleDrawer(false);
      }
    });
    D.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        toggleDrawer(false);
      }
    });
  }

  /* 2. Kaydırma Durumunda Header Gölgesi */
  var header = D.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* 3. Canlı Çalışma Saati & Nöbetçi Ekip Göstergesi */
  var statusEl = D.querySelector("[data-live-status]");
  if (statusEl) {
    try {
      var now = new Date();
      var hour = now.getHours();
      if (hour >= 8 && hour < 22) {
        statusEl.textContent = "Şu an açığız • Ücretsiz telefon danışmanlığı aktif";
      } else {
        statusEl.textContent = "Nöbetçi acil destek ve WhatsApp hattı aktif";
      }
    } catch (err) {}
  }

  /* 4. Canlı Hata Kodu Arama ve Marka Filtreleme (Hata Kodları Tablosu) */
  var searchInput = D.querySelector("[data-error-search]");
  var brandSelect = D.querySelector("[data-error-brand]");
  var tableBody = D.querySelector("[data-error-tbody]");
  var countEl = D.querySelector("[data-error-count]");

  function filterErrors() {
    if (!tableBody) return;
    var q = (searchInput ? searchInput.value : "").trim().toLowerCase();
    var b = brandSelect ? brandSelect.value : "";
    var rows = tableBody.querySelectorAll("tr");
    var visible = 0;

    rows.forEach(function (row) {
      var rowBrand = row.getAttribute("data-brand") || "";
      var text = (row.textContent || "").toLowerCase();
      var matchBrand = !b || rowBrand === b;
      var matchQuery = !q || text.indexOf(q) !== -1;
      var show = matchBrand && matchQuery;
      row.hidden = !show;
      if (show) visible++;
    });

    if (countEl) {
      countEl.textContent = visible + " kayıt gösteriliyor";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterErrors);
  }
  if (brandSelect) {
    brandSelect.addEventListener("change", filterErrors);
  }
})();
