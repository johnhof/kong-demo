FROM node:9.4

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

CMD [ "sh", "-c", "node ./${RUN_SERVICE}" ]