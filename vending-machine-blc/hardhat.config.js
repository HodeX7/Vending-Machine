require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.INFURA_API_URL,
      accounts: [process.env.PRIVATE_KEY_1],
      chainId: 5,
      gasPrice: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
    },
  },
};
