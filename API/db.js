const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crmAcaGeek', {
    useNewUrlParser: true
}).then(db => console.log(`DB is connected`))
.catch(err => console.error(err));