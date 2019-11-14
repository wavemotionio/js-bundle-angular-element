# server-rendered-shell

## Development
1. `npm install`
1. `npm run build`
1. `docker build -t shell .`
1. `docker run --name shell-instance -p 80:1337 --env NODE_ENV=dev --env PAT=c5rsp7ktq3fupf33dpqicx3m7t2h3qbo6dystsyj6kiamtwhdrmq --env NPM_TOKEN=bnFuaTJuZ2g2N2c0emJ6Y3d6NmF1am9memxtNnNuYWZkcXZjeGljeWhrM2dscXVpc2NncQ== shell`
1. Visit: http://localhost