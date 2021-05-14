FROM node:13.12.0-alpine as base

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./

ENV API_URL_PREFIX=http://studifix.mi.hdm-stuttgart.de/

CMD ["npm", "start"]    

From base as production



RUN npm run build
