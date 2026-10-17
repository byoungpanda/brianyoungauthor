/* Ad pixels and analytics for brianyoungauthor.com, in one place.
   Every public page loads this file (not /review). To switch a service on, paste its ID below;
   an empty ID means that service never loads. List any service you turn on in privacy.html. */

(function () {
  "use strict";

  var IDS = {
    meta: "1885360009141177", // Meta Pixel (Facebook and Instagram ads)
    tiktok: "",               // TikTok Pixel ID, from TikTok Ads Manager > Tools > Events
    ga4: "G-ZFE17HK48P"       // Google Analytics 4 (account "Brian Young Author", property brianyoungauthor.com)
  };

  /* ---------- Meta Pixel ---------- */
  if (IDS.meta) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", IDS.meta);
    fbq("track", "PageView");
  }

  /* ---------- TikTok Pixel ---------- */
  if (IDS.tiktok) {
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
      ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]); return e; };
      ttq.load = function (e, n) {
        var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = r; ttq._t = ttq._t || {}; ttq._t[e] = +new Date();
        ttq._o = ttq._o || {}; ttq._o[e] = n || {};
        var o = d.createElement("script"); o.type = "text/javascript"; o.async = !0; o.src = r + "?sdkid=" + e + "&lib=" + t;
        var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a);
      };
      ttq.load(IDS.tiktok);
      ttq.page();
    }(window, document, "ttq");
  }

  /* ---------- Google Analytics 4 ---------- */
  if (IDS.ga4) {
    var ga = document.createElement("script");
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(IDS.ga4);
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag("js", new Date());
    /* Young readers use this site, so visits are never used for ad personalization or tied to Google accounts */
    gtag("config", IDS.ga4, { allow_google_signals: false, allow_ad_personalization_signals: false });
  }

  /* ---------- One event, sent to every service that is on ----------
     name:  Meta event, TikTok event, GA4 event */
  var EVENTS = {
    ListenOnAudible: { meta: ["trackCustom", "ListenOnAudible"], tiktok: "ClickButton", ga4: "listen_on_audible" },
    PreorderEbook:   { meta: ["track", "InitiateCheckout"],      tiktok: "InitiateCheckout", ga4: "begin_checkout" },
    BuyPrint:        { meta: ["trackCustom", "BuyPrint"],        tiktok: "ClickButton", ga4: "buy_print" },
    SamplePlay:      { meta: ["trackCustom", "SamplePlay"],      tiktok: "ViewContent", ga4: "sample_play" },
    ViewBook:        { meta: ["track", "ViewContent"],           tiktok: "ViewContent", ga4: "view_item" },
    Newsletter:      { meta: ["track", "CompleteRegistration"],  tiktok: "CompleteRegistration", ga4: "sign_up" },
    Contact:         { meta: ["track", "Contact"],               tiktok: "Contact", ga4: "contact" },
    Lead:            { meta: ["track", "Lead"],                  tiktok: "SubmitForm", ga4: "generate_lead" }
  };

  function send(name, params) {
    var ev = EVENTS[name];
    if (!ev) return;
    params = params || {};
    params.page = params.page || location.pathname;
    try {
      if (IDS.meta && window.fbq) fbq(ev.meta[0], ev.meta[1], params);
      if (IDS.tiktok && window.ttq) ttq.track(ev.tiktok, { content_name: params.content_name || name });
      if (IDS.ga4 && window.gtag) gtag("event", ev.ga4, params);
    } catch (e) { /* never let tracking break the page */ }
  }
  window.siteTrack = send;

  /* Store and Audible clicks, wherever the link is on the site */
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.href;
    var label = (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
    if (/^https:\/\/www\.audible\.com\//.test(href)) {
      send("ListenOnAudible", { content_name: "Sasquatch Secret audiobook", link_text: label });
    } else if (/^https:\/\/books2read\.com\/SophiaSprite1/.test(href)) {
      /* The same Books2Read link also serves as "Paperback and hardcover" and "More stores" for print */
      if (/paperback|hardcover|more stores/i.test(label)) send("BuyPrint", { content_name: "Sasquatch Secret print", link_text: label });
      else send("PreorderEbook", { content_name: "Sasquatch Secret ebook preorder", link_text: label });
    } else if (/amazon\.com\/dp\/1734179414|barnesandnoble\.com\/w\/sophia-sprite|shop\.ingramspark\.com\//.test(href)) {
      send("BuyPrint", { content_name: "Sasquatch Secret print", link_text: label });
    }
  }, true);

  /* First play of any audio sample on the page */
  var played = false;
  document.addEventListener("play", function (e) {
    if (played || !e.target || e.target.tagName !== "AUDIO") return;
    played = true;
    send("SamplePlay", { content_name: "Sasquatch Secret audio sample" });
  }, true);

  /* Book pages */
  if (/^\/(sophia-sprite(\.html)?|audiobook\/?)$/.test(location.pathname)) {
    send("ViewBook", { content_name: "Sophia Sprite and the Sasquatch Secret" });
  }

  /* Form confirmations land on thanks.html with a note of which form was sent */
  if (/^\/thanks(\.html)?$/.test(location.pathname)) {
    if (/[?&]signup=newsletter\b/.test(location.search)) send("Newsletter", { content_name: "Newsletter" });
    else if (/[?&]sent=contact\b/.test(location.search)) send("Contact", { content_name: "Contact form" });
  }
  /* The /links signup returns to /links/#joined */
  if (/^\/links\/?$/.test(location.pathname) && location.hash === "#joined") {
    send("Newsletter", { content_name: "Newsletter (links page)" });
  }
})();
