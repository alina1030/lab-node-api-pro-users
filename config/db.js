const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://alina:alina123@cluster0.yvzas.mongodb.net/Program?retryWrites=true&w=majority',
{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useFindAndModify:false
      
})
.then(ok => console.log("Connected to mongodb"))
.catch(err => console.log("mongodb connected error",err))

module.exports = mongoose;