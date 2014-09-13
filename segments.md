---
layout: default
title: Midnight Movie Knights - Tournament of Segments
show_tweets: false
---
## Tournament of Segments

### How Battle Is Forged

Coming soon


### Segments

{% for segment in site.data.mmk-segments %}
{% if segment.status != "graduated" %}
<h4 class="segment-title">{{ segment.title }}</h4>
<p class="segment-description">{{ segment.description }}</p>
{% endif %}
{% endfor %}
