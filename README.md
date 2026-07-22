# Brian Young — brianyoungauthor.com

Fast, free author site for GitHub Pages. No frameworks, no build step.

## Files

| File | What it is |
|---|---|
| index.html | Home page: hero, bookshelf, about, events, newsletter, contact |
| sophia-sprite.html | Series page: Sophia Sprite (Book 1 + roadmap for Books 2–5) |
| sacred-vein.html | Series page: all three Sacred Vein books with buy links |
| thanks.html | Shown after someone sends a message or signs up |
| style.css | All styling |
| script.js | Countdown, mobile menu, scroll animations |
| CNAME | Tells GitHub Pages the custom domain is brianyoungauthor.com |

## Turn on GitHub Pages

**Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, Folder: **/ (root)** → Save.
Site goes live in 1–2 minutes at https://byoungpanda.github.io/brianyoungauthor/

## Point the GoDaddy domain at GitHub

1. Log in at godaddy.com → **My Products** → **brianyoungauthor.com** → **DNS** (Manage DNS).
2. **Delete or edit** the existing **A record** with Name @ (GoDaddy usually points it at "Parked").
3. **Add four A records** (Type: A, Name: @, TTL default):
   185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
4. **Edit the CNAME record** with Name www so its Value is: byoungpanda.github.io
5. If GoDaddy's "Domain Forwarding" is on for this domain, turn it **off** — it conflicts with the A records.
6. On GitHub: **Settings → Pages → Custom domain** → type brianyoungauthor.com → Save. After the DNS check passes, check **Enforce HTTPS**.

## Activate the forms (one-time!)

The contact form and newsletter signups deliver to **brianyoungauthor@gmail.com** via FormSubmit (free, no account). The FIRST submission triggers a confirmation email — **click the link in it once** and everything flows to your inbox from then on. Easiest: submit the contact form yourself right after launch. Both forms have CAPTCHA + honeypot spam protection and redirect to thanks.html.

Newsletter signups arrive as emails with subject "New newsletter signup!". When the list grows, graduate to MailerLite or Buttondown (free tiers) for automated sends and unsubscribe handling — swap the form action URL or paste in their embed code.

## Cover images — make them permanent

Covers and the author photo currently load from the old BookBub site's image host (res.cloudinary.com URLs in the HTML). They work today, but will break if that BookBub site is ever closed. To make the site self-contained:

1. Open each res.cloudinary.com URL from the HTML in a browser and Save Image As: sacred-vein.jpg, shadow-archive.jpg, hidden-network.jpg, pinky-whiskers.jpg, brian.jpg.
2. Upload the five images to this repo (Add file → Upload files).
3. Change each src="https://res.cloudinary..." in index.html and sacred-vein.html to the matching local filename (e.g. src="sacred-vein.jpg"), and the og:image in index.html to https://brianyoungauthor.com/brian.jpg.

One check: verify the Hidden Network cover is really Book 3's cover (it came from the old site's preview metadata).

## Other updates

- **Sasquatch Secret jacket copy**: search REPLACE in sophia-sprite.html and paste the real description (also freshen the teaser paragraph on index.html).
- **Final cover art for Book 1**: swap the CSS-drawn stand-in cover blocks (comments in the HTML show exactly how) in index.html and sophia-sprite.html.
- **Book 3 buy link**: sacred-vein.html links The Hidden Network to the Amazon author page — replace with the direct Amazon link when confirmed.
- **Sophia Sprite Books 3–5**: as titles are announced, replace the "Title to be revealed" slots in sophia-sprite.html (Book 2, The Banshee Bargain, is already in place — add its link and date when ready).
- **Release dates**: visible text in HTML + the RELEASE line at the top of script.js. The countdown flips to "Out now!" automatically on release day.
