const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'info');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert import
  if (!content.includes('Breadcrumbs')) {
    content = content.replace(
      "import { SEO } from '../../components/SEO';",
      "import { SEO } from '../../components/SEO';\nimport { Breadcrumbs } from '../../components/ui/Breadcrumbs';"
    );
  }

  // Insert component
  if (!content.includes('<Breadcrumbs')) {
    content = content.replace(
      /<SEO title="([^"]+)" \/>/g,
      '<SEO title="$1" />\n      <div className="border-b bg-canvas-secondary"><Container><Breadcrumbs items={[{ label: \'$1\' }]} className="py-2" /></Container></div>'
    );
  }

  fs.writeFileSync(filePath, content);
}
console.log('Done modifying info pages.');
