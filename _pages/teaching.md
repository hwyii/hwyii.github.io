---
layout: academic-page
title: Teaching
permalink: /teaching/
description: Teaching experience at Michigan State University and the University of Science and Technology of China.
nav: true
nav_order: 3
---

<style>
  .teaching-page {
    color: var(--c-text-2);
    font-size: 0.93rem;
  }

  .teaching-school {
    padding: 0.25rem 0 0.75rem;
  }

  .teaching-school + .teaching-school {
    padding-top: 1.25rem;
  }

  .teaching-school-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .teaching-logo {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  .teaching-institution {
    margin: 0;
    color: var(--c-text);
    font-size: 1rem;
    font-weight: 600;
  }

  .teaching-courses {
    margin: 0.7rem 0 0 42px;
    padding-left: 1.15rem;
  }

  .teaching-courses li {
    padding-left: 0.15rem;
  }

  .teaching-courses li::marker {
    color: var(--c-accent);
  }

  .teaching-course-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: baseline;
    gap: 1rem;
    line-height: 1.5;
  }

  .teaching-role,
  .teaching-date {
    font-size: 0.92em;
    color: var(--global-text-color-light);
  }

  .teaching-role::before {
    content: " · ";
  }

  .teaching-date {
    white-space: nowrap;
  }

  @media (max-width: 576px) {
    .teaching-courses {
      margin-left: 36px;
    }

    .teaching-logo {
      width: 26px;
      height: 26px;
    }

    .teaching-course-row {
      grid-template-columns: minmax(0, 1fr);
      gap: 0.1rem;
    }
  }
</style>

<div class="teaching-page">

  <section class="teaching-school">
    <div class="teaching-school-header">
      <img class="teaching-logo" src="{{ '/assets/img/venues/ustc.svg' | relative_url }}" alt="University of Science and Technology of China seal">
      <h2 class="teaching-institution">University of Science and Technology of China</h2>
    </div>
    <ul class="teaching-courses">
      <li>
        <div class="teaching-course-row">
          <span><span class="teaching-course">Linear Algebra (B1)</span><span class="teaching-role">Teaching Assistant</span></span>
          <span class="teaching-date">Spring 2023</span>
        </div>
      </li>
    </ul>
  </section>

  <section class="teaching-school">
    <div class="teaching-school-header">
      <img class="teaching-logo" src="{{ '/assets/img/venues/msu.svg' | relative_url }}" alt="Michigan State University seal">
      <h2 class="teaching-institution">Michigan State University</h2>
    </div>
    <ul class="teaching-courses">
      <li>
        <div class="teaching-course-row">
          <span><span class="teaching-course">STT 200: Statistical Methods</span><span class="teaching-role">Teaching Assistant</span></span>
          <span class="teaching-date">Fall 2024 · Spring 2025 · Fall 2026</span>
        </div>
      </li>
    </ul>
  </section>

</div>
