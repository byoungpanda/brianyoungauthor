/* Brian Young author site — vanilla JS, no dependencies */

(function () {
  "use strict";

  /* ---------- Countdown to release day ---------- */
  // The ebook release: local midnight on Nov 23, 2026. Change this one line for future books.
  var RELEASE = new Date(2026, 10, 23, 0, 0, 0); // months are 0-indexed: 10 = November

  var els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    mins: document.getElementById("cd-mins"),
    secs: document.getElementById("cd-secs"),
    wrap: document.getElementById("countdown")
  };

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function tick() {
    var diff = RELEASE.getTime() - Date.now();

    if (diff <= 0) {
      // Release day has arrived: celebrate instead of counting.
      var label = document.querySelector(".countdown-label");
      if (label) label.textContent = "The ebook is out now";
      if (els.wrap) els.wrap.innerHTML =
        '<p style="font-family: var(--display); font-size: 1.6rem; color: var(--gold); margin: 0;">It’s here. Happy reading.</p>';
      var buy = document.querySelector(".countdown-actions .btn");
      if (buy) buy.textContent = "Get the ebook";
      clearInterval(timer);
      return;
    }

    var secs = Math.floor(diff / 1000);
    var days = Math.floor(secs / 86400);
    var hours = Math.floor((secs % 86400) / 3600);
    var mins = Math.floor((secs % 3600) / 60);
    var s = secs % 60;

    if (els.days) els.days.textContent = String(days);
    if (els.hours) els.hours.textContent = pad(hours);
    if (els.mins) els.mins.textContent = pad(mins);
    if (els.secs) els.secs.textContent = pad(s);
  }

  var timer = setInterval(tick, 1000);
  tick();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu after tapping a link
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Resources dropdown (desktop nav) ---------- */
  var dropdowns = document.querySelectorAll(".nav-dropdown");

  Array.prototype.forEach.call(dropdowns, function (dd) {
    var btn = dd.querySelector(".nav-dropdown-toggle");
    if (!btn) return;

    function setOpen(open) {
      dd.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });

    // Escape closes the menu and puts focus back on the button
    dd.addEventListener("keydown", function (e) {
      if ((e.key === "Escape" || e.key === "Esc") && dd.classList.contains("is-open")) {
        setOpen(false);
        btn.focus();
      }
    });

    // Close when focus or a click moves somewhere else on the page
    dd.addEventListener("focusout", function (e) {
      if (e.relatedTarget && !dd.contains(e.relatedTarget)) setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!dd.contains(e.target)) setOpen(false);
    });
  });

  /* ---------- Scroll reveal (respects reduced motion) ---------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced && "IntersectionObserver" in window) {
    // Only animate what starts below the fold, so nothing a visitor can already see is hidden
    var fold = window.innerHeight || document.documentElement.clientHeight;
    var targets = Array.prototype.filter.call(document.querySelectorAll(
      ".series-row, .book-entry, .roadmap-slot, .section-title, .section-lede, .fact-list, .event, .portrait, .contact-form, .store-card"
    ), function (el) { return el.getBoundingClientRect().top > fold; });
    targets.forEach(function (el) { el.classList.add("reveal"); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
