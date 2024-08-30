const mongoose = require('mongoose')
require('./Comment')
require('./Collection')
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceBeforeDiscount: {
        type: Number,
        required: false
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 5,
    },
    collection: {
        type: mongoose.Types.ObjectId,
        ref: "Collection"
    },
    size: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    images: {
        type: [],
        required: true
    },
    comments: {
        type: [{
            type: mongoose.Types.ObjectId,
            ref: "Comment",
        }]
    }
},
    {
        timestamps: true
    }
)


const model = mongoose.models.Product || mongoose.model('Product', schema)

export default model