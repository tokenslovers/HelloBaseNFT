// scripts/deploy.js
async function main() {
    const HelloBaseNFT = await ethers.getContractFactory("HelloBaseNFT");
    const helloBaseNFT = await HelloBaseNFT.deploy();
    await helloBaseNFT.deployed();

    console.log("HelloBaseNFT deployed to:", helloBaseNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
