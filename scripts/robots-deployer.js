const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Robots = await hre.ethers.getContractFactory("Robots");
  const robots = await Robots.deploy(
    "Markobots",
    "MRK",
    "ipfs://ipfs/QmcUszHrYLWzMNmqMGYeKGovo44zZDVP11FkaKAZAeeTY3/metadata2/"
  );
  await robots.deployed();

  console.log("Robots deployed to:", robots.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });