const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    password: String
}, {
    collection: 'users'
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    user: UserModel
};