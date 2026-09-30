# xrstandards.org

Hub site for XRStand (IEEE ISMAR Standardization Committee): links to every
year's event page plus papers, standards, talks and recordings.

Plain HTML/CSS/JS — no build step. Hosted on GitHub Pages.

## Update content

Edit **`data.js`** only.

- New year → add an entry to `events`.
- New paper / recording / slides / standard → add an entry to `resources`:

```js
{ type: "recording", year: 2026, title: "XRStand 2026 Tutorial — recording", url: "https://youtu.be/..." },
{ type: "paper", year: 2026, title: "...", authors: "...", url: "https://doi.org/..." },
{ type: "slides", year: 2026, title: "...", authors: "...", url: "slides/2026-talk1.pdf" },
```

PDFs/slides can be committed into a `slides/` or `papers/` folder and linked
with a relative path.

Commit & push → the site updates in about a minute.

## Local preview

Open `index.html` directly in a browser, or run `npx serve .`.

## Deployment (one-time)

1. Create a public repo `xrstandards` under your GitHub account
   (`so15963`) and push these files.
2. Repo → Settings → Pages → Source: *Deploy from a branch*, `main` / root.
3. Settings → Pages → Custom domain: `xrstandards.org` (the `CNAME` file
   already contains it). Tick **Enforce HTTPS** once the certificate is issued.
4. At the domain registrar, set DNS:

   | Type  | Name | Value                    |
   |-------|------|--------------------------|
   | A     | @    | 185.199.108.153          |
   | A     | @    | 185.199.109.153          |
   | A     | @    | 185.199.110.153          |
   | A     | @    | 185.199.111.153          |
   | AAAA  | @    | 2606:50c0:8000::153      |
   | AAAA  | @    | 2606:50c0:8001::153      |
   | AAAA  | @    | 2606:50c0:8002::153      |
   | AAAA  | @    | 2606:50c0:8003::153      |
   | CNAME | www  | `so15963.github.io` |

5. (Recommended) Account Settings → Pages → *Verify a domain* for
   `xrstandards.org` to prevent domain takeover.

Notes:
- The yearly event pages stay at their `xrstand-standardization-committee.github.io/...`
  URLs; this site links to them.
- To hand the site over to the committee later: repo Settings → Transfer to
  the organization, then re-enter the custom domain under Pages and move the
  domain verification to the org.
