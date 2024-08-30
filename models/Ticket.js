const mongoose = require('mongoose')
require('@/models/User')
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    hasAnswer: {
        type: Boolean,
        default: false,
    },
    answer: {
        type: String,
        required: false
    }
},
    {
        timestamps: true
    })

const model = mongoose.models.Ticket || mongoose.model("Ticket", schema)

export default model