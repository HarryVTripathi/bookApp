# specifying base image
FROM python:3.7.4-alpine3.10 as pyStage

# copying files from local (source) to image (destination)
COPY package.json ./
COPY .babelrc webpack.config.babel.js ./
COPY src ./src/


# ==========NODE STAGE=========

FROM node:10-alpine

COPY --from=pyStage package.json .babelrc webpack.config.babel.js ./
COPY src ./src/

#specifying commands to be executed while building the image
RUN npm install
RUN npm run build

EXPOSE 3000
CMD  node .build/index.js