const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all asset files
const assetsOutput = execSync('find src/assets public -type f \\( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" -o -name "*.mp4" -o -name "*.webm" -o -name "*.mov" -o -name "*.ico" -o -name "*.webp" -o -name "*.pdf" \\) 2>/dev/null', { encoding: 'utf-8' });

const assetFiles = assetsOutput.trim().split('\n').filter(f => f);

const unusedAssets = [];

// Check each asset file
for (const assetPath of assetFiles) {
  const filename = path.basename(assetPath);
  const basename = path.basename(assetPath, path.extname(assetPath));

  // Skip .DS_Store and other system files
  if (filename === '.DS_Store') continue;

  try {
    // Search for references to the filename (without extension and with extension)
    const grepCommand = `grep -r --include="*.vue" --include="*.ts" --include="*.js" --include="*.html" --include="*.css" --include="*.scss" --include="*.json" -l "${filename}" src/ public/ .claude/ 2>/dev/null || true`;
    const result = execSync(grepCommand, { encoding: 'utf-8' }).trim();

    // Also check for references without extension
    const grepCommand2 = `grep -r --include="*.vue" --include="*.ts" --include="*.js" --include="*.html" --include="*.css" --include="*.scss" --include="*.json" -l "${basename}" src/ public/ .claude/ 2>/dev/null || true`;
    const result2 = execSync(grepCommand2, { encoding: 'utf-8' }).trim();

    if (!result && !result2) {
      unusedAssets.push(assetPath);
    }
  } catch (err) {
    // If grep finds nothing, it returns exit code 1, which throws an error in execSync
    unusedAssets.push(assetPath);
  }
}

console.log('=== UNUSED ASSETS ===\n');
console.log(`Found ${unusedAssets.length} unused assets:\n`);
unusedAssets.forEach(asset => {
  console.log(asset);
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total assets: ${assetFiles.length}`);
console.log(`Used assets: ${assetFiles.length - unusedAssets.length}`);
console.log(`Unused assets: ${unusedAssets.length}`);
