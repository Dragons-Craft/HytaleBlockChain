# Hytale Block Chain
by [chrisbarnes2000](https://github.com/chrisbarnes2000) & [reikamoon :ribbon:](https://github.com/reikamoon)

## :video_game: What is Hytale?
<b>Hytale</b> is an upcoming sandbox game by Hypixel Studios. Hytale aims to immerse players in a procedurally generated world which boasts of teetering towers and deep dungeons which promise rich rewards.<br>
[Read More...](https://hytale.com/)

## :memo: Project Description
### [Project Demonstration Slides](https://docs.google.com/presentation/d/1CgrEjnAIdKIVoB9BebgOtCa3tw6Crx_ekLeKChjURUE)
Hytale Block-Chain ERC-721 (NFT)
Hytale Block-Chain is a NFT Platform for Creating, Displaying, & Selling/Trading Hytale Postcards & Fan Art.<br>
We would like to take the photos from https://hytale.com/media or their Twitter feed and convert them into an NFT.

## :hammer: Prerequisites This Project Is Built With...

Please install or have installed the following:

- [nodejs and npm](https://nodejs.org/en/download/)
- [python](https://www.python.org/downloads/)

<li>[Back-End]: Solidity & Openzepelin Contracts</li> 
<li>[Front-End]: React.js</li>

This is a repo to work with and use NFTs smart contracts in a python environment, using the Chainlink-mix as a starting point. 

If you'd like to see another repo using random NFTs that are deployed to mainnet, check out the [D&D package](https://github.com/PatrickAlphaC/dungeons-and-dragons-nft).

## Installation

1. [Install Brownie](https://eth-brownie.readthedocs.io/en/stable/install.html), if you haven't already. Here is a simple way to install brownie.

```bash
pip install eth-brownie
```
Or, if that doesn't work, via pipx
```bash
pip install --user pipx
pipx ensurepath
# restart your terminal
pipx install eth-brownie
```

2. Clone this repo
```
brownie bake nft-mix
cd nft
```

1. [Install ganache-cli](https://www.npmjs.com/package/ganache-cli)

```bash
npm install -g ganache-cli
```

If you want to be able to deploy to testnets, do the following. 

4. Set your environment variables

Set your `WEB3_INFURA_PROJECT_ID`, and `PRIVATE_KEY` [environment variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html). 

You can get a `WEB3_INFURA_PROJECT_ID` by getting a free trial of [Infura](https://infura.io/). At the moment, it does need to be infura with brownie. You can find your `PRIVATE_KEY` from your ethereum wallet like [metamask](https://metamask.io/). 

You'll also need testnet rinkeby ETH and LINK. You can get LINK and ETH into your wallet by using the [rinkeby faucets located here](https://docs.chain.link/docs/link-token-contracts#rinkeby). If you're new to this, [watch this video.](https://www.youtube.com/watch?v=P7FX_1PePX0)

You can add your environment variables to the `.env` file:

```
export WEB3_INFURA_PROJECT_ID=<PROJECT_ID>
export PRIVATE_KEY=<PRIVATE_KEY>
```

AND THEN RUN `source .env` TO ACTIVATE THE ENV VARIABLES
(You'll need to do this everytime you open a new terminal, or [learn how to set them easier](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html))


Or you can run the above in your shell. 


# Useage

There are 2 types of NFTs here. 
1. `SimpleCollectibles.sol`
2. `AdvancedCollectibles.sol`

They each deploy unique dogs. The advanced version gives you a random breed (out of a Pug, Shiba Inu, and St. Bernard).

The advanced collection uses a [Chainlink VRF](https://docs.chain.link/docs/get-a-random-number) to deploy the random dog. 

You can 100% use the rinkeby testnet to see your NFTs rendered on opensea, but it's suggested that you test and build on a local development network so you don't have to wait as long for transactions. 

### Running Scripts

The simple collectibles work on a local network,  however the advanced requires a testnet. We default to rinkeby since that seems to be the testing standard for NFT platforms. You will need testnet rinkeby ETH and testnet Rinkeby LINK. You can find faucets for both in the [Chainlink documentation](https://docs.chain.link/docs/link-token-contracts#rinkeby). 

# For the Simple ERC721
```
brownie run scripts/simple_collectible/deploy_simple.py --network rinkeby
brownie run scripts/simple_collectible/create_collectible.py --network rinkeby
```

# For the Advanced ERC721

You'll need [testnet Rinkeby](https://faucet.rinkeby.io/) and [testnet LINK](https://rinkeby.chain.link/) in the wallet associated with your private key. 

```
brownie run scripts/advanced_collectible/deploy_advanced.py --network rinkeby
brownie run scripts/advanced_collectible/create_collectible.py --network rinkeby
```
Then:
```
brownie run scripts/advanced_collectible/create_metadata.py --network rinkeby
brownie run scripts/advanced_collectible/set_tokenuri.py --network rinkeby
```

## Verify on Etherscan

> Looking for help fixing this!

Currently, the advanced collectibles contract has an issue with ERC721 and the Chainlink contracts, so they have be verified manually. However, the simple contract can be verified if you just set your `ETHERSCAN_TOKEN`. 

### Misc
There are some helpful scripts in `helpful_scripts.py`.

# Viewing on OpenSea
After running the scripts from the `For the Advanced ERC721` section

1. Create the metadata

Metadata is the URI needed to upload data. You can either:
- Upload to IPFS yourself
- Use the metadata already created when you cloned this repo. 

### If you want to upload to IPFS yourself

Download [IPFS](https://ipfs.io/) 
Set `export IPFS_URL=http://127.0.0.1:5001` and `export UPLOAD_IPFS=true` environment variables
Run the IPFS daemon: `ipfs daemon`
Then Run
```
brownie run scripts/advanced_collectible/create_metadata.py --network rinkeby
```

Alternatively, you could upload the uri manually:
Add the file created in `metadata/rinkeby/NAME.json` to [IPFS](https://ipfs.io/) or [Pinata](https://pinata.cloud/). 
### If you want to use the metadata from this repo

Just run:
```
brownie run scripts/advanced_collectible/create_metadata.py --network rinkeby
```

2. Set the tokenURI 
Run
```
brownie run scripts/advanced_collectible/set_tokenuri.py --network rinkeby
```
And after some time, (you may have to wait up to 20 minutes for it to render on opensea), you should see your NFT on opensea! [It'll look something like this.](https://testnets.opensea.io/assets/0x8acb7ca932892eb83e4411b59309d44dddbc4cdf/0)

## *NEW* Pinata

If you want to auto-upload to pinata instead of IPFS automatically, you can do so by getting a [Pinata API Key.](https://pinata.cloud/documentation#GettingStarted)

You'll need the following environment variables (you can get them from Pinata)
```
PINATA_API_KEY
PINATA_API_SECRET
```
Then run:
```
python scripts/upload_to_pinata.py
```

## Testing

```
brownie test
```

## Linting

```
pip install black 
pip install autoflake
autoflake --in-place --remove-unused-variables -r .
black .
```

## Resources

To get started with Brownie:

* [Chainlink Documentation](https://docs.chain.link/docs)
* Check out the [Chainlink documentation](https://docs.chain.link/docs) to get started from any level of smart contract engineering. 
* Check out the other [Brownie mixes](https://github.com/brownie-mix/) that can be used as a starting point for your own contracts. They also provide example code to help you get started.
* ["Getting Started with Brownie"](https://medium.com/@iamdefinitelyahuman/getting-started-with-brownie-part-1-9b2181f4cb99) is a good tutorial to help you familiarize yourself with Brownie.
* For more in-depth information, read the [Brownie documentation](https://eth-brownie.readthedocs.io/en/stable/).

Shoutout to [TheLinkMarines](https://twitter.com/TheLinkMarines) on twitter for the puppies!

Any questions? Join our [Discord](https://discord.gg/2YHSAey)

<!--
<li>https://hytale.com</li>
<li>https://hytale.com/media</li>
<li>https://hypixelstudios.com</li>
<li>https://medium.com/coinmonks/token-standards-erc20-vserc721-vs-erc1155-3106f1e3f2f3</li>
<li>https://betterprogramming.pub/i-created-a-truffle-box-with-react-redux-and-bootstrap-4-7f382f75483d</li>
<li>https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2</li>
<li>https://medium.com/ethereum-developers/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e</li>
---
<li>https://docs.ipfs.io/how-to/work-with-pinning-services/#use-an-existing-pinning-service</li>
<li>https://docs.ipfs.io/how-to/pin-files/#three-kinds-of-pins</li>
<li>https://pinata.cloud/documentation#PinningServicesAPI</li>
---
<li>https://docs.ipfs.io/how-to/command-line-quick-start</li>
<li>https://docs.ipfs.io/install</li>
---
<li>https://github.com/droxey/shoutouts.eth</li>
<li>https://grain.co/recordings/96121eac-f405-4c29-af73-b2af46677889</li>
<li>https://grain.co/recordings/8b11bd13-addb-4502-9f3d-f64ab0418ace</li>
---
<li>https://docs.openzeppelin.com/contracts/4.x/erc721</li>
<li>https://rinkeby.etherscan.io/</li>
<li>https://faucet.rinkeby.io/</li>
<li>https://app.ens.domains/</li>
<li>https://badge.design/</li>
<li>https://infura.io/</li>
---
<li>https://github.com/dappuniversity/marketplace</li>
<li>https://www.youtube.com/watch?v=VH9Q2lf2mNo</li>
<li>https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUFab0hCblBhTlNyR21nT3lIeXQ1YzBwYkFKUXxBQ3Jtc0tsMkRubEJLRlVaVFQzV09za2lUbGFBTktWU2ZBb044THM2d0VfM0ZaZzEtSjVrYmh5LUlOX2xTYUJIYnl5Q3hZNzJCTlVRVHZrX3JwWkVEZ05TVThyd2YyVTdyYUg5YmJ2SE44aWFZb3NIdHJESXpDaw&q=http%3A%2F%2Fwww.dappuniversity.com%2Farticles%2Fhow-to-build-a-blockchain-app</li>
-->

## License

This project is licensed under the [MIT license](LICENSE).
