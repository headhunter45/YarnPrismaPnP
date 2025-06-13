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