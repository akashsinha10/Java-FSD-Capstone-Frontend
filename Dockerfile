#stage 1
FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install && npm run ng build
#stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/foodbox-ui /usr/share/nginx/html
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]