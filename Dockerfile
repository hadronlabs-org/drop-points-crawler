FROM oven/bun:latest AS base
WORKDIR /usr/src/app

COPY package.json .

RUN bun install

COPY . .