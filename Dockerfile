FROM node:22.9.0-alpine3.19 AS constructor
USER node
WORKDIR /home/node/nest
COPY src /home/node/nest/src
COPY package.json /home/node/nest/package.json
COPY tsconfig.json /home/node/nest/tsconfig.json
COPY tsconfig.build.json /home/node/nest/tsconfig.build.json
RUN npm install && npm run build


FROM node:22-alpine3.19
USER node
WORKDIR /home/node/app

COPY --from=constructor /home/node/nest/dist /home/node/app/dist
COPY --from=constructor /home/node/nest/node_modules /home/node/app/node_modules
COPY package.json /home/node/app/package.json
COPY prod/.env.production /home/node/app/.env.production
RUN npm install --production
CMD npm run start:prod
