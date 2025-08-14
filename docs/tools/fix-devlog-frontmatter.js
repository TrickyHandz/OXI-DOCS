const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', '_devlog');
const re = /^(\d{1,2})-(\d{1,2})-(\d{2})(?:-(s\d{2}))?\.md$/i;

const pad = n => String(n).padStart(2, '0');
const y2k = yy => String(2000 + parseInt(yy, 10));

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith('.md')) continue;
  const m = file.match(re);
  if (!m) { console.warn('Skipping (name does not match):', file); continue; }

  const [, mth, day, yy, sup] = m;
  const yyyy = y2k(yy);
  const dateISO = `${yyyy}-${pad(mth)}-${pad(day)}`;
  const slug = sup ? `${dateISO}-${sup}` : dateISO;       // ex: 2025-08-12-s01
  const title = `Dev Log — ${dateISO}${sup ? ` ${sup}` : ''}`;

  const full = path.join(dir, file);
  const raw = fs.readFileSync(full, 'utf8');

  if (raw.startsWith('---\n')) {
    console.log('Front matter present:', file);
    continue;
  }

  const fm = [
    '---',
    'layout: post',
    `title: "${title}"`,
    `date: "${dateISO}"`,
    `slug: "${slug}"`,
    'tags: ["devlog"]',
    '---',
    ''
  ].join('\n');

  fs.writeFileSync(full, fm + raw, 'utf8');
  console.log('Added front matter:', file);
}
