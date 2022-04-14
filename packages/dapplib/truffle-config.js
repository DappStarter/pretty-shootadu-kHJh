require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rifle payment unknown inner arctic bubble gift'; 
let testAccounts = [
"0x9e4a5573fd0ef42354acbfb1e5731f5a76ae68566bb2ef08e19472b233d11345",
"0x6fbd1ca7b9aac80f7ebba32e28e9aeda5fa924b5c77df72d7756b7d0f2eac127",
"0xc1256175c3b717b96a78ab4251ec4d4f2b8b90f432b5ccb7350277794892ac0c",
"0x6d68994fd1aab27128ae3b64c78487faa851f2e99c2e75ff027bc67e2bf5051e",
"0x71d226fe21560e0f82c75df5da38c9b90f7db3b276840c4063d508bc60c61acf",
"0xd7d2b0e334d5ab8fa8e0de24d5d1b522c27e284800f0903f8c91d609fe3ba787",
"0x06b8a1409606907ad2cec3d651f5abaf3c96213a7ad1edae0dc8f4709ee10e73",
"0xb97d64d663626abdc36dea25b18e2a31ba4deb2248f3d031589bb046bd922771",
"0x6371abd2bea8ea967dbd6ac6380ef3feed1ef535657e15ab6db231112cab1c8c",
"0xb4a17906974232a8e8c61df18a6aac38a85a092d98948316d3db4be5933e6997"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


