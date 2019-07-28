#specifying base image
FROM node:10-alpine

#copying files from local (source) to image (destination)
COPY package.json .babelrc webpack.config.babel.js ./
COPY src ./src/

#specifying commands to be executed while building the image
RUN npm install
RUN npm run build

EXPOSE 3000
CMD  node .build/index.js