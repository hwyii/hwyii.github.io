---
layout: page
title: Other
permalink: /other/
description: Side projects, work experience, presentations, and professional service.
nav: true
nav_order: 4
---

<style>
  .other-page .periodical {
    display: none !important;
  }

  .other-section-title {
    margin: 3.4rem 0 0.75rem;
  }

  .other-section-title:first-of-type {
    margin-top: 0;
  }

  .other-page .publications {
    margin-top: 0.75rem;
  }

  .other-page .publications ol.bibliography,
  .other-page .publications ol.bibliography > li:last-child {
    margin-bottom: 0;
  }

  .other-list ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  .other-list li {
    line-height: 1.55;
  }

  .other-list li + li {
    margin-top: 0.45rem;
  }

  .other-list .company-logo,
  .other-list .event-logo {
    display: inline-block;
    height: 1.1em;
    margin: 0 0.32em 0 0.06em;
    object-fit: contain;
    vertical-align: -0.18em;
  }

  .other-list .company-logo {
    width: 1.1em;
  }

  .other-list .event-logo {
    width: 2.43em;
    height: 1.3em;
    vertical-align: -0.25em;
  }

  html[data-theme="dark"] .other-list .company-logo--amazon {
    box-sizing: border-box;
    padding: 0.06em;
    border-radius: 0.16em;
    background: #f2f0eb;
  }

  .travel-map-block {
    width: 92%;
    margin: 0 auto;
  }

  .travel-map-description {
    margin: 0 0 0.65rem;
    color: var(--global-text-color-light);
  }

  .travel-map-frame {
    width: 100%;
    height: 360px;
    display: block;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.75rem;
    background: var(--global-bg-color);
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.08);
  }

  html[data-theme="dark"] .travel-map-frame {
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 576px) {
    .travel-map-block {
      width: 100%;
    }

    .travel-map-frame {
      height: 300px;
    }
  }
</style>

<div class="other-page">

<h3 class="other-section-title">Side Projects</h3>

<div class="publications">
  {% bibliography -f others %}
</div>

<h3 class="other-section-title">Work Experience</h3>

<div class="other-list">
  <ul>
    <li><img class="company-logo company-logo--amazon" src="{{ '/assets/img/company/amazon.svg' | relative_url }}" alt="" aria-hidden="true"><strong>Amazon</strong>, Applied Scientist Intern, Arlington, VA, Jun. 2026 - Aug. 2026</li>
    <li><img class="company-logo" src="{{ '/assets/img/company/articuler.png' | relative_url }}" alt="" aria-hidden="true"><strong>Articuler AI</strong>, Generative AI Development Intern, San Francisco, CA, Jun. 2024 - Aug. 2024</li>
    <li><img class="company-logo" src="{{ '/assets/img/company/elven.png' | relative_url }}" alt="" aria-hidden="true"><strong>Elven</strong>, Data Engineering Intern, Singapore, Jan. 2024 - May 2024</li>
  </ul>
</div>

<h3 class="other-section-title">Posters</h3>

<div class="other-list">
  <ul>
    <li><img class="event-logo" src="{{ '/assets/img/venues/aistats.svg' | relative_url }}" alt="" aria-hidden="true"><strong>AISTATS 2026</strong>, May 2026, Tangier, Morocco</li>
  </ul>
</div>

<h3 class="other-section-title">Professional Service</h3>

<div class="other-list">
  <ul>
    <li><strong>Reviewer:</strong> AISTATS, NeurIPS</li>
  </ul>
</div>

<h3 class="other-section-title">Travel Footprints</h3>

<div class="travel-map-block">
<p class="travel-map-description">A map of places I have explored.</p>

<iframe
  id="travel-footprints-map"
  class="travel-map-frame"
  src="https://via-kappa-two.vercel.app/?embed=1"
  title="Huiwen Yi's travel footprints"
  loading="lazy"
  referrerpolicy="no-referrer"
></iframe>
</div>

<script>
  (() => {
    const frame = document.getElementById('travel-footprints-map');
    if (!frame) return;

    if (window.location.port) {
      const localMapUrl = new URL(window.location.href);
      localMapUrl.port = '5173';
      localMapUrl.pathname = '/';
      localMapUrl.search = '?embed=1';
      localMapUrl.hash = '';
      frame.src = localMapUrl.toString();
    }

    const syncTheme = () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      if (!frame.contentWindow) return;

      let targetOrigin = '*';
      try {
        targetOrigin = new URL(frame.src, window.location.href).origin;
      } catch (_) {
        // The iframe still accepts the theme when its URL cannot be resolved.
      }
      frame.contentWindow.postMessage({ type: 'via-theme', theme }, targetOrigin);
    };

    const scheduleThemeSync = () => {
      syncTheme();
      window.setTimeout(syncTheme, 150);
      window.setTimeout(syncTheme, 600);
    };

    frame.addEventListener('load', scheduleThemeSync);
    window.addEventListener('message', (event) => {
      if (event.source === frame.contentWindow && event.data?.type === 'via-ready') {
        scheduleThemeSync();
      }
    });
    new MutationObserver(scheduleThemeSync).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  })();
</script>

</div>
