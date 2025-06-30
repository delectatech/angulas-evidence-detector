# Stage 1: Build the application using Node.js
FROM node:22.7.0-alpine as builder

ARG ENVIRONMENT=prod

# Set the working directory
WORKDIR /app

# Install Angular CLI
RUN npm install -g @angular/cli

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN ng build --configuration=${ENVIRONMENT}

# Step 2: Serve the application with nginx
# Use nginx as the base image for serving the app
FROM nginx:alpine as production-stage

# Copy custom nginx configuration
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

# Remove the default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy the built app from the previous stage
COPY --from=builder /app/dist/football-detector-front/browser /usr/share/nginx/html

## Move index.html to the root directory
# RUN mv /usr/share/nginx/html/angular/index.html /usr/share/nginx/html/index.html

# Expose port 4200 for the web server (nginx defaults to listen on 80, but our custom config listens on 4200
EXPOSE 4200
