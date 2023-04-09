// deploy code will go here

const HDWalletProvider=require('@truffle/hdwallet-provider');
const Web3=require('web3');
//const {interface , bytecode}=require('./compile');
const compiledFactory=require('./build/EventFactory.json');

const provider=new HDWalletProvider(
    'goddess outdoor country benefit voyage property hurry lawn october tongue fog dwarf',
    'https://sepolia.infura.io/v3/1c5c58d53c4344efa05c7d36b469bb82'
);
const web3=new Web3(provider);

//a function just to use asynchronous and await ...
const deploy = async() =>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from acc : ',accounts[0]);

    const results = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data:compiledFactory.bytecode})
    .send({from:accounts[0],gas:'1000000'});
    
    //we want to see where our contract gets deployed to :
    //console.log(interface);
    console.log('contract deployed to : ',results.options.address);
    //to prevent hanging of our deployement :
    provider.engine.stop();
};
deploy();