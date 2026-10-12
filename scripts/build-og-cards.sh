#!/bin/sh
# Renders the link-preview cards (1200×630 PNG) in public/og/ from scripts/og/card.html.
# One sitewide card, plus a tailored card for each /for page (src/data/site.ts focusPages).
# Keep the headlines and eyebrows here in sync with the pages they preview.
# Usage: scripts/build-og-cards.sh   (needs Google Chrome and an internet connection for fonts)
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TEMPLATE="$PWD/scripts/og/card.html"
mkdir -p public/og

render() { # <name> <json>
  HASH=$(python3 -c 'import sys, urllib.parse; print(urllib.parse.quote(sys.argv[1]))' "$2")
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=8000 \
    --screenshot="public/og/$1.png" "file://$TEMPLATE#$HASH" 2>/dev/null
  echo "public/og/$1.png"
}

render default '{"headline": "Impact isn’t accidental—<br>it’s designed."}'
render enterprise '{"eyebrow": "Enterprise & regulated platforms", "headline": "I build AI-native design orgs, and the quality systems that let them ship at scale."}'
render mobility '{"eyebrow": "Mobility", "headline": "I lead teams where growth meets craft, from first click to years of ownership."}'
render design-org '{"eyebrow": "Design & research leadership", "headline": "I build AI-native design orgs, and the quality systems that let them ship at scale."}'
