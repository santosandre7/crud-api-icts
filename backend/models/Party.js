import mongoose, { Schema } from 'mongoose';
import { serviceSchema } from './Service.js';

const partySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    imge: {
        type: String,
        required: true
    },
    services: {
        type: [serviceSchema],
    },
},
{ timestamps: true }
);

export const Party = mongoose.model('Party', partySchema);

export default Party;