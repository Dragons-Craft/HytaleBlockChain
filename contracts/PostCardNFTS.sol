// contracts/PostCardNFTS.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PostCardNFTS is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("PostCardNFTS", "POST-CARD") {

    }

    /* i.e 
    $ truffle console --network rinkeby
    truffle(rinkeby)> let instance = await PostCardNFTS.deployed()
    truffle(rinkeby)> let result = await instance.awardItem(ChrisBarnes2000.eth, "https://gateway.pinata.cloud/ipfs/QmXYvWA7g5Ck66qtVVn1ReE8q5h7WgBMtnA3gQCfvSKQSa")
    */
    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}