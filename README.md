# Weiyi He — personal website

Source of <https://hwyii.github.io>, built with Jekyll.

## Content

- `_pages/about.md`: homepage
- `_news/`: news items
- `_bibliography/papers.bib`: publications (`selected={true}` shows a paper on the homepage)
- `_pages/teaching.md`: experience page
- `_pages/other.md`: presentations, service, awards, and travel map
- `_data/socials.yml`: contact links and CV

## Local preview

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. Pushing to `main` deploys the site via GitHub Actions.
