(async () => {
    try {
        
        const Sid = await ethers.deployContract("Sid");

        await Sid.waitForDeployment();

        console.log(`Deploy contract at ${Sid.target}`);
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
})();