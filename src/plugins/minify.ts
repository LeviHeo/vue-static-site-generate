// @ts-nocheck
import { minify } from 'terser'
import { join } from 'path'
import { readdir, writeFile, readFile } from 'fs/promises'

export async function minifyJs() {
  try {
    const outputDir = `dist/assets/js`;
    const files = await readdir(outputDir);
    console.log(' ');
    console.log('\x1b[36m%s\x1b[0m', '[Plugin-Minify] Minify Start...', '('+files.length+')');
    for (const file of files) {
      if (file.endsWith('.js')) {
        const filePath = join(outputDir, file);
        const code = await readFile(filePath, 'utf-8');
        const result = await minify(code, {
          // ? https://terser.org/docs/api-reference/
          mangle:{
            // properties: true,
            // toplevel: true,
          },
        });
        if (result.error) {
          console.error('Error minifying code:', result.error);
          continue;
        }
        await writeFile(filePath, result.code);
      }
      if (file.endsWith('.mjs')) {
        const filePath = join(outputDir, file);
        const code = await readFile(filePath, 'utf-8');
        const result = await minify(code);
        if (result.error) {
          console.error('Error minifying code:', result.error);
          continue;
        }
        await writeFile(filePath, result.code);
      }
      console.log(file)
    }
    console.log('JavaScript files minified successfully!');
  } catch (error) {
    console.error('Error minifying JavaScript files:', error);
  }
}