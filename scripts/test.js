import Web3 from 'web3';

const infuraApiKey = "Your API key here!";
const web3 = new Web3(`https://mainnet.infura.io/v3/${infuraApiKey}`);

const contractAddress = '0x3C1502aAc3E80344989CCfA237081be6a02c07bd';

const contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getName() {
  const name = await contract.methods.name().call();
  console.log('Name in contract:', web3.utils.hexToUtf8(name));
}

getName();
