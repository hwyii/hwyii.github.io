(() => {
  "use strict";
  const palettes = { cocoa: "Cocoa", ink: "Ink", espresso: "Espresso" };
  const storageKey = "weiyi-academic-palette";
  let selected = "cocoa";
  try {
    const saved = localStorage.getItem(storageKey);
    if (Object.hasOwn(palettes, saved)) selected = saved;
  } catch (_) {
    /* The default palette also works without browser storage. */
  }
  const requestedPalette = new URLSearchParams(window.location.search).get("palette");
  if (Object.hasOwn(palettes, requestedPalette)) selected = requestedPalette;

  function applyPalette(key) {
    document.documentElement.dataset.palette = key;
    document.documentElement.dataset.theme = key === "espresso" ? "dark" : "light";
    document.querySelectorAll("[data-palette].palette-dot").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.palette === key));
    });
    const label = document.querySelector(".palette-name");
    if (label) label.textContent = palettes[key];
  }
  applyPalette(selected);

  document.addEventListener("DOMContentLoaded", () => {
    applyPalette(selected);
    document.querySelector(".palette-switcher").hidden = false;
    document.querySelectorAll(".palette-dot").forEach((button) => {
      button.addEventListener("click", () => {
        selected = button.dataset.palette;
        applyPalette(selected);
        try {
          localStorage.setItem(storageKey, selected);
        } catch (_) {
          /* Optional persistence. */
        }
      });
    });

    const sectionLinks = [...document.querySelectorAll("[data-section-link]")];
    const sections = [...document.querySelectorAll("[data-nav-section]")];
    if (sectionLinks.length && sections.length && "IntersectionObserver" in window) {
      const setActiveSection = (id) => {
        sectionLinks.forEach((link) => {
          const active = link.dataset.sectionLink === id;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      };
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setActiveSection(visible.target.id);
        },
        { rootMargin: "-72px 0px -58% 0px", threshold: [0.05, 0.25, 0.5] }
      );
      sections.forEach((section) => observer.observe(section));
    }

    const toggle = document.querySelector(".news-toggle");
    const extraNews = [...document.querySelectorAll("[data-extra-news]")];
    if (toggle && extraNews.length) {
      extraNews.forEach((item) => {
        item.hidden = true;
      });
      toggle.hidden = false;
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") !== "true";
        extraNews.forEach((item) => {
          item.hidden = !expanded;
        });
        toggle.setAttribute("aria-expanded", String(expanded));
        toggle.textContent = expanded ? "Show less" : `Show ${extraNews.length} more`;
      });
    }
  });
})();
