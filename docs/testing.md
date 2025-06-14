# Testing the Setup

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