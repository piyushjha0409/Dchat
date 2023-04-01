const {ethers} = require('hardhat')

async function main() {
 
  const chat = await ethers.getContractFactory('chat')
  const chatContract = await chat.deploy();

  await chatContract.deployed(); //deployed the contract

  console.log(
    `Contract Deployed at the address of the ${chatContract.address}` 
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//script is ready
