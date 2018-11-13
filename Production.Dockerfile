FROM node:11.1.0 as npm_builder
# Set the entrypoint as bin bash incase we want to inspect the container
ENTRYPOINT ["/bin/bash"]
# Manually copy the package.json
COPY ./package.json /usr/src/app/package.json
COPY ./package-lock.json /usr/src/app/package-lock.json
COPY cypress /usr/src/app/cypress
# Set the work directory to where we copied our source files
WORKDIR /usr/src/app
# Install all of our dependencies
RUN npm install

FROM npm_builder as builder
# Copy the app excluding everything in the .dockerignore
COPY . /usr/src/app
# Put node_modules into the path, this will purely be used for accessing the angular cli
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Set the work directory to where we copied our source files
WORKDIR /usr/src/app
# Build our distributable
RUN npm run build:prod

FROM node:11.1.0 as production
# Copy the dist folder from builder
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
COPY --from=builder /usr/src/app/server.js /usr/src/app/server.js
# Set the work directory to where we copied our source files
WORKDIR /usr/src/app
RUN npm install compression@1.7.3
RUN npm install express@4.16.4
# Create 2 empty environment variables
ENV CONTEXT=
ENV PORT=
# Run the node server which should be used for production
CMD ["node", "server.js"]
