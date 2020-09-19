const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Acronym = new Schema(
    {
        name: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String, required: false },
        author: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('acronyms', Acronym)