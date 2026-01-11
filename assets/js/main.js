"use strict";

document.addEventListener("DOMContentLoaded", () => {

/*** Off-canvas mobile menu ***/
const menu = document.querySelector('.off-canvas-menu');
const overlay = document.querySelector('.overlay');
const menuToggle = document.querySelector('.menu-toggle');

if (menu && overlay && menuToggle) {

  // define globally (inside if block but before event listeners)
  const toggleMenu = () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  };

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); 
    toggleMenu();
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('active');
  });

  // Close when clicking outside menu and toggle button
  window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      menu.classList.remove('open');
      overlay.classList.remove('active');
    }
  });
}


  /*** Mobile dropdown menu ***/
  document.querySelectorAll(".menu-item-has-children > a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const subMenu = link.parentNode.querySelector(".sub-menu");
      if (subMenu) subMenu.classList.toggle("show");
    });
  });

  /*** Video popup ***/
  const openPopupBtn = document.getElementById('openPopupBtn');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const popup = document.getElementById('popup');

  if (openPopupBtn && closePopupBtn && popup) {
    openPopupBtn.addEventListener('click', () => {
      popup.style.display = 'block';
      document.body.classList.add('hide-scroll');
    });

    closePopupBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      document.body.classList.remove('hide-scroll');
    });
  }

  /*** Sticky Header ***/
  const header = document.querySelector(".header-area");
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) header.classList.add("sticky-menu");
      else header.classList.remove("sticky-menu");
    });
  }

  /*** Counter Up ***/
  const animateCounter = (selector, start, end, duration) => {
    const el = document.querySelector(selector);
    if (!el) return;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      el.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const startCounters = () => {
    animateCounter("#count1", 300, 25, 1000);
    animateCounter("#count2", 5000, 100, 1500);
    animateCounter("#count3", 1000, 150, 2000);
    animateCounter("#count4", 500, 20, 2500);
    animateCounter("#count5", 500, 2, 2500);
    animateCounter("#count6", 500, 96, 2500);
  };

  let counterTriggered = false;
  const counterTriggerElement = document.querySelector("#highlight-area");

  if (counterTriggerElement) {
    window.addEventListener("scroll", () => {
      if (!counterTriggered && counterTriggerElement.getBoundingClientRect().top <= window.innerHeight - 50) {
        startCounters();
        counterTriggered = true;
      }
    });
  }

  /*** Progress Bar Animation ***/
  let progressTriggered = false;
  const loadBars = () => {
    document.querySelectorAll(".bar").forEach(current => {
      let startWidth = 0;
      const endWidth = current.dataset.size;
      const interval = setInterval(() => {
        if (startWidth >= endWidth) clearInterval(interval);
        else {
          startWidth++;
          current.style.width = `${startWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
      }, 20);
    });
  };

  window.addEventListener("scroll", () => {
    if (progressTriggered) return;
    const bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
      if (bar.getBoundingClientRect().top <= window.innerHeight) {
        progressTriggered = true;
        setTimeout(loadBars, 1000);
      }
    });
  });

  /*** Back to Top Button ***/
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.pageYOffset > 200 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /*** Accordion ***/
  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const active = document.querySelector('.accordion-header.active');
      if (active && active !== button) {
        active.classList.remove('active');
        active.nextElementSibling.style.maxHeight = 0;
        active.querySelector('.toggle-icon').textContent = '+';
      }

      button.classList.toggle('active');
      const content = button.nextElementSibling;
      if (button.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        button.querySelector('.toggle-icon').textContent = '-';
      } else {
        content.style.maxHeight = 0;
        button.querySelector('.toggle-icon').textContent = '+';
      }
    });
  });

  /*** Product Tabs ***/
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (tabs.length > 0 && contents.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(content => {
          content.classList.remove('active');
          content.style.display = 'none';
          content.style.opacity = 0;
        });

        const activeContent = document.getElementById(target);
        if (activeContent) {
          activeContent.style.display = 'block';
          requestAnimationFrame(() => {
            activeContent.classList.add('active');
            activeContent.style.opacity = 1;
          });
        }

        if (dropdownMenu && dropdownMenu.contains(tab)) {
          dropdownMenu.classList.remove('show');
        }
      });
    });
  }

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  }

});
