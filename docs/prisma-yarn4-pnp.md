# Setting up Prisma with Yarn 4 and PnP in a Monorepo

This guide explains how to set up Prisma in a Yarn 4 monorepo using Plug'n'Play (PnP). This solution has been tested and works with:
- Yarn 4.x
- Prisma 5.x
- TypeScript
- Express

## Project Structure

```
packages/
  ├── prisma/           # Prisma workspace
  │   ├── prisma/      # Schema and migrations
  │   ├── src/         # Generated client and exports
  │   └── package.json
  └── api/             # API workspace
      ├── src/
      └── package.json
```

## Setup Steps

### 1. Initialize Yarn 4 with PnP

```bash
# Initialize Yarn 4
yarn set version 4.x

# Create .yarnrc.yml
```

In `.yarnrc.yml`:
```yaml
nodeLinker: pnp
```

TODO: Check which options are needed.
Create `tsconfig.base.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "declaration": true,
    "sourceMap": true,
    "composite": true,
    "declarationMap": true
  },
  "exclude": ["node_modules"]
}
```

### 2. Set up Prisma Workspace

TODO: Check the devDependencies here.
In `packages/prisma/package.json`:
```json
{
  "name": "@your-project/prisma",
  "version": "1.0.0",
  "private": true,
  "main": "dist/index.js",
  "scripts": {
    "build": "yarn generate && yarn tsc && copyfiles -u 1 \"src/generated/**\" dist",
    "clean": "rm -rf dist tsconfig.tsbuildinfo",
    "generate": "pnpify prisma generate",
    "reset": "pnpify prisma migrate reset --force",
    "seed": "tsc && node dist/seed.js"
  },
  "dependencies": {
    "@prisma/client": "6.9.0"
  },
  "devDependencies": {
    "@types/esprima": "^4",
    "@types/node": "^20.11.24",
    "@yarnpkg/pnpify": "^4.1.5",
    "copyfiles": "^2.4.1",
    "prisma": "6.9.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "prisma": {
    "schema": "prisma/schema.prisma"
  }
}
```

In `packages/prisma/prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../src/generated"
}

// Your schema here
```

Create `packages/prisma/src/index.ts`:
```typescript
export { PrismaClient } from './generated';
```

Create `packages/prisma/src/seed.ts`:
```typescript
import { PrismaClient, film_rating } from './generated';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Actual seed code here. Create your objects and insert them.

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

TODO: determine which of these needs to be set.
Create `packages/prisma/tsconfig.json`: 
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "src",
    "baseUrl": ".",
    "preserveSymlinks": true,
    "types": ["node"]
  },
  "include": [
    "src/**/*"
  ]
}
```

Create `packages/prisma/.env`:
```shell
DB_NAME=tapper
DB_USER=tapper_user
DB_PASSWORD=test1234
DB_HOST=localhost
DB_PORT=3306
# Database connection string for Prisma
DATABASE_URL="mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
```

TODO: Create initial migration?

### 3. Set up API Workspace

In `packages/api/package.json`:
```json
{
  "name": "@your-project/api",
  "version": "1.0.0",
  "private": true,
  "main": "dist/index.js",
  "scripts": {
   "build": "tsc --build",
   "clean": "rm -rf dist tsconfig.tsbuildinfo",
   "dev": "ts-node-dev --respawn --transpile-only ./src/index.ts",
   "start": "node --require ../../.pnp.cjs ./dist/index.js"
  },
  "dependencies": {
    "@prisma/client": "6.9.0",
    "@your-project/prisma": "1.0.0",
    "express": "^4.18.3"
  },
  "devDependencies": {
    "@types/express": "^4.18.3",
    "ts-node": "^10.x.x",
    "ts-node-dev": "^2.x.x",
    "typescript": "^5.3.3"
  },
  "dependenciesMeta": {
    "@prisma/client": {
      "unplugged": true
    }
  }
}
```

TODO: Check if the references section is necessarry.
TODO: determine which of these needs to be set.
Create `packages/api/tsconfig.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "src",
    "baseUrl": ".",
    "paths": {
      "@tapper/*": ["../*/src"]
    }
  },
  "include": ["src/**/*"],
  "references": [
    { "path": "../prisma" }
  ]
}
```

In your API code, import Prisma from your workspace:
```typescript
import { PrismaClient } from '@your-project/prisma';
```

