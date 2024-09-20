FROM node:alpine

WORKDIR /usr/src/test

COPY package*.json ./ 

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 9090

CMD ["npm", "run", "dev"]