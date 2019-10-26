const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://marmol89:marmol89123@cluster0-mb4az.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
