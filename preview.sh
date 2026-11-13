#!/usr/bin/env bash
# Local preview using the al-folio image. Uses Docker if available, otherwise Singularity.
set -euo pipefail

PORT="${PORT:-8081}"
IMAGE="${IMAGE:-amirpourmand/al-folio:v0.14.7}"
SERVE="bundle check >/dev/null || bundle install; bundle exec jekyll serve --watch --livereload --port=${PORT} --host=0.0.0.0 --trace --force_polling"

cd "$(dirname "$0")"

if command -v docker >/dev/null 2>&1; then
  docker info >/dev/null 2>&1 || { echo "Docker daemon not running (start Docker Desktop)." >&2; exit 1; }
  echo "Serving at http://localhost:${PORT}"
  exec docker run --rm -it \
    --name hwyii-site-preview \
    -p "${PORT}:${PORT}" -p 35729:35729 \
    -v "$PWD":/srv/jekyll \
    -v hwyii-site-bundle:/usr/local/bundle \
    -w /srv/jekyll \
    "${IMAGE}" \
    bash -lc "${SERVE}"
else
  singularity exec \
    --bind "$PWD":/srv/jekyll \
    --pwd /srv/jekyll \
    "docker://${IMAGE}" \
    bash -lc "${SERVE}"
fi
