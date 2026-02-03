# TypeScript Example

Simple TypeScript workspace with per-file folders and compiled output under `dist/`.

Project layout
- `src/lib/` — reusable library modules (exports, types)
- `src/examples/` — runnable example entrypoints you can execute directly
- `dist/` — compiled JS output (generated)
- `dist/results/` — flattened `.js` files for quick running
- `dist/metadata/` — source-maps and `.d.ts` artifacts

Quick commands

Install dev dependencies:
```bash
npm install
```

Build project (compile `src/` → `dist/` and split outputs):
```bash
npm run build
```

Run the compiled `functions` example (from flattened `dist/results`):
```bash
npm run start
# or
node dist/results/functions-demo.js
```

Run the compiled `intro` example (flattened):
```bash
node dist/results/intro-demo.js
```

Compiled metadata (source maps and type declarations) are placed in `dist/metadata`.

Watch for changes (rebuild on save):
```bash
npm run watch
```

Learning & modularity tips
- Keep pure logic in `src/lib/` (export functions, types). Examples should import from the lib and live in `src/examples/`.
- Use `npm run build` to produce production JS, and `npm run dev:functions` to run the example directly without a build.

Quick commands

Install dev dependencies:
```bash
npm install
```

Run examples (no build, realtime):
```bash
npm run dev:functions
npm run dev:intro
```

Run build + run:
```bash
npm run build:run
```

Notes
- Compiled files at the repository root were removed to avoid conflicts; prefer using `dist/`.
- `package.json` provides `build`, `start`, and `watch` scripts.
- If you want ESM modules instead of CommonJS, update `tsconfig.json` (`module`/`target`) and remove the CommonJS-specific settings.

