const { default: mongoose } = require("mongoose");

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
    refreshToken: String
})

const model = mongoose.models.User || mongoose.model("User", schema)

export default model