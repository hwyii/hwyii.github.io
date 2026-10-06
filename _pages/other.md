---
layout: academic-page
title: Other
permalink: /other/
description: Work experience, presentations, professional service, and travel footprints.
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

  html[data-theme="dark"] .entry-logo--amazon {
    box-sizing: border-box;
    padding: 0.06em;
    border-radius: 0.16em;
    background: #f2f0eb;
  }

  .entry-item {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr) auto;
    align-items: center;
    column-gap: 14px;
    padding: 0.35rem 0;
  }

  .entry-logo {
    width: 20px;
    height: 20px;
    justify-self: center;
    object-fit: contain;
  }

  .entry-logo--seal {
    width: 30px;
    height: 30px;
  }

  .entry-logo--wide {
    width: 40px;
    height: auto;
  }

  .entry-info {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0 0.5rem;
    line-height: 1.45;
  }

  .entry-name {
    font-weight: 600;
  }

  .entry-detail,
  .entry-date {
    font-size: 0.92em;
    color: var(--global-text-color-light);
  }

  .entry-date {
    white-space: nowrap;
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
    .entry-item {
      grid-template-columns: 36px minmax(0, 1fr);
    }

    .entry-logo {
      width: 18px;
      height: 18px;
    }

    .entry-logo--seal {
      width: 26px;
      height: 26px;
    }

    .entry-logo--wide {
      width: 36px;
      height: auto;
    }

    .entry-date {
      grid-column: 2;
    }

    .travel-map-block {
      width: 100%;
    }

    .travel-map-frame {
      height: 300px;
    }
  }
</style>

<div class="other-page">

<h3 class="other-section-title">Work Experience</h3>

<div class="entry-list">
  <div class="entry-item">
    <img class="entry-logo entry-logo--amazon" src="{{ '/assets/img/company/amazon.svg' | relative_url }}" alt="" aria-hidden="true">
    <div class="entry-info">
      <span class="entry-name">Amazon</span>
      <span class="entry-detail">Applied Scientist Intern · Arlington, VA</span>
    </div>
    <span class="entry-date">Jun 2026 – Aug 2026</span>
  </div>
  <div class="entry-item">
    <img class="entry-logo" src="{{ '/assets/img/company/articuler.png' | relative_url }}" alt="" aria-hidden="true">
    <div class="entry-info">
      <span class="entry-name">Articuler AI</span>
      <span class="entry-detail">Generative AI Development Intern · San Francisco, CA</span>
    </div>
    <span class="entry-date">Jun 2024 – Aug 2024</span>
  </div>
  <div class="entry-item">
    <img class="entry-logo" src="{{ '/assets/img/company/elven.png' | relative_url }}" alt="" aria-hidden="true">
    <div class="entry-info">
      <span class="entry-name">Elven</span>
      <span class="entry-detail">Data Engineering Intern · Singapore</span>
    </div>
    <span class="entry-date">Jan 2024 – May 2024</span>
  </div>
</div>

<h3 class="other-section-title">Posters</h3>

<div class="entry-list">
  <div class="entry-item">
    <img class="entry-logo entry-logo--wide" src="{{ '/assets/img/venues/aistats.svg' | relative_url }}" alt="" aria-hidden="true">
    <div class="entry-info">
      <span class="entry-name">AISTATS 2026</span>
      <span class="entry-detail">Tangier, Morocco</span>
    </div>
    <span class="entry-date">May 2026</span>
  </div>
</div>

<h3 class="other-section-title">Invited Talks</h3>

<div class="entry-list">
  <div class="entry-item">
    <img class="entry-logo entry-logo--seal" src="{{ '/assets/img/venues/msu.svg' | relative_url }}" alt="" aria-hidden="true">
    <div class="entry-info">
      <span class="entry-name">Michigan State University</span>
      <span class="entry-detail">Guest Lecture in Statistical Theory of Deep Learning</span>
    </div>
    <span class="entry-date">Nov 2026</span>
  </div>
</div>

<h3 class="other-section-title">Professional Service</h3>

<div class="other-list">
  <ul>
    <li><strong>Reviewer:</strong> AISTATS, NeurIPS, ICLR</li>
  </ul>
</div>

<h3 class="other-section-title">Travel Footprints</h3>

<div class="travel-map-block">
<p class="travel-map-description">A map of places I have explored.</p>

<iframe
  id="travel-footprints-map"
  class="travel-map-frame"
  src="{{ '/assets/travel-map/index.html' | relative_url }}?embed=1"
  title="Weiyi He's travel footprints"
  loading="lazy"
  referrerpolicy="no-referrer"
></iframe>
</div>

<script>
  (() => {
    const frame = document.getElementById('travel-footprints-map');
    if (!frame) return;

    const syncTheme = () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      if (!frame.contentWindow) return;

      let targetOrigin = '*';
      try {
        targetOrigin = new URL(frame.src, window.location.href).origin;
      } catch (_) {
        // The iframe still accepts the theme when its URL cannot be resolved.
      }
      frame.contentWindow.postMessage({ type: 'via-theme', theme, palette: document.documentElement.dataset.palette }, targetOrigin);
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
