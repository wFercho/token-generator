FROM node:20 as base

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]


FROM base as production

ENV NODE_PATH=./build

RUN npm run build