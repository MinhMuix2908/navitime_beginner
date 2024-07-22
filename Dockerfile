# Use the official Node.js 20.15.1 image as a base
FROM node:20.15.1

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file
COPY .env .env

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
