# Generating an ERC721 Markobot Contract

There is an ERC721 contract generator to regenerate a new  Soldiity contract on Rinkeby Testnet 

in support of the [Bot Dapp project](https://github.com/markvelous/botdapp) 

There are 11 unique NFTs stored in Pinata IPFS in support of this project

Set up a .env file with the following lines:

ENDPOINT_RINKEBY="Alchemy Rinkeby API" 
ACCOUNT_1="Metamask Private Key"


Run the following:

### `npx hardhat test`
To check that the codes are running as intended

### `npx hardhat run scripts/robots-deployer.js --network rinkeby`
To generate a new contract on Rinkeby testnet

Update the new contract address in Bot Dapp
