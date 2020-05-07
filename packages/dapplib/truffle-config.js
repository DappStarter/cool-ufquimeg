require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow foot filter december stick color grace define army genuine'; 
let testAccounts = [
"0x7e3abbd98deb7d7ad21c964067ef92ffd85a8cb356d99ae53bc3d826d28014d1",
"0x2215e6f3dbcfb092f7a36d7fafcd66367c5c9b31745a108d610fc5b433b988b7",
"0x0fe5057562b5ba73eade824b45bbd708444035b1fa260b5d8ea3dfde49e28afc",
"0x745ca21b8a16c4ec494d366eabc7a99fc296adeeeed6041e55fb876f6baf1bb1",
"0x4926678d3a6bbb547a60db19ab8d052dae9ceb27aeffc6f9a1ec8ef5a9b0c67f",
"0x047772b624090636458200b55052760f0ac98ebb8da86d5a2070c13e7ae7d0c5",
"0xd3ef9ddf73c0ee7f920dfe01bcee3b8cd09e68407ecefdfdcdc5b0fac29c5b84",
"0x53d55688ee82e80be62a122035ffabc7c6c24a0344a1f28963d1e136f33623b6",
"0x9c9fe2936bbadf195d61cf259a7a044f0455725e7e7a119ca04c58b440ca7a4c",
"0xffb6c75416e5634813b2623437310f92ca96668c6c7b81a6b2358e11071c2d23"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
