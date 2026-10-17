# Brian Young — brianyoungauthor.com

Fast, free author site for GitHub Pages. No frameworks, no build step. Fully self-contained: all covers and the author photo live in this repo.

## Files

| File | What it is |
|---|---|
| index.html | Home page: hero, bookshelf, about, events, newsletter, contact |
| sophia-sprite.html | Series page: Sophia Sprite (Book 1, Banshee Bargain preview, roadmap) |
| sacred-vein.html | Series page: all three Sacred Vein books with buy links |
| store.html | Paperbacks sold direct through IngramSpark |
| educators.html | For Educators: classroom guides, lesson plans, Chapter 1 audio, school visits, ordering, FAQ |
| librarians.html | For Librarians: ISBN and format table, ordering, program kits, visits, review copies |
| book-clubs.html | Book Clubs: kits for kids and adult clubs, club visits, newsletter |
| press.html | Press Kit: press releases, at a glance, story angles, short and long bios, author photo, book fact sheets with full-size covers, review copies |
| releases/ | Press releases as web pages plus matching PDFs. The PDFs are printed from the pages (print styles are inside each page), so edit the page and re-print rather than editing a PDF |
| audiobook/index.html | Public audiobook page at /audiobook/ (in search): Audible button, Chapter One player, narrator facts |
| 404.html | Shown by GitHub Pages for any missing URL; every link in it is absolute |
| share/ | 1200x630 social share images: out-now.jpg (home, Sophia Sprite, store, preorder, first chapters), audiobook.jpg (audiobook and Chapter One pages), press.jpg (press kit and releases) |
| downloads/ | Free guide and kit PDFs linked from the three pages above (file names are case-sensitive) |
| sitemap.xml, robots.txt | Public pages and guide PDFs for search engines (the unlisted newsletter pages stay out on purpose) |
| thanks.html | Shown after someone sends a message or signs up |
| links/index.html | TikTok bio page at /links (unlisted, noindex). Swap campaigns by editing the five EDIT lines in its FEATURED BLOCK |
| style.css | All styling (pages link it as style.css?v=7; bump the number on every page after any change) |
| script.js | Ebook countdown, mobile menu, Resources dropdown, scroll animations (linked as script.js?v=4) |
| CNAME | Tells GitHub Pages the custom domain is brianyoungauthor.com |
| *.jpg | Book covers (sasquatch-secret, sasquatch-secret-audiobook, banshee-bargain, sacred-vein, shadow-archive, hidden-network, pinky-whiskers) and author photo (brian) |

## Hosting (already done)

GitHub Pages deploys from the main branch root. Custom domain brianyoungauthor.com is configured via GoDaddy A records (185.199.108-111.153) and a www CNAME to byoungpanda.github.io, with HTTPS enforced in Settings → Pages.

## Forms (one-time activation!)

The contact form and newsletter signups deliver to **hello@brianyoungauthor.com** via FormSubmit (free, no account). The FIRST submission triggers a confirmation email — **click the link in it once** and everything flows to your inbox from then on. Easiest: submit the contact form yourself. Both forms have CAPTCHA + honeypot spam protection and redirect to thanks.html.

When the newsletter list grows, graduate to MailerLite or Buttondown (free tiers) for automated sends and unsubscribe handling — swap the form action URL or paste in their embed code.

## Remaining updates

- **Sasquatch Secret jacket copy**: search REPLACE in sophia-sprite.html and paste the real description (also freshen the teaser paragraph on index.html).
- **Book 3 buy link**: sacred-vein.html links The Hidden Network to the Amazon author page — replace with the direct Amazon link when confirmed.
- **Sophia Sprite Books 3–5**: as titles are announced, replace the "Title to be revealed" slots in sophia-sprite.html. The Banshee Bargain (Book 2) already shows its cover — add a buy link and date when ready.
- **Release dates**: visible text in HTML + the RELEASE line at the top of script.js. The home page countdown is for the ebook (November 23, 2026); on that day it switches itself to "The ebook is out now" and the button under it to "Get the ebook". The rest of the ebook copy ("arrives November 23", "preorder") still needs a pass that day.
- **Audible link**: every Listen on Audible button uses the exact referral URL on /links. Copy it from there; never shorten it or add tracking to it.
- **Structured data**: index.html has a Person block (with the social profiles) and sophia-sprite.html has a Book block listing every edition. Update them when a link or edition changes.

## Updating images

To swap any cover or the photo later: upload the new file with the SAME filename (Add file → Upload files overwrites), and it goes live in about a minute.

## Editing tip

Keep all files in ONE folder when previewing locally, and double-click index.html.
