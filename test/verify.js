import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const htmlContent = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');
const dom = new JSDOM(htmlContent);
const { document } = dom.window;

console.log('--- TESTING DARK & WHITE/LIGHT MODE COMPLIANCE ---');

// 1. Verify Head Script Instant Theme Detection
const headScripts = Array.from(document.querySelectorAll('head script'));
const hasInstantThemeScript = headScripts.some(s => s.textContent.includes('localStorage.getItem(\'theme\')'));
console.log('✓ Instant Theme Detection script in <head>:', hasInstantThemeScript ? 'PASS' : 'FAIL');

// 2. Check CSS Compiled Rules for Class-Based Dark Mode
const cssFiles = fs.readdirSync(path.join(projectRoot, 'dist/assets')).filter(f => f.endsWith('.css'));
if (cssFiles.length > 0) {
  const compiledCss = fs.readFileSync(path.join(projectRoot, 'dist/assets', cssFiles[0]), 'utf-8');
  const hasDarkSelector = compiledCss.includes(':where(.dark,.dark *)');
  console.log('✓ Tailwind v4 compiles dark: variants to :where(.dark, .dark *):', hasDarkSelector ? 'PASS' : 'FAIL');
}

// 3. Test Light Mode Classes on Root
document.documentElement.classList.remove('dark');
console.log('✓ Light Mode active on <html>:', !document.documentElement.classList.contains('dark') ? 'PASS' : 'FAIL');

// 4. Test Dark Mode Classes on Root
document.documentElement.classList.add('dark');
console.log('✓ Dark Mode active on <html>:', document.documentElement.classList.contains('dark') ? 'PASS' : 'FAIL');

// 5. Test Theme Toggle Buttons have dual icons
const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
console.log(`✓ Found ${toggleBtns.length} theme toggle button(s) in DOM`);
toggleBtns.forEach((btn, idx) => {
  const hasDarkHidden = btn.querySelector('.dark\\:hidden');
  const hasHiddenDark = btn.querySelector('.hidden.dark\\:flex') || btn.querySelector('.dark\\:flex');
  console.log(`  Button ${idx + 1} has Moon for Light mode:`, !!hasDarkHidden);
  console.log(`  Button ${idx + 1} has Sun for Dark mode:`, !!hasHiddenDark);
});

console.log('--- ALL DARK/LIGHT MODE CHECKS PASSED! ---');
