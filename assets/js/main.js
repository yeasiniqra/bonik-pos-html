"use strict";
// video popup JS
document.getElementById('openPopupBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
  document.body.classList.add('hide-scroll')
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
  document.body.classList.remove('hide-scroll')
});

// menu sticky js
var scrollpos = window.scrollY,
    header = document.getElementById("header");

function add_class_on_scroll() {
    header.classList.add("sticky-menu");
}

function remove_class_on_scroll() {
    header.classList.remove("sticky-menu");
}

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos > 100) { 
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
});

//counter up JS
const c = (s, st, e, d) => {
    const el = document.querySelector(s);
    if (!el) {
        console.error(`Element not found: ${s}`);
        return;
    }
    
    let t = null;
  
    const a = (ts) => {
        if (!t) t = ts;
        const p = Math.min((ts - t) / d, 1);
        el.innerText = Math.floor(p * (e - st) + st);
        if (p < 1) window.requestAnimationFrame(a);
    };
  
    window.requestAnimationFrame(a);
  };
  
  const ac = () => {
    c("#count1", 300, 25, 1000);
    c("#count2", 5000, 100, 1500);
    c("#count3", 1000, 150, 2000);
    c("#count4", 500, 20, 2500);
    c("#count5", 500, 2, 2500);
    c("#count6", 500, 96, 2500);
  };
  
  let is = false;
  
  const ca = () => {
    if (is) return;
    const se = document.querySelector("#scrollanime");
    if (!se) {
        console.error("Element not found: #scrollanime");
        return;
    }
  
    if (se.getBoundingClientRect().top + 50 <= (window.innerHeight || document.documentElement.clientHeight)) {
        ac();
        is = true;
    }
  };
  
  window.addEventListener("scroll", ca);
  


//progressbar JS
function loading() {
    document.querySelectorAll(".bar").forEach(function(current) {
      let startWidth = 0;
      const endWidth = current.dataset.size;
      const interval = setInterval(frame, 20);
  
      function frame() {
        if (startWidth >= endWidth) {
          clearInterval(interval);
        } else {
            startWidth++;
            current.style.width = `${endWidth}%`;
            current.firstElementChild.innerText = `${startWidth}%`;
          }
       }
    });
  }
  setTimeout(loading, 1000);


