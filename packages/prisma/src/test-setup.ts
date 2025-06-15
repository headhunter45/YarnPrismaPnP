import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Get the project root directory
const projectRoot = process.cwd();
const isPrismaPackage = projectRoot.endsWith('packages/prisma');

// Configuration
const GENERATED_DIR = isPrismaPackage 
  ? path.join(projectRoot, 'src', 'generated')
  : path.join(projectRoot, 'packages', 'prisma', 'src', 'generated');

const DIST_DIR = isPrismaPackage
  ? path.join(projectRoot, 'dist')
  : path.join(projectRoot, 'packages', 'prisma', 'dist');

const PRISMA_DIR = isPrismaPackage
  ? path.join(projectRoot, 'prisma')
  : path.join(projectRoot, 'packages', 'prisma', 'prisma');

// Simple file operations that don't need TypeScript
function cleanupSync() {
  console.log('🧹 Cleaning up generated files...');
  console.log(`Looking for generated files in: ${GENERATED_DIR}`);
  
  // Remove generated Prisma client
  if (fs.existsSync(GENERATED_DIR)) {
    fs.rmSync(GENERATED_DIR, { recursive: true, force: true });
  }

  // Remove dist directory
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }

  // Remove TypeScript build info file
  const tsBuildInfoPath = path.join(projectRoot, 'tsconfig.tsbuildinfo');
  if (fs.existsSync(tsBuildInfoPath)) {
    fs.rmSync(tsBuildInfoPath, { force: true });
  }
}

export async function cleanup() {
  cleanupSync();
}

export async function verifyGeneratedFiles() {
  console.log('🔍 Verifying generated files...');
  console.log(`Checking generated files in: ${GENERATED_DIR}`);
  
  if (!fs.existsSync(GENERATED_DIR)) {
    throw new Error(`Generated directory was not created at ${GENERATED_DIR}`);
  }

  const requiredFiles = [
    'index.js',
    'index.d.ts',
    'edge.js',
    'edge.d.ts',
    'default.js',
    'default.d.ts',
    'package.json',
    'runtime/library.js',
    'runtime/library.d.ts',
    'runtime/edge.js',
    'runtime/edge-esm.js',
    'runtime/index-browser.js',
    'runtime/index-browser.d.ts'
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(GENERATED_DIR, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Required file ${file} was not generated at ${filePath}`);
    }
  }

  const indexContent = fs.readFileSync(path.join(GENERATED_DIR, 'index.d.ts'), 'utf-8');
  if (!indexContent.includes('export class PrismaClient')) {
    throw new Error('PrismaClient is not properly exported');
  }

  const runtimeFiles = [
    'runtime/library.js',
    'runtime/edge.js',
    'runtime/edge-esm.js',
    'runtime/index-browser.js'
  ];

  for (const file of runtimeFiles) {
    const filePath = path.join(GENERATED_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    if (content.length === 0) {
      throw new Error(`Runtime file ${file} is empty`);
    }
  }
}

export async function verifyDistFiles() {
  console.log('🔍 Verifying dist files...');
  console.log(`Checking dist files in: ${DIST_DIR}`);

  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(`Dist directory was not created at ${DIST_DIR}`);
  }

  const requiredDistFiles = [
    'generated/index.js',
    'generated/index.d.ts',
    'generated/edge.js',
    'generated/edge.d.ts',
    'generated/default.js',
    'generated/default.d.ts',
    'generated/package.json',
    'generated/runtime/library.js',
    'generated/runtime/library.d.ts',
    'generated/runtime/edge.js',
    'generated/runtime/edge-esm.js',
    'generated/runtime/index-browser.js',
    'generated/runtime/index-browser.d.ts'
  ];

  for (const file of requiredDistFiles) {
    const filePath = path.join(DIST_DIR, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Required dist file ${file} was not created at ${filePath}`);
    }
  }

  const distFiles = [
    'generated/index.js',
    'generated/runtime/library.js',
    'generated/runtime/edge.js',
    'generated/runtime/edge-esm.js',
    'generated/runtime/index-browser.js'
  ];

  for (const file of distFiles) {
    const filePath = path.join(DIST_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    if (content.length === 0) {
      throw new Error(`Dist file ${file} is empty`);
    }
  }
}

export async function testGenerate() {
  console.log('🚀 Testing Prisma generate...');
  console.log(`Running from: ${projectRoot}`);

  try {
    cleanupSync();
    execSync('yarn generate', { 
      stdio: 'inherit',
      cwd: isPrismaPackage ? projectRoot : path.join(projectRoot, 'packages', 'prisma')
    });
    await verifyGeneratedFiles();
    console.log('✅ Prisma generate test completed successfully!');
  } catch (error) {
    console.error('❌ Generate test failed:', error);
    throw error;
  }
}

export async function testBuild() {
  console.log('🚀 Testing Prisma build...');
  console.log(`Running from: ${projectRoot}`);

  try {
    execSync('yarn build', {
      stdio: 'inherit',
      cwd: isPrismaPackage ? projectRoot : path.join(projectRoot, 'packages', 'prisma')
    });
    await verifyDistFiles();
    console.log('✅ Prisma build test completed successfully!');
  } catch (error) {
    console.error('❌ Build test failed:', error);
    throw error;
  }
}

export async function testReset() {
  console.log('🚀 Testing Prisma reset...');
  console.log(`Running from: ${projectRoot}`);

  try {
    execSync('yarn reset', { 
      stdio: 'inherit',
      cwd: isPrismaPackage ? projectRoot : path.join(projectRoot, 'packages', 'prisma')
    });
    console.log('✅ Prisma reset test completed successfully!');
  } catch (error) {
    console.error('❌ Reset test failed:', error);
    throw error;
  }
}

export async function testSeed() {
  console.log('🚀 Testing Prisma seed...');
  console.log(`Running from: ${projectRoot}`);

  try {
    execSync('yarn seed', { 
      stdio: 'inherit',
      cwd: isPrismaPackage ? projectRoot : path.join(projectRoot, 'packages', 'prisma')
    });
    console.log('✅ Prisma seed test completed successfully!');
  } catch (error) {
    console.error('❌ Seed test failed:', error);
    throw error;
  }
}

// Main function that runs all tests
async function main() {
  try {
    console.log('🧪 Starting Prisma setup test...');
    console.log(`Current working directory: ${projectRoot}`);
    
    const command = process.argv[2];
    
    switch (command) {
      case 'generate':
        await testGenerate();
        break;
      case 'build':
        await testBuild();
        break;
      case 'reset':
        await testReset();
        break;
      case 'seed':
        await testSeed();
        break;
      default:
        // Run all tests if no specific command is provided
        await testGenerate();
        await testBuild();
        await testReset();
        await testSeed();
    }
    
    console.log('✅ All Prisma tests completed successfully!');
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

// Only run main if this file is being run directly
if (require.main === module) {
  main();
} 