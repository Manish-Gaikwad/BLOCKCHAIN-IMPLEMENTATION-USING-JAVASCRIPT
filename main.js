const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [];
    }

    createGenesisBlock(){
        return new Block(0, "06/10/2021", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain(this.chain.length-1);
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let BCT = new Blockchain();
BCT.addBlock(new Block(1, 07/10/2021, {amount: 7}));
BCT.addBlock(new Block(1, 09/10/2021, {amount: 9}));

console.log.apply(JSON.stringify(BCT, null, 4));
