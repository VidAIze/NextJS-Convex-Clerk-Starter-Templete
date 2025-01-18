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

async function init() {
  let projectPath = '';

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

    // Remove .git folder
    fs.removeSync(path.join(root, '.git'));

    // Initialize new git repository
    execSync('git init', { cwd: root, stdio: 'inherit' });

    // Update package.json
    const packageJsonPath = path.join(root, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = appName;
    packageJson.version = '0.1.0';
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    console.log();
    console.log(chalk.green('Success!'), 'Created', chalk.cyan(appName), 'at', chalk.cyan(root));
    console.log();
    console.log('Inside that directory, you can run several commands:');
    console.log();
    console.log(chalk.cyan('  pnpm install'));
    console.log('    Installs all dependencies');
    console.log();
    console.log(chalk.cyan('  pnpm dev'));
    console.log('    Starts the development server');
    console.log();
    console.log('Get started by typing:');
    console.log();
    console.log(chalk.cyan('  cd'), projectPath);
    console.log(chalk.cyan('  pnpm install'));
    console.log(chalk.cyan('  pnpm dev'));
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