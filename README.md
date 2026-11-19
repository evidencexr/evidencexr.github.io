# EVIDENCE XR 2027

A static workshop website for **Cognition, Biofeedback and Adaptive Immersive Multimedia Systems**, at ACM MMSys 2027 in Ghent, Belgium, on April 2, 2027. The project uses React, Vite, Tailwind CSS, and Lucide. Node.js is used for development and builds. GitHub Pages serves the contents of `dist/`.

## Requirements and local development

Use Node.js 24 LTS with npm. Run these commands from the project directory.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`. These commands add the workspace's portable Node installation to the current PowerShell session and start the site.

```powershell
$nodeDir = (Get-ChildItem .local-tools -Directory -Filter 'node-*-win-x64' | Select-Object -First 1).FullName
$env:Path = "$nodeDir;$env:Path"
npm.cmd run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The build pre-renders the workshop into `dist/index.html` for indexing and first load. React adds navigation behavior in the browser. Use the preview server to test the compiled site over HTTP.

## Edit workshop content

Update [`src/data/workshop.js`](src/data/workshop.js) for event details, dates, CFP topics, paper categories, review guidance, program entries, organizer names and affiliations, and external links. Use YYYY-MM-DD for milestone dates and HH:mm for program start and end times. Edit `workshopDate` to update the workshop milestone, hero, program, footer, and search metadata together.

Set `links.submission`, `links.registration`, and `links.template` to their verified public URLs as they become available. Empty values render a “coming soon” message. Update the dates and submission notices once the organizers confirm them. Update the format and preliminary program after conference approval and program confirmation.

Layout and navigation live in `src/components/` and `src/sections/`. Theme styles are in `src/index.css`. Event metadata is generated from the same configuration as the visible workshop information.

## Publish on GitHub Pages

1. Add the source files, including `package-lock.json` and `.github/workflows/deploy.yml`, to the chosen GitHub repository.
2. Under **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. Push to `main` to trigger the workflow, or run **Deploy workshop to GitHub Pages** from the **Actions** tab.
4. After the deployment job succeeds, open its published URL and check a deep link such as `#program`.

Pages supplies the base path and public URL automatically. To override them, set the repository Actions variables `VITE_BASE_PATH` and `VITE_SITE_URL` to the actual public path and full public URL, respectively. For example, if the website will live under `/2027/`, set the base to `/2027/` and include that path in the full URL. Locally, set the same values in `.env.local` or the shell environment before building. The local default is `/`. Set the base to `./` for directory-relative output.

### Custom domain

Add and verify the domain under **Settings → Pages → Custom domain**, configure the DNS records for your domain type, and enable **Enforce HTTPS** when available. For a site served from the domain root, use `/` as its base. Clear any obsolete base or URL overrides and trigger a fresh build. [GitHub Pages custom domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Troubleshooting

- **Dependency install fails.** Verify that `node --version` reports a supported Node version and that npm can reach its registry. Run `npm ci` from the project directory.
- **The page is blank or assets return 404.** Match the build base to the public path, rebuild, and deploy the entire `dist/` directory. When previewing a subpath build, open the path printed by Vite.
- **An action link still says “coming soon.”** Confirm the corresponding URL is populated in the workshop data file and that the latest deployment succeeded.
- **Pages deployment fails.** Check the Actions job log and verify that the publishing source is set to **GitHub Actions**.
