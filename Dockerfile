FROM node:20.8.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 9099

CMD ["npm", "start"]
