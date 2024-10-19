// contracts/HelloBaseNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HelloBaseNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("HelloBaseNFT", "HBNFT") {
        tokenCounter = 0;
    }

    function mintHelloNFT(string memory tokenURI) public {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter++;
    }
}
