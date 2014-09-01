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
<h4 class="segment-title">{{ segment.title }}</h4>
<p class="segment-description">{{ segment.description }}</p>
{% endfor %}
