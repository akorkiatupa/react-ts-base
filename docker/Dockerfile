FROM akorkiatupa/nodejs_10_ubuntu_16_04:latest

# Create app directory
RUN mkdir -p /app
# Add app directory as working directory
WORKDIR /app

# Set environment variable to node_modules
ENV PATH /app/node_modules/.bin:$PATH

# Copy package information
COPY ./application/package*.json ./

# install package dependencies
RUN npm install --silent