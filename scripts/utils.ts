import { fileURLToPath } from 'url';
import { dirname, resolve } from 'node:path'
import { bgCyan, black } from 'kolorist'

export const port = parseInt(process.env.PORT || '') || 3303
export const r = (...args: string[]) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  return resolve(__dirname, '..', ...args);
}
export const isDev = process.env.NODE_ENV !== 'production'
export const isFirefox = process.env.EXTENSION === 'firefox'

export function log(name: string, message: string) {
  console.log(black(bgCyan(` ${name} `)), message)
}
