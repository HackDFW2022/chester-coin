import mongoose from 'mongoose';

const blockchainSchema = mongoose.Schema({
    cryptocoin:{type: String},
},{collection:"blockchain"})

var blockchain = mongoose.model('blockchain', blockchainSchema);

export default blockchain;