const {v4: uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        name: "Tamiom",
        email: "lalala@yahoo.com",
    },
    {
        id: uuidv4(),
        name: "Tamanna",
        email: "lalala@yahoo.com",
    }
]
module.exports = users;