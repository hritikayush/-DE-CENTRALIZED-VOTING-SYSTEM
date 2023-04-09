const path = require('path');
const fs = require('fs-extra');   //community made module-: fs-extra
const solc = require('solc');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);    // qsees and deletes if build folder and deletes it ...  

const eventPath = path.resolve(__dirname,'contracts','EventVoting.sol');
const source = fs.readFileSync(eventPath,'utf8');
const output = solc.compile(source,1).contracts;

//this will ensure if the buildPath ; i.e the build folder is present or not in directory else ,will create a buildPath (folder) by its own
fs.ensureDirSync(buildPath);

for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','') +'.json'),    // inside our build folder , makes two json files : campaign and factoryCampaign which contains all the extractions generated from these two contracts
        output[contract]
    );
}