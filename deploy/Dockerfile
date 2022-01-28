FROM node:12-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN sh -c "export NODE_OPTIONS=--max_old_space_size=8096 && npm run build"

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
