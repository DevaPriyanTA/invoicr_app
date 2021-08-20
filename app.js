const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Init App
const app = express();
// Port
let port = process.env.PORT;
if(port == null || port ==""){
  port=3000;
}


// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods",'GET,POST,PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Mongoose Connect
mongoose.connect("mongodb://localhost/invoicr",{useNewUrlParser: true,
useFindAndModify: false,useUnifiedTopology: true})
// mongoose.connect("mongodb+srv://DevaPriyanTA:Deva562002!@cluster0.mxxho.mongodb.net/invoicrDB",{useNewUrlParser: true,
// useFindAndModify: false,useUnifiedTopology: true}).then(()=>{
//   console.log("Connected to database.................................");
// });
const db = mongoose.connection;

// Client Folder
app.use(express.static(__dirname+'/client'));
// Body Parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Please use /api/customers or /api/invoices');
});

// Route Files
const customers = require('./routes/customers');
const invoices = require('./routes/invoices');

// Paths
app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

app.listen(port, () => {
  console.log('Server Started on Port '+port);
});

//
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// // Init App
// const app = express();
// // Port
// const port = 3000;
//
//
// // Enable CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods",'GET,POST,PUT, DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//
//
// // Mongoose Connect
// mongoose.connect('mongodb://localhost/invoicr',{useNewUrlParser: true,
// useFindAndModify: false,useUnifiedTopology: true});
// const db = mongoose.connection;
//
// // Client Folder
// app.use(express.static(__dirname+'/client'));
// // Body Parser
// app.use(bodyParser.json());
//
// app.get('/', (req, res) => {
//   res.send('Please use /api/customers or /api/invoices');
// });
//
// // Route Files
// const customers = require('./routes/customers');
// const invoices = require('./routes/invoices');
//
// // Paths
// app.use('/api/customers', customers);
// app.use('/api/invoices', invoices);
//
// app.listen(port, () => {
//   console.log('Server Started on Port '+port);
// });
