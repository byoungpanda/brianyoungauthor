/* Newsletter signups for brianyoungauthor.com.
   Every signup box posts to Brian's Brevo form "Website signup" (list #4 Newsletter, double opt-in),
   so new readers get a confirmation email from Brevo before they join the list.
   With JavaScript on, the form posts in the background and the reader lands on data-next
   (default: thanks.html?signup=newsletter). Without it, the browser posts straight to Brevo
   and Brevo shows its own confirmation. */

(function () {
  "use strict";

  var forms = document.querySelectorAll("form[data-brevo]");
  if (!forms.length || !window.fetch || !window.FormData) return;

  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var button = form.querySelector("[type=submit]");
      if (button) button.disabled = true;
      var next = form.getAttribute("data-next") || "/thanks.html?signup=newsletter";

      fetch(form.action + "?isAjax=1", { method: "POST", body: new FormData(form) })
        .then(function (res) {
          if (!res.ok) throw new Error("Brevo returned " + res.status);
          return res.json().catch(function () { return {}; });
        })
        .then(function (data) {
          if (data && data.success === false) throw new Error("Brevo did not accept the signup");
          location.href = next;
        })
        .catch(function () {
          /* Fall back to a normal post so the signup still reaches Brevo */
          form.submit();
        });
    });
  });
})();
