#!/bin/sh
# Superset check: every bullet and role context line in every resume PDF in public/downloads/
# must appear word for word on /resume. Builds the site, then prints "N of N" per PDF.
# Usage: scripts/check-resume-superset.sh   (macOS; uses PDFKit through Swift to read the PDFs)
set -e
cd "$(dirname "$0")/.."
npx astro build > /dev/null
TMP=$(mktemp -d)
for pdf in public/downloads/harsha-vemulapalli-resume*.pdf; do
  swift scripts/pdftext.swift "$pdf" > "$TMP/$(basename "$pdf" .pdf).txt" 2>/dev/null
done
python3 scripts/check-resume-superset.py dist/resume/index.html "$TMP"/*.txt
rm -rf "$TMP"
