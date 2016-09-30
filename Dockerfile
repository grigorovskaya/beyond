FROM node:6.3.1
MAINTAINER Beyond <grigorovskaya@gmail.com>

# Replace sh with bash so we can use source
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install project dependencies
RUN mkdir -p /usr/src/beyond
WORKDIR /usr/src/beyond
# COPY package.json /usr/src/beyond/package.json
COPY . /usr/src/beyond

# Install Node and project deps.
RUN npm install -g nodemon \
  && npm install \
  && npm install -g webpack

# Expose port 3000 (http)
EXPOSE 3000