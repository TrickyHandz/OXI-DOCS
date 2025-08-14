---
layout: default
title: Dev Logs
permalink: /devlog/
---

# Dev Logs

<ul class="post-list">
  {% assign posts = site.devlog | sort: 'date' | reverse %}
  {% for post in posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 180 }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>