### 4. Generate Prisma Client

```bash
cd packages/prisma
yarn generate
```

## Common Issues and Solutions

### 1. Module Not Found Errors

If you see errors about modules not being found:
- Ensure all dependencies are properly declared in package.json
- Run `yarn install` after adding new dependencies
- Check that the `main` field in package.json points to the correct file

### 2. Prisma Client Generation

Always use `yarn pnpify prisma generate` instead of `prisma generate` directly. This ensures the client is generated in a PnP-compatible way.

### 3. TypeScript Configuration

Make sure your `tsconfig.json` includes the necessary paths:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@your-project/*": ["../*/src"]
    }
  }
}
```

## Best Practices

1. **Workspace Structure**
   - Keep Prisma schema and client generation in a dedicated workspace
   - Export the client through a clean interface (index.ts)
   - Other workspaces should import from the Prisma workspace, not directly from @prisma/client

2. **Dependencies**
   - Use `@prisma/client` in the Prisma workspace only
   - Other workspaces should depend on your Prisma workspace `@your-projecttapper/prisma`
   - Keep `@prisma/client` unplugged in workspaces that use it

3. **Development Workflow**
   - Always use `yarn pnpify` for Prisma commands
   - Regenerate the client after schema changes
   - Run `yarn install` after adding new dependencies

## Troubleshooting

1. **Client Generation Issues**
   - Ensure the output directory exists
   - Check that the schema.prisma file is valid
   - Verify that @prisma/client is properly installed

2. **Import Issues**
   - Check that the main field in package.json is correct
   - Verify that the workspace is properly linked
   - Ensure TypeScript paths are configured correctly

3. **PnP Issues**
   - Keep pnpMode: loose in .yarnrc.yml
   - Use pnpify for Prisma commands
   - Keep @prisma/client unplugged

## Notes

- The solution avoids using deprecated or removed features from Yarn 2/3
- The generated client is placed in a predictable location that works with PnP
- TypeScript support is maintained throughout the setup

## Using the Prisma Configuration

### Initial Setup for New Developers

1. **Prerequisites**:
   - MySQL instance running
   - User with `GRANT ALL ON *.*` permissions
   - Correct `DATABASE_URL` in `.env` file

2. **First-time Setup**:
```bash
# Install dependencies
yarn install

# Generate Prisma Client
yarn generate

# Create and apply migrations, then seed the database
yarn reset
```

The `yarn reset` command will:
- Create the database if it doesn't exist
- Apply all migrations to create the schema
- Run the seed script to populate initial data

### Development Workflow

1. **Making Schema Changes**:
   When you modify the `schema.prisma` file:
   ```bash
   yarn prisma migrate dev
   ```
   This will:
   - Create new migration files
   - Apply pending migrations
   - Regenerate the Prisma Client
   - Run the seed script (if configured)

2. **Resetting Database**:
   To reset the database to a clean state:
   ```bash
   yarn reset
   ```
   This is useful when you want to:
   - Start fresh with a clean database
   - Ensure your seed data is up to date
   - Test database initialization

3. **Production Deployment**:
   When deploying to production:
   ```bash
   yarn prisma migrate deploy
   ```
   This will:
   - Apply pending migrations
   - Not create new migration files
   - Not modify the schema
   - Not regenerate the Prisma Client

### Understanding Migration Commands

1. **`prisma migrate dev`**:
   - Used during development
   - Creates new migration files
   - Applies pending migrations
   - Regenerates Prisma Client
   - Runs seed script
   - Should NOT be used in production

2. **`prisma migrate deploy`**:
   - Used in production
   - Applies pending migrations
   - Does NOT create new migration files
   - Does NOT modify schema
   - Does NOT regenerate Prisma Client
   - Safe to run multiple times

### Common Development Tasks

1. **Adding New Data**:
   - Modify `seed.ts` to add new seed data
   - Run `yarn reset` to apply changes

2. **Modifying Schema**:
   - Update `schema.prisma`
   - Run `yarn prisma migrate dev`
   - Test changes locally

3. **Resetting to Clean State**:
   - Run `yarn reset`
   - Database will be recreated with fresh data

4. **Checking Migration Status**:
   ```bash
   yarn prisma migrate status
   ```
   Shows which migrations have been applied to the database.
