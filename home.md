---
layout : base_layout
title : Home - jeldikk
---
{% if site.data.configuration.maintenance %}
    err ... there is an error ... come again later
{% else %}
    {% include navigation.html %}

    <section id="landingpage">
        {% include landingpage.html %}
    </section>
    <!-- <hr width="75%" style="border-width:10px,border-color:black;" /> -->
    <section id="aboutme">
        {% include aboutme.html %}
    </section>

    <section id="tutorpage">

    </section>

    <section id="footer" class="py-4">
        {% include footer.html %}
    </section>
{% endif %}
