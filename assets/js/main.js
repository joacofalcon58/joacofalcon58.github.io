(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('lang-toggle');
  var opts = toggle.querySelectorAll('.lang-opt');
  var cvPrimary = document.querySelector('.hero-actions .btn-primary');
  var cvAltLink = document.querySelector('.cv-alt a');

  var CV_HREF = {
    es: { primary: 'assets/cv/CV_Joaquin_Falcon_ES.pdf', alt: 'assets/cv/CV_Joaquin_Falcon_EN.pdf' },
    en: { primary: 'assets/cv/CV_Joaquin_Falcon_EN.pdf', alt: 'assets/cv/CV_Joaquin_Falcon_ES.pdf' }
  };

  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);

    opts.forEach(function (o) {
      o.classList.toggle('is-active', o.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('[data-es][data-en]').forEach(function (el) {
      el.innerHTML = el.getAttribute('data-' + lang);
    });

    var hrefs = CV_HREF[lang];
    cvPrimary.setAttribute('href', hrefs.primary);
    cvAltLink.setAttribute('href', hrefs.alt);

    try { localStorage.setItem('portfolio-lang', lang); } catch (e) {}
  }

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-lang') === 'en' ? 'en' : 'es';
    applyLang(current === 'es' ? 'en' : 'es');
  });

  var saved = 'es';
  try { saved = localStorage.getItem('portfolio-lang') || 'es'; } catch (e) {}
  applyLang(saved);

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
