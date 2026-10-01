(() => {
  'use strict';
  const palettes = { cocoa: 'Cocoa', espresso: 'Espresso' };
  const storageKey = 'weiyi-academic-palette';
  let selected = 'cocoa';
  try {
    const saved = localStorage.getItem(storageKey);
    if (Object.hasOwn(palettes, saved)) selected = saved;
  } catch (_) { /* The default palette also works without browser storage. */ }

  function applyPalette(key) {
    document.documentElement.dataset.palette = key;
    document.documentElement.dataset.theme = key === 'espresso' ? 'dark' : 'light';
    document.querySelectorAll('[data-palette].palette-dot').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.palette === key));
    });
    const label = document.querySelector('.palette-name');
    if (label) label.textContent = palettes[key];
  }
  applyPalette(selected);

  document.addEventListener('DOMContentLoaded', () => {
    applyPalette(selected);
    document.querySelector('.palette-switcher').hidden = false;
    document.querySelectorAll('.palette-dot').forEach((button) => {
      button.addEventListener('click', () => {
        selected = button.dataset.palette;
        applyPalette(selected);
        try { localStorage.setItem(storageKey, selected); } catch (_) { /* Optional persistence. */ }
      });
    });

    const toggle = document.querySelector('.news-toggle');
    const extraNews = [...document.querySelectorAll('[data-extra-news]')];
    if (toggle && extraNews.length) {
      extraNews.forEach((item) => { item.hidden = true; });
      toggle.hidden = false;
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') !== 'true';
        extraNews.forEach((item) => { item.hidden = !expanded; });
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.textContent = expanded ? 'Show less' : `Show ${extraNews.length} more`;
      });
    }
  });
})();
