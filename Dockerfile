# use the official node.js 20 LTS image
FROM node:20-alpine

# set the working directory
WORKDIR /app

# copy the package.json and package-lock.json files to the container
COPY package*.json ./

# install the dependencies
RUN npm install -g nodemon

# copy the rest of the application code to the container
COPY  . .

#expose the port
EXPOSE 3000

# define the command to run the application
CMD ["nodemon", "app.js"]