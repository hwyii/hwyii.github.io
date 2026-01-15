---
layout: page
title: Other
permalink: /other/
description: My side projects and other experiences.
nav: true
nav_order: 3
---

<style>
  /* 隐藏 .periodical 类：它是用来显示 "Journal, Year" 那一行的 */
  .periodical {
    display: none !important;
  }
</style>
<div class="publications">

{% bibliography -f others %}

</div>