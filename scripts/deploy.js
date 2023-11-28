const { ethers } = require("hardhat");

async function main() {
  // 스마트 계약을 배포할 때 사용할 계정을 얻어옵니다.
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // console.log("Account balance:", (await deployer.getBalance()).toString());

  // 스마트 계약의 팩토리를 얻어옵니다.
  const SSJToken = await ethers.getContractFactory("SSJToken");

  // 스마트 계약을 배포합니다.
  const ssj = await SSJToken.deploy("sangjoon son","SSJ");

  
  console.log("SSJToken :", ssj.target);
}

// 스크립트 실행
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });
