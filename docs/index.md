---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <h1>OXI - OpenXR Interactions: Reducing the pain of XR Development</h1>
  <p>A lightweight, OpenXR-aligned toolkit with a clear, strongly-typed path API and Unity 6 integration.</p>
  <div class="cta-row">
    <a class="btn" href="{{ '/manual/' | relative_url }}">OXI Manual</a>
    <a class="btn" href="{{ '/api/latest/' | relative_url }}">API Reference</a>
    <a class="btn" href="{{ '/devlog/' | relative_url }}">Dev Logs</a>
  </div>
</section>

<section class="latest-devlog">
  <h2>Latest Dev Logs</h2>
  <ul class="post-list">
    {% assign posts = site.devlog | sort: 'date' | reverse %}
    {% for post in posts limit:3 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
        {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/devlog/' | relative_url }}">View all dev logs</a> · <a href="{{ '/feed.xml' | relative_url }}">RSS</a></p>
</section>
