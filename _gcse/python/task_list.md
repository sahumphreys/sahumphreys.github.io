---
title: All Programming Tasks
layout: default
categories: [python]
page: 17
---


# {{ page.title}}
{% for topic in site.data.gcse.programming_tasks.challenges_gcse.tasks %}
## {{ forloop.index }}. {{ topic.topic }}
{% for challenge in topic.challenges %}
**[{{ challenge.task_title}}]({{ challenge.link }})**
{{ challenge.task_outline | markdownify}}
{% endfor %}
{% endfor %}
            
