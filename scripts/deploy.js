const {ethers} = require('hardhat')

async function main() {
 
  const chatContract = await ethers.getContractFactory('chat')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
