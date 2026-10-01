#!/usr/bin/env bash
set -euo pipefail

site_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$site_dir"

# Open http://localhost:4000/. For an SSH workspace, forward port 4000.
# Forward 35729 as well if you want LiveReload to refresh the browser for you.
if command -v bundle >/dev/null 2>&1; then
  exec bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload "$@"
fi

exec singularity exec --bind "$site_dir:/srv/jekyll" --pwd /srv/jekyll \
  docker://amirpourmand/al-folio:v0.14.7 \
  bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload "$@"
