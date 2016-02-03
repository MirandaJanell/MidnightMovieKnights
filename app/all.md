---
layout: default
title: Midnight Movie Knights
show_tweets: true
---
<div id="home">
	<h3>All Episodes</h3>
{% for post in site.posts %}
	<div class="post-container">
		<span class="post-title">{{ post.date | date_to_string }} - <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></span>
	</div>
{% endfor %}
</div>