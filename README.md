# Web API MySQL application

This is a web application back-end RESTful API application base on MySQL database.

## Tech stack
* Typescript
* Node.js/Express.js
* Prisma ORM
* MySQL
* JWT
* ejs

## environment setup process
### pre-task
* install git
* add your SSH key to GitHub
* install node.js
* install yarn
### steps
1. git clone git@github.com:jizhang80/WebAPIMySQL.git
2. yarn install # install all the packages in package.json
3. create file .env, add DATABASE_URL="mysql://username:password@dbhost:dbport/dbname", remember if you have '@' or '#' in the password, please replaced by '%40' or '%23', [ref link](https://stackoverflow.com/questions/63684133/prisma-cant-connect-to-postgresql/68213745#68213745)
4. npx prisma generate # connect env variable DATABASE_URL with prisma
5. yarn prisma migrate dev --name init # create schema in db by prisma migrate tool
6. start app: yarn run starts
## User Story
user create post,
user comment post,

## DB model design

user (username, email, password, )


