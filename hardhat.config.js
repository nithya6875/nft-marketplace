

require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "cb9c8e43f4464551a66a80ab46f20bdd";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mainnet.infura.io/v3/cb9c8e43f4464551a66a80ab46f20bdd",
      accounts: [privateKey],
    },
    mainnet: {
      url: "https://polygon-mumbai.infura.io/v3/cb9c8e43f4464551a66a80ab46f20bdd",
      accounts: [privateKey],
    }
  },
  solidity: {
    version: "0.8.4",
  },
  
};
