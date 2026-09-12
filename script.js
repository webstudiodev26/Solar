/* =========================================================
   Suncokret Solar — JavaScript
   1) Mobilni meni (hamburger)
   2) Kalkulator uštede
   3) FAQ akordeon
   4) Kontakt forma
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1) MOBILNI MENI ---------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    // Zatvori meni kad se klikne na link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ---------- 2) KALKULATOR UŠTEDE ---------- */
  const bill = document.getElementById('bill');
  if (bill) {
    // Faktori prinosa po orijentaciji krova
    const FACTORS = { jug: 1, iz: 0.9, sever: 0.7 };
    const PRICE_KWH = 10;       // okvirna cena struje (RSD/kWh)
    const COST_PER_KW = 120000; // okvirna cena po 1 kW instaliranog sistema (RSD)
    const EUR = 117;            // okvirni kurs za prikaz u evrima

    const orient    = document.getElementById('orient');
    const elBill    = document.getElementById('billValue');
    const elKw      = document.getElementById('resKw');
    const elSavings = document.getElementById('resSavings');
    const elInvest  = document.getElementById('resInvest');
    const elEur     = document.getElementById('resEur');
    const elPayback = document.getElementById('resPayback');
    const el25      = document.getElementById('res25');

    // Formatira broj u srpskom formatu (12000 -> "12.000")
    function fmt(n) { return Math.round(n).toLocaleString('sr-RS'); }

    function updateCalc() {
      const monthly = parseInt(bill.value, 10);
      const factor = FACTORS[orient.value] || 1;
      const annualBill = monthly * 12;
      const coverage = Math.min(0.9, 0.85 * factor);
      const annualSavings = annualBill * coverage;
      const kw = Math.max(2, Math.round(((annualBill / PRICE_KWH * 0.85) / 1300) * 10) / 10);
      const invest = kw * COST_PER_KW;
      const payback = Math.round(invest / annualSavings * 10) / 10;
      const savings25 = annualSavings * 25 - invest;

      elBill.textContent    = fmt(monthly) + ' RSD';
      elKw.textContent      = kw + ' kW';
      elSavings.textContent = fmt(annualSavings) + ' RSD';
      elInvest.textContent  = fmt(invest) + ' RSD';
      elEur.textContent     = fmt(invest / EUR);
      elPayback.textContent = payback + ' god.';
      el25.textContent      = fmt(savings25) + ' RSD';
    }

    bill.addEventListener('input', updateCalc);
    orient.addEventListener('change', updateCalc);
    updateCalc(); // početni prikaz
  }

  /* ---------- 3) FAQ AKORDEON ---------- */
  document.querySelectorAll('.faq__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      // zatvori sve
      document.querySelectorAll('.faq__item').forEach(function (i) {
        i.classList.remove('open');
        const ic = i.querySelector('.faq__icon');
        if (ic) ic.textContent = '+';
        const b = i.querySelector('.faq__q');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      // otvori kliknuti (ako već nije bio otvoren)
      if (!isOpen) {
        item.classList.add('open');
        const ic = item.querySelector('.faq__icon');
        if (ic) ic.textContent = '–';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- 4) KONTAKT FORMA ---------- */
  const form = document.getElementById('contactForm');
  const thanks = document.getElementById('contactThanks');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Ovde možete povezati slanje na email/server (npr. fetch na svoj backend).
      form.hidden = true;
      if (thanks) thanks.hidden = false;
    });
  }

});
