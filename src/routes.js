const {predictHandler} = require ("./handler")
const routes = 
[
    {
        method: "GET",
        path: "/",
        //
        handler: predictHandler
    }
]

module.exports = routes