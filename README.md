## Manual Installation
 - Install nodejs 
 - Run `npm install` in the project directory
 - Run `npm run build` to build the project
 - Run `npm start` to start the server
 - Run `npx prisma migrate dev` to run the database migrations
 - Run `npx prisma generate` to generate the prisma client
 - Run `npx tsc --build` to build the project
 - Run `node dist/index.js` to start the server

## Docker Installation w/o docker compose
 - Install docker
 - Run `docker build -t docker-comp-project .` in the project directory
 - Run `docker run -p 3000:3000 docker-comp-project`
 - Run `docker run -p 5432:5432 docker-comp-project` to run the postgres database


## Docker Installation w docker compose
 - Install docker and docker compose
 - Run `docker compose up` in the project directory