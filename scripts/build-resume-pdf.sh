#!/bin/sh
# Regenerates public/downloads/harsha-vemulapalli-resume.pdf from the Résumé page,
# so the PDF and the page never drift apart. Run with the dev server up (npm run dev).
set -e
URL="${1:-http://localhost:4321/resume/}"
OUT="$(dirname "$0")/../public/downloads/harsha-vemulapalli-resume.pdf"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --no-pdf-header-footer --virtual-time-budget=5000 --print-to-pdf="$OUT" "$URL"
