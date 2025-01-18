#!/usr/bin/env node

import { program } from 'commander';
import prompts from 'prompts';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent;
  if (userAgent) {
    if (userAgent.startsWith('pnpm')) return 'pnpm';
    if (userAgent.startsWith('yarn')) return 'yarn';
    if (userAgent.startsWith('npm')) return 'npm';
  }
  
  // Default to pnpm if we can't detect
  try {
    execSync('pnpm --version', { stdio: 'ignore' });
    return 'pnpm';
  } catch {
    try {
      execSync('yarn --version', { stdio: 'ignore' });
      return 'yarn';
    } catch {
      return 'npm';
    }
  }
}

async function init() {
  let projectPath = '';
  const packageManager = detectPackageManager();

  program
    .name('create-next-stack')
    .description('Create a new Next.js project with Convex and Clerk')
    .argument('[project-directory]', 'The name of your project')
    .parse(process.argv);

  const projectDir = program.args[0];

  if (projectDir) {
    projectPath = projectDir;
  } else {
    const res = await prompts({
      type: 'text',
      name: 'path',
      message: 'What is your project named?',
      initial: 'my-app'
    });
    projectPath = res.path;
  }

  if (!projectPath) {
    console.log('Please specify the project directory:');
    console.log('  create-next-stack', chalk.green('<project-directory>'));
    process.exit(1);
  }

  const root = path.resolve(projectPath);
  const appName = path.basename(root);

  if (fs.existsSync(root)) {
    console.error('Directory', chalk.green(projectPath), 'already exists. Please choose a different name.');
    process.exit(1);
  }

  console.log(`Creating a new Next.js app in ${chalk.green(root)}.`);
  console.log();

  try {
    // Clone the repository
    execSync(`git clone https://github.com/VidAIze/NextJS-Convex-Clerk-Starter-Templete.git ${projectPath}`, {
      stdio: 'inherit',
    });

    // Remove .git folder and packages directory
    fs.removeSync(path.join(root, '.git'));
    fs.removeSync(path.join(root, 'packages'));

    // Initialize new git repository
    execSync('git init', { cwd: root, stdio: 'inherit' });

    // Update package.json
    const packageJsonPath = path.join(root, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = appName;
    packageJson.version = '0.1.0';
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    console.log();
    console.log(chalk.cyan('Installing dependencies...'));
    try {
      const installCommand = packageManager === 'yarn' ? 'yarn' : `${packageManager} install`;
      execSync(installCommand, { 
        cwd: root, 
        stdio: 'inherit',
        env: { ...process.env, ADBLOCK: '1', DISABLE_OPENCOLLECTIVE: '1' } // Disable ads
      });
      console.log(chalk.green('✔'), 'Dependencies installed successfully!');
    } catch (error) {
      console.log();
      console.log(chalk.yellow('Warning:'), 'Could not automatically install dependencies.');
      console.log('Please install them manually by running:');
      console.log();
      console.log(chalk.cyan('  cd'), projectPath);
      console.log(chalk.cyan(`  ${packageManager}${packageManager === 'yarn' ? '' : ' install'}`));
      console.log();
    }

    console.log();
    console.log(chalk.green('Success!'), 'Created', chalk.cyan(appName), 'at', chalk.cyan(root));
    console.log();
    console.log('Inside that directory, you can run several commands:');
    console.log();
    const devCommand = packageManager === 'yarn' ? 'yarn dev' : `${packageManager} dev`;
    console.log(chalk.cyan(`  ${devCommand}`));
    console.log('    Starts the development server');
    console.log();
    console.log('Get started by typing:');
    console.log();
    console.log(chalk.cyan('  cd'), projectPath);
    if (!fs.existsSync(path.join(root, 'node_modules'))) {
      console.log(chalk.cyan(`  ${packageManager}${packageManager === 'yarn' ? '' : ' install'}`));
    }
    console.log(chalk.cyan(`  ${devCommand}`));
    console.log();
    console.log('Enjoy your Next.js + Convex + Clerk app! 🚀');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

init().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
}); 