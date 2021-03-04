const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
//var bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // ,
    // questions: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Question"
    //     }
    // ]
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, config.get('jwtSecret'));
    return token;
}

const User = mongoose.model('Users', userSchema)
// userSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// userSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.local.password);
// };
exports.User = User