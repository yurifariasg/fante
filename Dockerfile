FROM node:12.18.1 AS builder
RUN curl -L https://github.com/balena-io/qemu/releases/download/v3.0.0%2Bresin/qemu-3.0.0+resin-arm.tar.gz | tar zxvf - -C . && mv qemu-3.0.0+resin-arm/qemu-arm-static .

FROM arm32v6/node:12.18.1-alpine

COPY --from=builder /qemu-arm-static /usr/bin

COPY . .
RUN npm install
CMD ["npm", "start"]