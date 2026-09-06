# Deployment Guide — baruchkairy.co.il

## Prerequisites

- A GitHub account
- A Vercel account (free tier is fine — vercel.com)
- A Google Analytics 4 property (for the measurement ID)
- The domain baruchkairy.co.il (purchase from any registrar)

---

## Step 1: Push to GitHub

From the project folder on your machine:

```bash
cd baruch-kairy-site

# If not already a git repo:
git init
git add -A
git commit -m "Initial commit — full site ready for deployment"

# Create the repo on GitHub (requires gh CLI, or do it on github.com):
gh repo create baruch-kairy-site --private --source=. --push

# Or if the repo already exists on GitHub:
git remote add origin https://github.com/YOUR_USERNAME/baruch-kairy-site.git
git push -u origin main
```

---

## Step 2: Connect Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"** and select `baruch-kairy-site`
3. Vercel auto-detects Next.js — accept the defaults
4. Click **Deploy**

The site will be live at `baruch-kairy-site.vercel.app` within a minute.

---

## Step 3: Set up Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for the site
3. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`)
4. In Vercel dashboard → your project → **Settings** → **Environment Variables**
5. Add:
   - Name: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX` (your real ID)
   - Environments: Production, Preview
6. **Redeploy** the project (Deployments tab → three-dot menu on latest → Redeploy)

Analytics will start collecting data immediately after redeployment.

---

## Step 4: Connect custom domain

### In Vercel:
1. Go to your project → **Settings** → **Domains**
2. Add `baruchkairy.co.il`
3. Vercel will show you the DNS records to create

### At your domain registrar:
Create these DNS records (Vercel will show the exact values):

| Type  | Name | Value               |
|-------|------|---------------------|
| A     | @    | 76.76.21.21         |
| CNAME | www  | cname.vercel-dns.com |

DNS propagation takes 5 minutes to 48 hours (usually under 1 hour).

### SSL:
Vercel provisions a free SSL certificate automatically once DNS resolves.

---

## Step 5: Post-deployment verification

Check each item after the site is live on the real domain:

- [ ] Homepage loads correctly at baruchkairy.co.il
- [ ] All 7 pages load: `/`, `/about`, `/services`, `/services/organizations`, `/workshops`, `/faq`, `/contact`
- [ ] Mobile layout works (test on a real phone)
- [ ] RTL text direction is correct throughout
- [ ] Phone link (`tel:`) opens dialer
- [ ] WhatsApp link opens WhatsApp with the correct number
- [ ] Email link opens mail client
- [ ] Contact form fields are functional (note: form does not submit anywhere yet — see below)
- [ ] OG image appears when sharing a link on WhatsApp/Telegram/social media (use [opengraph.xyz](https://opengraph.xyz) to test)
- [ ] Google Analytics shows real-time data in the GA4 dashboard
- [ ] Scroll animations work on desktop and mobile
- [ ] FAQ accordion opens/closes correctly

---

## About the contact form

The contact form currently has fields and validation but **does not submit data anywhere**. This is by design — the primary contact methods are the direct channel cards (phone, WhatsApp, email) above the form.

To make the form functional later, you have two options:

1. **Formspree** (easiest): Sign up at formspree.io, create a form, and set the `<form>` action to `https://formspree.io/f/YOUR_FORM_ID`
2. **Resend** (more control): Set up a Vercel serverless function (`/api/contact`) that sends email via resend.com

---

## Environment variables summary

| Variable            | Where     | Purpose                    |
|---------------------|-----------|----------------------------|
| `NEXT_PUBLIC_GA_ID` | Vercel    | Google Analytics 4 ID      |

---

## Updating the site

Any push to the `main` branch on GitHub triggers an automatic redeployment on Vercel. The typical workflow:

1. Make changes locally
2. `git add` + `git commit` + `git push`
3. Vercel builds and deploys automatically (usually under 60 seconds)
