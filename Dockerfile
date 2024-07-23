# Production Dockerfile

FROM node:21-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production
RUN npm install --save-dev eslint @jest/types

COPY . .

# Ensure tsconfig.json has correct jsx setting
RUN sed -i 's/"jsx": "preserve"/"jsx": "react-jsx"/' tsconfig.json

# Adjust permissions if needed
RUN chown -R node:node /usr/src/app
USER node

# Build and run application
RUN npm run build

FROM node:21-alpine AS final

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 3000

CMD ["npm", "start"]