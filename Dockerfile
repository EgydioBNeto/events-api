FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 9099

CMD ["npm", "start"]
