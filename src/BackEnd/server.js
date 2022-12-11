const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

//The user can make requests to the server which is located at a different domain using the CORS(Cross-Origin Resource Sharing) method
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//The mongoose module is being imported
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  //This helps open Mongoose's default connection to MongoDB
  await mongoose.connect('mongodb+srv://admin:admin@datarepaandqueryinglab7.vslg2my.mongodb.net/?retryWrites=true&w=majority');
}
//Creating a new Schema instance using the Schema constructor and defining the title, cover and author fields inside it in the Schema constructor's object parameter
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});
//The mongoose.model() function is helpful because a specific database's collection of MongoDB can be created
const bookModel = mongoose.model('HerbertBooks', bookSchema);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/**
 * req stands for Request
 * A client makes a HTTP request to a named host which is located on a server
 * The benefit of a HTTP request is a resource can be accessed on the server
 *  When making a HTTP request, the URL(Uniform Resource Locator) components are utilized by the client, this includes the information required to access the resource.
 * 
 * res stands for Response
 * HTTP responses are made by a server to a client
 * The objective of the HTTP response is the client is provided with the resource it requested 
 * Another objective of the HTTP response is it notifies the client that the action it requested has been executed
 * The third objective of the HTTP response is it lets the client know that an error arises in processing its request
 */
//The app.get() function lets a route handler for GET requests to the URL(http://localhost:3000/) be defined
app.get('/', (req, res) => {
  //Sends HTTP Response
  res.send('Hello World!')
})
//The POST method is being used to send data to the URL (http://localhost:4000/api/books)
app.post('/api/books', (req, res) => {
  console.log(req.body);
  //The create() method is useful for creating single or numerous documents in the collection 
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })
  //Sends HTTP Response
  res.send('Data Received');
})
//The app.get() function allows a route handler for GET requests to the URL(http://localhost:3000/datarep) be defined
app.get('/datarep', (req, res) => {
  //Sends HTTP Response
  res.send('Welcome to Data Representation and Querying')
})
//The app.get() function permits a route handler for GET requests to the URL(http://localhost:3000/hello/:name) be defined
app.get('/hello/:name', (req, res) => {
  console.log(req.params.name);
  //Sends HTTP Response
  res.send('Hello   ' + req.params.name);
})
//The app.get() function allows a route handler for GET requests to the URL(http://localhost:3000/api/books) be defined
app.get('/api/books', (req, res) => {
  //The find() function is utilized to find specific data from the MongoDB database
  bookModel.find((error, data) => {
    //Sends a JSON response
    res.json(data)
  })
})
//The app.get() function lets a route handler for GET requests to the URL(http://localhost:4000/api/book/:id) be defined
app.get('/api/book/:id', (req, res) => {
  console.log(req.params.id);
  //The findById() function is benefical for finding a single document by its _id
  bookModel.findById(req.params.id, (error, data) => {
    //Sends a JSON response
    res.json(data);
  })
})
//The HTTP PUT requests are being routed to the specified path along with the specified callback functions using the app.put() function
app.put('/api/book/:id', (req, res) => {
  console.log("Update" + req.params.id);
  //The findByIdAndUpdate() function is useful for finding a matching document, updates it according to the update arg, any options are passed and the found document(if there are any) is returned to the callback.
  //The findByIdAndUpdate() function is known to return the document as it was prior to update being applied by default. { new: true } permits the user to set the option to true to allow the document to be returned after update was applied. 
  bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => {
    //Sends a JSON response
    res.json(data);
  })
})
//The app.delete() method is beneficial for routing all the HTTP DELETE requests to the specified path along with the specified callback functions
app.delete('/api/book/:id', (req, res) => {

  console.log("Deleting: " + req.params.id);
  //The findByIdAndDelete() function is helpful for finding a single document by its _id and subsequently the document is removed from the collection. The document is returned deleted.
  bookModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    //Sends HTTP Response
    res.send(data);
  })
})
//The app.get() function lets a route handler for GET requests to the URL(http://localhost:3000/test) be defined
app.get('/test', (req, res) => {

  //Sets the response's HTTP status
  res.status(201).sendFile(__dirname + '/index.html');
})
//The app.get() function allows a route handler for GET requests to the URL(http://localhost:3000/name?fname=Herbert+&lname=James) be defined
app.get('/name', (req, res) => {
  console.log(req.query.fname);
  //Sends HTTP Response
  res.send('Hello:  ' + req.query.fname + ' ' + req.query.lname);
})
//The app.post() function is beneficial for HTTP POST requests being routed to the specified path with the specified callback functions  
app.post('/name', (req, res) => {
  console.log(req.body);
  //Sends HTTP Response 
  res.send('Hello from POST' + req.body.fname + ' ' + req.body.lname);
})
//On the specified host and port, the app.listen() function is utilized to bind and listen the connections
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

