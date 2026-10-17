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
| press.html | Press Kit: press releases, at a glance, story angles, short and long bios, two downloadable author photos, book fact sheets with full-size covers, review copies |
| releases/ | Press releases as web pages plus matching PDFs. The PDFs are printed from the pages (print styles are inside each page), so edit the page and re-print rather than editing a PDF |
| audiobook/index.html | Public audiobook page at /audiobook/ (in search): Audible button, Chapter One player, narrator facts |
| 404.html | Shown by GitHub Pages for any missing URL; every link in it is absolute |
| share/ | 1200x630 social share images: out-now.jpg (home, Sophia Sprite, store, preorder, first chapters), audiobook.jpg (audiobook and Chapter One pages), press.jpg (press kit and releases) |
| downloads/ | Free guide and kit PDFs linked from the three pages above (file names are case-sensitive), plus the press-kit cover files: Sophia_Sprite_Cover_1800x2880.jpg (300 dpi front cover) and Sophia_Sprite_Audiobook_Cover_3000px.jpg, and the full-size author photos Brian_Young_Author_Photo_1.jpg (2544x3392, the main one) and Brian_Young_Author_Photo_2.jpg (2208x2944) |
| sitemap.xml, robots.txt | Public pages and guide PDFs for search engines (the unlisted newsletter pages stay out on purpose) |
| thanks.html | Shown after someone sends a message or signs up |
| links/index.html | TikTok bio page at /links (unlisted, noindex). Swap campaigns by editing the five EDIT lines in its FEATURED BLOCK |
| style.css | All styling (pages link it as style.css?v=9; bump the number on every page after any change) |
| script.js | Ebook countdown, mobile menu, Resources dropdown, scroll animations (linked as script.js?v=4) |
| signup.js | Sends the newsletter signup boxes to Brevo in the background, then opens the thank-you page (linked as /signup.js?v=1 on the 7 pages with a signup box) |
| track.js | Meta Pixel and Google Analytics 4 (G-ZFE17HK48P, with Google signals and ad personalization off), the TikTok Pixel (DB9S873C77UAEK31BCK0), and the click events (Listen on Audible, ebook preorder, print buys, sample plays, signups). Paste an ID at the top to switch a service on, then list it in privacy.html |
| privacy.html | Privacy page: forms, Meta Pixel, Google Fonts, hosting, Audible referral note, readers under 13 |
| CNAME | Tells GitHub Pages the custom domain is brianyoungauthor.com |
| *.jpg | Book covers (sasquatch-secret, sasquatch-secret-audiobook, banshee-bargain, sacred-vein, shadow-archive, hidden-network, pinky-whiskers) and author photos: brian.jpg (800px square crop of photo 1, shown as the round bio portrait) and brian-press-1.jpg / brian-press-2.jpg (480x640 press-kit thumbnails) |

## Hosting (already done)

GitHub Pages deploys from the main branch root. Custom domain brianyoungauthor.com: GoDaddy is the registrar, but DNS is hosted on **Cloudflare** (nameservers marlowe and fred.ns.cloudflare.com), so add or change DNS records in Cloudflare, not GoDaddy. The A records point at GitHub Pages (185.199.108-111.153), www is a CNAME to byoungpanda.github.io, and HTTPS is enforced in Settings → Pages.

## Forms (one-time activation!)

Newsletter signup boxes post to Brian's Brevo form "Website signup" (list #4 Newsletter, double opt-in): the form `action` is that form's sibforms.com URL, the email field is named `EMAIL`, and `email_address_check` is Brevo's honeypot. signup.js posts in the background and sends readers to thanks.html?signup=newsletter ("check your inbox"), or /links/#joined on the links page; without JavaScript the browser posts straight to Brevo. thanks.html?signup=confirmed is the page to use as the redirect after the confirmation link. To change the list or fields, edit the form in Brevo; the URL stays the same.

The contact form and the preorder drawing form deliver to **hello@brianyoungauthor.com** via FormSubmit (free, no account). The FIRST submission triggers a confirmation email — **click the link in it once** and everything flows to your inbox from then on. The contact form has CAPTCHA + honeypot spam protection and redirects to thanks.html?sent=contact, so the page shows the right message and the message is counted.

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
