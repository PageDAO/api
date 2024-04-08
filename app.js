const express = require('express');
const dotenv = require('dotenv').config();
const viem = require('viem');

  
const app = express();
const PORT = 5000;
  
app.get('/totalsupply', async (req, res)=>{
  // todo use ethers to connect to an infura rpc endpoint to query the ERC20 Token contract "0x60e683c6514edd5f758a55b6f393bebbafaa8d5e" totalSupply method
  try {
    const provider = new viem.providers.InfuraProvider('ropsten', process.env.INFURA_API_KEY);
    const contractAddress = '0x60e683c6514edd5f758a55b6f393bebbafaa8d5e';
    const contract = new viem.Contract(contractAddress, abi, provider);
    const totalSupply = await contract.totalSupply();
    // change the return type to json and return in the format { result: totalSupply }
    res.json({ result: totalSupply.toString() });
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);