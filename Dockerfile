# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install a simple web server
RUN npm install -g serve

# Set the command to run the web server on the build directory
CMD ["serve", "-s", "build"]

# Expose port 5000 to be used by the web server
EXPOSE 5000
