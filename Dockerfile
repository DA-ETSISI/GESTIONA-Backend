FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG NODE_PORT=3000

EXPOSE ${NODE_PORT}

CMD [ "node", "server.js" ]