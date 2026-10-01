# Weiyi He — personal website

Academic homepage at <https://hwyii.github.io>, built with Jekyll.

## Edit content

- `_pages/about.md`: homepage biography.
- `_news/`: dated news items.
- `_bibliography/papers.bib`: publications; `selected={true}` includes a paper on the homepage.
- `_pages/other.md`: experience, service, and travel map.
- `_data/socials.yml`: contact links and CV PDF.
- `_layouts/academic*.liquid`, `_includes/academic*.liquid`: page templates.
- `assets/css/academic.css`, `assets/js/academic.js`: styling and interactions.

## Preview

```bash
bash _scripts/preview-academic.sh
```

Open `http://localhost:4000`. For an SSH workspace, forward port 4000;
forward 35729 as well for automatic browser refresh.
The script uses a local Bundler installation or the al-folio Singularity image.

## Validate and deploy

```bash
npm ci
npx prettier . --check
bundle exec jekyll build
```

Run `npx prettier . --write` to fix source formatting. Push to `main` to run
GitHub Actions and deploy the generated site through `gh-pages`.

## Travel map

`assets/travel-map/` contains a generated Via embed. Edit the sibling
`travel-footprints` project and run `npm run build:website` there to rebuild it.
Generated bundles and geographic data are excluded from Prettier.
The map reads published footprint data from the Via repository and includes
a fallback copy. Its Espresso palette follows the homepage theme.

## Theme and archives

The site retains al-folio's Jekyll infrastructure and MIT license.
The current academic layout visually follows <https://ber666.github.io/>.
Template demos and documentation have been archived locally outside this
repository; archived copies are not included in Git or the deployed site.
