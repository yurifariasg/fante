FROM node:12.18.1-alpine

COPY . .
RUN npm install
CMD ["npm", "start"]