FROM node:latest

WORKDIR /sr/src/app

COPY package*.json ./

RUN npm install 
# Run npm ci --only=production

COPY . .

EXPOSE 8000

CMD [ "nodemon" , "index.js" ]
