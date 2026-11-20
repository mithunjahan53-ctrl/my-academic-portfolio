/*
  ============================================================
  PERSONAL ACADEMIC PORTFOLIO — JavaScript
  Israt Jahan Mithun
  ============================================================

  Beginner-friendly, well-commented script.

  What it does:
    1. Opens/closes the mobile navigation menu.
    2. Highlights the current section in the navigation while scrolling.
    3. Smooth-scrolls to sections (fallback for browsers that don't
       support CSS scroll-behavior).
    4. "Save as PDF" button triggers the browser print dialog.

  How to run:
    Open index.html in any browser. This file loads automatically.
============================================================= */

(function () {
  "use strict";

  // ---------- Elements ----------
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll(".nav-list a");
  const printBtn = document.getElementById("print-btn");
  const yearEl = document.getElementById("year");

  // ---------- Footer year ----------
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Mobile menu toggle ----------
  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      const isOpen = navList.classList.contains("open");

      if (isOpen) {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      } else {
        navList.classList.add("open");
        navToggle.setAttribute("aria-expanded", "true");
        navToggle.setAttribute("aria-label", "Close menu");
      }
    });

    // Close menu when a link is clicked (mobile)
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // ---------- Smooth scroll (fallback) ----------
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      // Only handle internal anchor links
      if (targetId && targetId.startsWith("#")) {
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // ---------- Highlight active nav link on scroll ----------
  function onScroll() {
    const scrollY = window.pageYOffset;
    const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;

    let current = null;

    document.querySelectorAll("section[id]").forEach(function (section) {
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        current = section.getAttribute("id");
      }
    });

    // Hero is active at the very top
    if (scrollY < 100) {
      current = "hero";
    }

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      const isActive = href === "#" + current;

      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("load", onScroll);

  // ---------- Print as PDF ----------
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }
})();
