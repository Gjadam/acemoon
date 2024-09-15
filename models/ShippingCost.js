const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        timestamps: true
    }
)

const model = mongoose.models.ShippingCost || mongoose.model("ShippingCost", schema)

export default model