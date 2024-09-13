const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    })

const model = mongoose.models.Address || mongoose.model("Address", schema)

export default model