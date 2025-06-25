# 1. Start with a base image - a lightweight version of Node.js
FROM node:22-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json first
# This takes advantage of Docker's layer caching.
COPY package*.json ./

# 4. Install the application's dependencies
RUN npm install

# 5. Copy the rest of the application's code
COPY . .

# 6. Expose the port the app runs on
EXPOSE 3000

# 7. Define the command to run the application
CMD ["node", "index.js"]