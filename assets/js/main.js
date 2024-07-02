"use strict";
// offCanvas mobile menu JS
const toggleMenu = () => {
  const menu = document.querySelector('.off-canvas-menu');
  const overlay = document.querySelector('.overlay');
  menu.classList.toggle('open');
  overlay.classList.toggle('active');
}

window.addEventListener('click', function(event) {
  const menu = document.querySelector('.off-canvas-menu');
  const overlay = document.querySelector('.overlay');
  const menuToggle = document.querySelector('.menu-toggle');
  if (!menu.contains(event.target) && event.target !== menuToggle) {
    menu.classList.remove('open');
    overlay.classList.remove('active');
  }
});

 //mobile menu dropdown JS
 for (var allHasChildren = document.querySelectorAll(".menu-item-has-children a"), x = 0; x < allHasChildren.length; x++)
  allHasChildren[x].onclick = function () {
      var e = this.parentNode.getElementsByClassName("sub-menu")[0];
      e.classList.contains("show") ? e.classList.remove("show") : e.classList.add("show");
  }; 

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

// function add_class_on_scroll() {
//     header.classList.add("sticky-menu");
// }
// function remove_class_on_scroll() {
//     header.classList.remove("sticky-menu");
// }

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;
    if (scrollpos > 120) { 
      header.classList.add("sticky-menu");
    } else {
      header.classList.remove("sticky-menu");
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
// function loading() {
//     document.querySelectorAll(".bar").forEach(function(current) {
//       let startWidth = 0;
//       const endWidth = current.dataset.size;
//       const interval = setInterval(frame, 20);
  
//       function frame() {
//         if (startWidth >= endWidth) {
//           clearInterval(interval);
//         } else {
//             startWidth++;
//             current.style.width = `${endWidth}%`;
//             current.firstElementChild.innerText = `${startWidth}%`;
//           }
//        }
//     });
//   }
//   setTimeout(loading, 1000);

let scrolled = false;

const checkScroll = () => {
  if (scrolled) return;
  const elements = document.querySelectorAll(".bar");
  if (elements.length === 0) {
    console.error("Elements not found: .bar");
    return;
  }

  elements.forEach(element => {
    if (element.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight)) {
      scrolled = true;
      setTimeout(loadBars, 1000);
    }
  });
};

const loadBars = () => {
  document.querySelectorAll(".bar").forEach(current => {
    let startWidth = 0;
    const endWidth = current.dataset.size;
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
        startWidth++;
        current.style.width = `${startWidth}%`;
        current.firstElementChild.innerText = `${startWidth}%`;
      }
    }
  });
};

window.addEventListener("scroll", checkScroll);



// function loading() {
//   document.querySelectorAll(".bar").forEach(function(current) {
//     let startWidth = 0;
//     const endWidth = current.dataset.size;
//     const interval = setInterval(frame, 20);

//     function frame() {
//       if (startWidth >= endWidth) {
//         clearInterval(interval);
//       } else {
//         startWidth++;
//         current.style.width = `${startWidth}%`;
//         current.firstElementChild.innerText = `${startWidth}%`;
//       }
//     }
//   });
// }

// let timeoutId;
// let hasScrolled80px = false;

// window.addEventListener('scroll', function() {
//   if (window.scrollY >= 120 && !hasScrolled80px) {
//     hasScrolled80px = true;
//     timeoutId = setTimeout(loading, 1000);
//   }
// });




  // let iss = false;
  
  // const caa = () => {
  //   if (iss) return;
  //   const ses = document.querySelector("#scrollanimes");
  //   if (!ses) {
  //       console.error("Element not found: #scrollanimes");
  //       return;
  //   }
  
  //   if (ses.getBoundingClientRect().top + 70 <= (window.innerHeight || document.documentElement.clientHeight)) {
  //       setTimeout(loading, 1000);
  //       iss = true;
  //   }
  // };
  
  // window.addEventListener("scroll", caa);

  

  
  // back to top JS
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) { 
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

