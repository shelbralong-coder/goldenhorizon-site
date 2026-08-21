# Golden Horizon Asset Recovery — Website

This is the public marketing and lead-generation website for Golden Horizon
Asset Recovery, built with Next.js, TypeScript, and Tailwind CSS, and prepared
for deployment on Netlify.

This README assumes you are **not** a professional web developer. Follow the
steps in order.

---

## 1. Running the site on your own computer

You need [Node.js](https://nodejs.org) installed (version 20 or newer).

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser. The site will reload
automatically whenever you save a change to a file. Press `Ctrl+C` in the
terminal to stop it.

---

## 2. Editing content

You do not need to touch most of the code to update text. Almost everything a
non-developer would want to change lives in a small number of files under
`src/content/`:

| What you want to change | File to edit |
|---|---|
| Business name, phone, email, mailing address, hours | `src/content/site.ts` |
| Navigation menu links | `src/content/site.ts` (`navLinks`) |
| Service descriptions (the 6 service pages) | `src/content/services.ts` |
| FAQ questions and answers | `src/content/faqs.ts` |
| Testimonials (hidden until you add real ones) | `src/content/testimonials.ts` |
| Credentials / BBB / licenses (hidden until you add real ones) | `src/content/credentials.ts` |

**Homepage text** (hero headline, "why we contacted you," etc.) lives in the
component files under `src/components/home/`. Each file is named after the
section it controls (e.g. `Hero.tsx`, `WhyContacted.tsx`).

**Images/logo**: there is no photography on this site yet — see "Before Going
Live" below. The logo is a small hand-coded graphic at
`src/components/ui/Logo.tsx`; a designer or developer can swap it for a real
logo file later.

After editing any file, save it — if `npm run dev` is running, your browser
preview updates automatically.

---

## 3. Putting this project on GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new, empty repository (do **not** initialize it with a README).
3. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial website build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME/YOUR-REPO-NAME` with the URL GitHub gives you when you
create the repository.

---

## 4. Deploying on Netlify

1. Create a free account at [netlify.com](https://netlify.com).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub** and authorize Netlify, then select this repository.
4. Netlify should auto-detect the build settings from `netlify.toml`
   (build command: `npm run build`, using the `@netlify/plugin-nextjs`
   plugin). Click **Deploy**.
5. When the deploy finishes, Netlify gives you a temporary URL like
   `random-name-123.netlify.app`. Open it to see your live site.

### Connecting your custom domain (goldenhorizonassetrecovery.com)

1. In your Netlify site, go to **Domain management → Add a domain**.
2. Enter `goldenhorizonassetrecovery.com` and follow the prompts.
3. Netlify will show you DNS records to add at your domain registrar (wherever
   you bought the domain). Typically this means either:
   - Pointing your domain's nameservers to Netlify (Netlify manages DNS), or
   - Adding an `A` record for the root domain and a `CNAME` record for `www`
     pointing at your Netlify site.
4. DNS changes can take anywhere from a few minutes to 24–48 hours to fully
   take effect.
5. Netlify automatically issues a free HTTPS/SSL certificate once DNS is
   pointed correctly — no action needed beyond waiting for it to provision.
6. Decide whether `www.goldenhorizonassetrecovery.com` or the root domain
   should be the "primary" version — Netlify's domain settings let you set
   one and automatically redirect the other to it.

### Finding form submissions

This site uses **Netlify Forms** — no separate database is required.

- Log into Netlify → open your site → click **Forms** in the left sidebar.
- You'll see two forms listed: **claim-review** and **contact**.
- Every submission appears there with all the field values, and Netlify can
  email you a notification for each new submission (**Forms → Settings →
  Form notifications → Add notification → Email notification**).
- You can export submissions to CSV from that same Forms screen.

If a fresh deploy ever shows "no forms detected," check that the build
actually ran `npm run build` (not just `next dev`) — Netlify only detects
forms from the production build output.

### Redeploying after changes

Once connected, Netlify automatically rebuilds and redeploys your site every
time you push a change to the `main` branch on GitHub:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Wait a minute or two and refresh your site to see the update live.

---

## 5. Adding analytics later (optional)

No analytics/tracking is installed by default. When you're ready, the
simplest option is Google Analytics or a privacy-friendly alternative like
Plausible or Fathom. In either case, you'd add a small script snippet to
`src/app/layout.tsx` inside the `<body>`, using an environment variable
(configured in Netlify under **Site configuration → Environment variables**)
so the tracking ID isn't hard-coded into the source.

Suggested events to track once analytics is added: clicks on "Check My
Claim," claim-review form starts vs. completions, phone number clicks, and
email link clicks.

---

## Pages included

- `/` — Homepage
- `/how-it-works`
- `/services` and 6 dedicated service pages under `/services/[service-name]`
- `/heirs-estates`
- `/why-we-contacted-you`
- `/about`
- `/faq`
- `/contact`
- `/claim-review` — primary lead form
- `/privacy`, `/terms`, `/disclaimer`
- `/thank-you` — shown after a form submits without JavaScript
- `sitemap.xml` and `robots.txt` are generated automatically

## Information you still need to provide

Before this site goes live, replace these placeholders in
`src/content/site.ts`:

- Business phone number
- Business email address
- Mailing address
- Business hours
- Social media links (optional)

Also review, before launch:

- **Legal pages** (`/privacy`, `/terms`, `/disclaimer`) are drafted in plain
  language but have **not** been reviewed by an attorney. Have one review
  them for your state and business practices.
- **Fee/upfront-cost language**: the FAQ intentionally does not promise "no
  upfront fees," since that depends on your actual business policy. Update
  `src/content/faqs.ts` once that policy is confirmed.
- **Testimonials and credentials**: both sections are built into the code but
  hidden because no real reviews or verified credentials were supplied. Add
  them to `src/content/testimonials.ts` / `src/content/credentials.ts` and
  they'll automatically appear.
- **Logo and photography**: the site currently uses an original line-art mark
  and abstract graphics instead of stock photography (deliberately, to avoid
  a generic look and any licensing issues). Swap in real photography or a
  professional logo file whenever you have them.
- **Domain**: metadata throughout the site assumes
  `https://goldenhorizonassetrecovery.com` (set in `src/content/site.ts`).
  Update it there if the final domain differs.

## Tech notes

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.
- No database — form submissions are handled entirely by Netlify Forms.
- `npm run build`, `npm run lint`, and `npx tsc --noEmit` all currently pass
  cleanly.
