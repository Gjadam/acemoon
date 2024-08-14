const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const model = mongoose.models.Collection || mongoose.model("Collection", schema)

export default model