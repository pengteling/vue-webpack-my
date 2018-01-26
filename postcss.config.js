const autoprefixer = require('autoprefixer')
module.exports = {
    plugin:[
        autoprefixer({
            browsers: "> 1%, last 2 versions"
        })
    ]
}