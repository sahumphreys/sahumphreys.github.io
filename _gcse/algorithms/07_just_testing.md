---
title: Just testing
page: 8
categories: [algorithms]
---

Ignore ... just a testing page ...

## Working with Javascript

<h3 id="heading"></h3>
<p id="paragraph"></p>
<canvas id="canvas" width="600" height="300" style="background-color:#fff; border: 1px solid black;">
</canvas>



<script src="{{ site.baseurl }}/assets/js/testing.js"></script>

<script src="{{ site.baseurl }}/assets/js/bsort.js"></script>

<!-- <script>clock();</script> -->
<!-- <script>
    document.getElementById("paragraph").textContent = "Hello, world!";
    var element = document.createElement("p");
    element.textContent = "Hello, again ...";
    document.appendChild(element);
</script> -->

<script>
    let a = 10;
    console.log("a has the value ", a);
    const b = 5;
    console.log(`b has the value ${b}`, b);
    let c = 42;
    
    // const square = function(a) {
    //     return a * a;
    // };

    const square = (x) => {
        return x * x;
    }
    const square2 = x => x * x;
    console.log(square2(b));
    console.log(c);
</script>