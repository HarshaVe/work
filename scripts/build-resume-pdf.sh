#!/bin/sh
# Prints the Resume page to a PDF, for checking the page's print layout.
# The PDFs in public/downloads/ are supplied by Harsha and are the source of truth,
# so this script never writes there unless you pass that path explicitly.
# Usage (dev server running): scripts/build-resume-pdf.sh <output.pdf> [url]
set -e
if [ -z "$1" ]; then
  echo "Usage: $0 <output.pdf> [url]" >&2
  exit 1
fi
OUT="$1"
URL="${2:-http://localhost:4321/resume/}"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --no-pdf-header-footer --virtual-time-budget=5000 --print-to-pdf="$OUT" "$URL"
