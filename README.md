# Brian Young — brianyoungauthor.com

Fast, free author site for GitHub Pages. No frameworks, no build step. Fully self-contained: all covers and the author photo live in this repo.

## Files

| File | What it is |
|---|---|
| index.html | Home page: hero, bookshelf, about, events, newsletter, contact |
| sophia-sprite.html | Series page: Sophia Sprite (Book 1, Banshee Bargain preview, roadmap) |
| sacred-vein.html | Series page: all three Sacred Vein books with buy links |
| thanks.html | Shown after someone sends a message or signs up |
| style.css | All styling |
| script.js | Countdown, mobile menu, scroll animations |
| CNAME | Tells GitHub Pages the custom domain is brianyoungauthor.com |
| *.jpg | Book covers (sasquatch-secret, banshee-bargain, sacred-vein, shadow-archive, hidden-network, pinky-whiskers) and author photo (brian) |

## Hosting (already done)

GitHub Pages deploys from the main branch root. Custom domain brianyoungauthor.com is configured via GoDaddy A records (185.199.108-111.153) and a www CNAME to byoungpanda.github.io, with HTTPS enforced in Settings → Pages.

## Forms (one-time activation!)

The contact form and newsletter signups deliver to **brianyoungauthor@gmail.com** via FormSubmit (free, no account). The FIRST submission triggers a confirmation email — **click the link in it once** and everything flows to your inbox from then on. Easiest: submit the contact form yourself. Both forms have CAPTCHA + honeypot spam protection and redirect to thanks.html.

When the newsletter list grows, graduate to MailerLite or Buttondown (free tiers) for automated sends and unsubscribe handling — swap the form action URL or paste in their embed code.

## Remaining updates

- **Sasquatch Secret jacket copy**: search REPLACE in sophia-sprite.html and paste the real description (also freshen the teaser paragraph on index.html).
- **Book 3 buy link**: sacred-vein.html links The Hidden Network to the Amazon author page — replace with the direct Amazon link when confirmed.
- **Sophia Sprite Books 3–5**: as titles are announced, replace the "Title to be revealed" slots in sophia-sprite.html. The Banshee Bargain (Book 2) already shows its cover — add a buy link and date when ready.
- **Release dates**: visible text in HTML + the RELEASE line at the top of script.js. The countdown flips to "Out now!" automatically on release day.

## Updating images

To swap any cover or the photo later: upload the new file with the SAME filename (Add file → Upload files overwrites), and it goes live in about a minute.

## Editing tip

Keep all files in ONE folder when previewing locally, and double-click index.html.
