import { ethers } from "hardhat";

async function main() {


 // This is just a convenience check
 if (network.name === "hardhat") {
  console.warn(
    "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
  );
}  
  const factory = await ethers.getContractFactory("Counter");

  // If we had constructor arguments, they would be passed into deploy()
  let contract = await factory.deploy();

  console.log(
      `The address the Contract WILL have once mined: ${contract.address}`
  );

  console.log(
      `The transaction that was sent to the network to deploy the Contract: ${
          contract.deployTransaction.hash
      }`
  );

  console.log(
      'The contract is NOT deployed yet; we must wait until it is mined...'
  );
  await contract.deployed();
  console.log('Mined!');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
