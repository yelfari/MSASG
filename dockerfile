FROM node:20.18-alpine

WORKDIR /usr/src/path

COPY package*.json ./


RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]