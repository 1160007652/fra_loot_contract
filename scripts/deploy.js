const { ethers } = require('hardhat');

async function main() {
  // 获取合约代码
  const Loot = await ethers.getContractFactory('Loot');
  // 开始部署
  const lootContract = await Loot.deploy();

  console.log('等待中');

  // 等待异步，部署状态
  await lootContract.deployed();

  console.log('Loot合约·部署地址 :', lootContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
