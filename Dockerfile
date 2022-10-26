FROM node:16.16.0
WORKDIR /usr/src/react-typescript-learn
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm","start"]