const fs = require('fs');
const path = require('path');

const ROOT = path.join(process.cwd(), 'src', 'lib', 'data');
let bad = [];

function walk(d) {
  for (const name of fs.readdirSync(d)) {
    const p = path.join(d, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(name)) {
      const s = fs.readFileSync(p, 'utf8');
      // 1) No lucide-react imports in data
      if (/from\s+['"]lucide-react['"]/.test(s)) bad.push([p, 'imports lucide-react']);
      // 2) No component-shaped icons in data
      if (/icon\s*:\s*[A-Z][A-Za-z0-9_]*/.test(s)) bad.push([p, 'icon is a component instead of a string']);
    }
  }
}
if (fs.existsSync(ROOT)) walk(ROOT);

if (bad.length) {
  console.error('❌ Data validation failed:\n' + bad.map(([f, why]) => ` - ${f}: ${why}`).join('\n'));
  process.exit(1);
} else {
  console.log('✅ Data icons OK (strings only), no lucide-react imports in data.');
}
