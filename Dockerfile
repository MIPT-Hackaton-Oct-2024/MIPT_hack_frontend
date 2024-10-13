FROM node:18-alpine

WORKDIR /react-app

COPY ./app /react-app/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]