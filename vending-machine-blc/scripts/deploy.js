const hre = require("hardhat");

async function main() {
  const VendingMachine = await hre.ethers.getContractFactory("VendingMachine");
  const vendingMachine = await VendingMachine.deploy();

  await vendingMachine.deployed();

  console.log("Vending Machine contract deployed to:", vendingMachine.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
