const fs = require('fs');

const SOURCE = '.all-contributorsrc';
const TARGET = './src/app/static/about/about.component.html';
const TOKEN_START = '<!-- ALL-CONTRIBUTORS-LIST:START -->';
const TOKEN_END = '<!-- ALL-CONTRIBUTORS-LIST:END -->';
const PATTERN = new RegExp(`${TOKEN_START}[\\s\\S]*${TOKEN_END}`, 'gim');

const contributors = JSON.parse(fs.readFileSync(SOURCE, 'utf8')).contributors;
const content = fs.readFileSync(TARGET, 'utf8');

const data = contributors.map(c => `
  <a class="contributor" href="${c.profile}" target="_blank">
    <img src="${c.avatar_url}">
    <span>${c.name}</span>
  </a>
`).join('\n');
const replacement = `${TOKEN_START}${data}${TOKEN_END}`;
const adjustedContent = content.replace(PATTERN, replacement);

fs.writeFileSync(TARGET, adjustedContent);

console.log(`${contributors.length} contributors added to HTML`);
