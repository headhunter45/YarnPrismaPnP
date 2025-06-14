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
pnpMode: loose
pnpFallbackMode: all

packageExtensions:
  "@prisma/client@*":
    peerDependencies:
      "typescript": "*"
```

### 2. Set up Prisma Workspace

In `packages/prisma/package.json`:
```json
{
  "name": "@your-project/prisma",
  "version": "1.0.0",
  "private": true,
  "main": "src/index.ts",
  "scripts": {
    "generate": "pnpify prisma generate",
    "seed": "pnpify ts-node prisma/seed.ts",
    "reset": "pnpify prisma migrate reset --force"
  },
  "dependencies": {
    "@prisma/client": "5.x.x"
  },
  "devDependencies": {
    "@yarnpkg/pnpify": "^4.1.5",
    "prisma": "5.x.x",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
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

### 3. Set up API Workspace

In `packages/api/package.json`:
```json
{
  "name": "@your-project/api",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@prisma/client": "5.x.x",
    "@your-project/prisma": "1.0.0",
    "express": "^4.18.3"
  },
  "dependenciesMeta": {
    "@prisma/client": {
      "unplugged": true
    }
  }
}
```

In your API code, import Prisma from your workspace:
```typescript
import { PrismaClient } from '@your-project/prisma';
```

### 4. Generate Prisma Client

```bash
cd packages/prisma
yarn pnpify prisma generate
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
   - Other workspaces should depend on your Prisma workspace
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

- This setup uses Yarn 4's PnP features but keeps it in "loose" mode for better compatibility
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

### Testing the Setup

To verify that your Prisma setup is working correctly, you can run the test script from either the project root or the prisma package:

From the project root:
```bash
yarn prisma:test-setup
```

Or from the prisma package:
```bash
cd packages/prisma
yarn test-setup
```

This script will:
1. Clean up any existing generated files
2. Run the following commands in sequence:
   - `yarn generate` - Generates the Prisma Client
   - `yarn reset` - Resets the database and applies migrations
   - `yarn seed` - Seeds the database with initial data
3. Verify that:
   - The Prisma Client was generated correctly
   - All required files are present
   - The database can be reset and seeded

This is useful for:
- Verifying your setup after installation
- Testing after making changes to the schema
- Ensuring the development environment is properly configured
- CI/CD pipelines to verify the setup

The test will fail if:
- The Prisma Client generation fails
- Required files are missing
- Database operations fail
- The seed script encounters errors 