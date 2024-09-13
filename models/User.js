const { default: mongoose } = require("mongoose");
require('./Address')
const schema = new mongoose.Schema({
    name: {
        type: String,
        default: 'کاربر ماه آس'
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "USER"
    },
    address: {
        type: mongoose.Types.ObjectId,
        ref: "Address"
    },
    refreshToken: String
})

const model = mongoose.models.User || mongoose.model("User", schema)

export default model