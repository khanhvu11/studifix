FROM node:13.12.0-alpine as base

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./

ENV REACT_APP_API_URL_PREFIX=http://localhost

CMD ["npm", "start"]    

From base as production

ENV REACT_APP_API_URL_PREFIX=http://studifix.mi.hdm-stuttgart.de

CMD ["npm", "start"]    

# todo: later on we need to serve the react app static via nginx
# RUN npm run build
