const mongo = require('mongoose');

const schema = mongo.Schema;

const blogSchema = new schema(
    {
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        }
    }, 
    {
        timestamps : true
    }
)

const blogModel = mongo.model('blogModel', blogSchema);

module.exports = blogModel;