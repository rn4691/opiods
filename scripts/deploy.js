async function main() {
  const OPISIds = await ethers.getContractFactory("OPISIds");

  // Start deployment, returning a promise that resolves to a contract object
  const OPIS_ids = await OPISIds.deploy();
  console.log("Contract deployed to address:", OPIS_ids.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
