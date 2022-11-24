require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.9",
   networks: {
      goerli: {
         url: process.env.ALCHEMY_GOERLI_URL,
         accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      },
   },
};
