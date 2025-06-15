# How to Use Prisma with Yarn 4 Plun'n'Play

I created this repo to figure out the best way to integrate Yarn 4 PnP with Prisma. Prisma expects a node_modules folder and doesn't really work right without one. So to separate this nonsense from the rest of our project we will create a yarn workspace to hold this and use pnpify to run prisma that will redirect prisma to work with our pnp packages. The goal of this repo is to show the minimal steps to get it to work.
