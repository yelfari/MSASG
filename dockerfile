FROM node:20.18-alpine

WORKDIR /usr/src/path

COPY package*.json ./


RUN npm install --production

COPY . .

EXPOSE 3001

CMD ["node", "backend/server.js"]