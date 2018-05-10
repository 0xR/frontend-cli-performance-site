FROM gcr.io/google-appengine/nodejs AS devdependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

FROM devdependencies AS proddependencies
RUN npm prune --production

FROM devdependencies AS build
COPY . .
RUN  npm run build

FROM proddependencies AS release
COPY --from=build /app/.next .next
EXPOSE 8080
CMD ./node_modules/.bin/next start -p 8080
