// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.18",
    networks: {
        base: {
            url: "https://mainnet.base.org",
            accounts: [process.env.PRIVATE_KEY],
        },
    },
};
