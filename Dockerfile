FROM node:20-alpine

WORKDIR /app

COPY package* ./

RUN npm install -g typescript 

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD npx prisma migrate dev && npx prisma generate && node dist/index.js