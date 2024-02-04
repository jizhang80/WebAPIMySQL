# environment building process record

initialize a TypeScript/Nodejs/Expressjs project using npm:
```
npm init -y
npm install typescript ts-node @types/node @types/express nodemon --save-dev
npm install --save express @prisma/client
```
initialize TypeScript

> npx tsc --init

install the Prisma CLI as a development dependency
> npm install prisma --save-dev
set up Prisma with the init command of the Prisma CLI
> npx prisma init --datasource-provider mysql

Create model in prisma/schema.prisma
...

create SQL migration file
> npx prisma migrate dev --name init

