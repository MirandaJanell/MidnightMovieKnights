---
layout: default
title: Midnight Movie Knights - Calendar
show_tweets: false
---
## Upcoming Battles

<ul markdown="1" class="list-unstyled calendar-list">
{% for entry in site.data.mmk-calendar %}
<li><h3>{{ entry.date | date: "%B, %-d %Y" }}{% if entry.knights-pick %}<small> {{ entry.knights-pick }} Pick</small>{% endif %}</h3>
	<h4 markdown="1">{{ entry.episode }} - {{ entry.title }} {% if entry.imdb-link %}<small>[(IMDB)]({{ entry.imdb-link }}){:target="_blank"}</small>{% endif %}</h4>
	{% if entry.guests %}<p>{{ entry.guests }}</p>{% endif %}
</li>
{% endfor %}
</ul>
