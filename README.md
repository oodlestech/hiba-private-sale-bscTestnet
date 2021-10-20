# hiba sale
to run this project in your local computer first clone this repo

### Requirements
Ensure your have metamask installed and connected to bscTestnet or development network depending on the blockchain you are running

- Follow this guild to add bscTestnet to your metamask (https://medium.com/spartanprotocol/how-to-connect-metamask-to-bsc-testnet-7d89c111ab2)

Create you `.env` using the `.env.example` as a template

### Migrate Smart Contract
- Start your local development blockchain (this project uses truffle) or
Test blockchain (this project uses bscTestnet) by runing the command "truffle develop"

- run
```truffle migrate --reset --network bscTestnet``` for bsc Test network, to migrate the smart contracts
### Frontend
move into the frontend folder of this repo and install the packages by running the command "npm install"


after package installtions start your frontend by running the command "npm start"

when the frontend is loading metamask is dailed and prompts you to connect to the site, choose an account and click connect

every thing will be all set and working
