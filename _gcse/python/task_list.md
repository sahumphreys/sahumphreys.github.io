---
title: All Programming Tasks
layout: tasks
# categories: [python]
# page: 16
---

# {{ page.title}}
{% for topic in site.data.challenges_gcse %}
## {{ forloop.index }}. {{ topic.topic }}
{% for challenge in topic.challenges %}
**[{{ challenge.task_title}}]({{ challenge.link }})** - {{ challenge.task_outline }}
{% endfor %}
{% endfor %}
            
