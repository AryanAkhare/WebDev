const fs = require('fs').promises;
const path = require('path');

const JS_EXT = new Set(['.js']);
const META_EXT = new Set(['.js.map', '.d.ts', '.d.ts.map']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (path.basename(p) === 'results') continue;
      files.push(...await walk(p));
    } else if (e.isFile()) {
      files.push(p);
    }
  }
  return files;
}

async function removeEmptyDirs(dir, skipDirNames) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (skipDirNames.includes(path.basename(p))) continue;
      await removeEmptyDirs(p, skipDirNames);
    }
  }
  // re-read after potential removals
  const remaining = await fs.readdir(dir);
  if (remaining.length === 0 && !skipDirNames.includes(path.basename(dir))) {
    // don't remove the root 'dist' itself
    return fs.rmdir(dir);
  }
}

(async function main() {
  try {
    const root = path.resolve(__dirname, '..', 'dist');
    const resultsTarget = path.join(root, 'results');
    const metaTarget = path.join(root, 'metadata');
    await fs.mkdir(resultsTarget, { recursive: true });
    await fs.mkdir(metaTarget, { recursive: true });
    const files = await walk(root);
    for (const file of files) {
      const base = path.basename(file);
      const lower = base.toLowerCase();
      // Skip moving files already in targets
      if (file.startsWith(resultsTarget) || file.startsWith(metaTarget)) continue;
      let destDir = null;
      if (lower.endsWith('.js')) destDir = resultsTarget;
      else if (lower.endsWith('.js.map') || lower.endsWith('.d.ts') || lower.endsWith('.d.ts.map')) destDir = metaTarget;
      else continue; // ignore other files

      let dest = path.join(destDir, base);
      let i = 1;
      while (true) {
        try {
          await fs.access(dest);
          const name = path.parse(base).name;
          const ext = path.parse(base).ext;
          dest = path.join(destDir, `${name}_${i}${ext}`);
          i++;
        } catch {
          break;
        }
      }
      await fs.rename(file, dest);
    }
    // cleanup empty directories under dist except 'results' and 'metadata'
    const children = await fs.readdir(root, { withFileTypes: true });
    for (const c of children) {
      const p = path.join(root, c.name);
      const bn = path.basename(p);
      if (c.isDirectory() && bn !== 'results' && bn !== 'metadata') {
        await removeEmptyDirs(p, ['results','metadata']);
        // final attempt to remove if empty
        try { await fs.rmdir(p); } catch (_) {}
      }
    }

    console.log('Split compiled artifacts: .js -> dist/results, maps/types -> dist/metadata');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
