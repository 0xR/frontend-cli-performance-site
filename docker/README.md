# Build Docker container

Create image to run yarn, clone this repo, run yarn

```
docker build . -t cli

```


```
docker run -it cli

cd packages/vue-cli-nuxt
npm run dev

```