FROM ubuntu:latest

RUN apt-get update && apt-get install -y git curl apt-transport-https sudo

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -

RUN DEBIAN_FRONTEND=noninteractive apt-get --allow-unauthenticated -yq install nodejs yarn

RUN git clone https://github.com/0xR/frontend-cli-performance-site.git

WORKDIR frontend-cli-performance-site

RUN yarn
