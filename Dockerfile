FROM oven/bun:latest AS base
WORKDIR /usr/src/app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile --production

COPY . .