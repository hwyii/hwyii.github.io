#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8081}"
IMAGE="${IMAGE:-amirpourmand/al-folio:v0.14.7}"

cd "$(dirname "$0")"

singularity exec \
  --bind "$PWD":/srv/jekyll \
  --pwd /srv/jekyll \
  "docker://${IMAGE}" \
  bash -lc "bundle exec jekyll serve --watch --port=${PORT} --host=0.0.0.0 --trace --force_polling"
