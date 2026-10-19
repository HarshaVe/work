# Superset check: every bullet and role context line in each resume PDF must appear word for word on /resume.
import re, sys, html
SECTION = re.compile(r'^(SUMMARY|SKILLS|EXPERIENCE|PRIOR EXPERIENCE|EARLIER EXPERIENCE|EDUCATION|CERTIFICATIONS|THOUGHT LEADERSHIP|SELECTED IMPACT)\b', re.I)
HEADER = re.compile(r'(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)?\s*\d{4}\s*[–-]\s*(Present|\w+ \d{4}|\d{4})\s*$')
def items(path):
    out, cur, kind, section = [], None, None, None
    def flush():
        nonlocal cur
        if cur: out.append((kind, cur))
        cur = None
    for raw in open(path).read().splitlines()[1:]:
        l = raw.strip()
        if not l: continue
        if SECTION.match(l): flush(); section = l.upper(); continue
        if section not in ('EXPERIENCE', 'SELECTED IMPACT'): continue
        if l.startswith('• '): flush(); cur, kind = l[2:], 'bullet'; continue
        if HEADER.search(l): flush(); cur, kind = '', 'context'; continue
        if l.startswith('Earlier:'): flush(); section = 'EARLIER'; continue
        if cur is None: continue
        if cur == '' and ' · ' in l and not l.endswith('.'): continue  # company line under a role header
        if cur == '': cur = l
        else: cur += ('' if re.search(r'[A-Za-z]-$', cur) else ' ') + l
    flush()
    return [(k, t) for k, t in out if t]
# Spaces after a hyphen are dropped on both sides: a PDF line break after "first-" can't tell
# "first-party" from "first- and third-party".
# Likewise "75%" / "+ CSAT" split across lines is rejoined as "75%+".
norm = lambda t: re.sub(r'%\s+\+', '%+', re.sub(r'-\s+', '-', re.sub(r'\s+', ' ', t.replace('’', "'")))).strip()
page = norm(html.unescape(re.sub(r'<[^>]+>', ' ', open(sys.argv[1]).read())))
for path in sys.argv[2:]:
    its = items(path)
    miss = [(k, t) for k, t in its if norm(t) not in page]
    print(f'{path.split("/")[-1]}: {len(its) - len(miss)} of {len(its)} on /resume ({sum(k=="bullet" for k,_ in its)} bullets, {sum(k=="context" for k,_ in its)} context lines)')
    for k, t in miss: print(f'  MISSING {k}: {t}')
