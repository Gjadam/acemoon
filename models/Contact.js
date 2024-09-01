const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
)

const model = mongoose.models.Contact || mongoose.model("Contact", schema)

export default model