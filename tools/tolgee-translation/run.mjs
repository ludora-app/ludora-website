import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vérifie si on est en mode Doppler (token disponible)
const useDoppler = process.env.DOPPLER_TOKEN || process.env.DOPPLER_CONFIG || process.env.DOPPLER_ENVIRONMENT;

const runScript = () => {
  try {
    const scriptPath = path.join(__dirname, 'index.mjs');
    execSync(`node ${scriptPath}`, { stdio: 'inherit' });
    console.log('Translations updated successfully');
  } catch (error) {
    console.error('Failed to load translations:', error);
    process.exit(1);
  }
};

if (useDoppler) {
  // Exécute via Doppler si configuré
  execSync('doppler run -- node tools/tolgee-translation/index.mjs', { stdio: 'inherit' });
} else {
  // Exécute directement sinon
  runScript();
}
