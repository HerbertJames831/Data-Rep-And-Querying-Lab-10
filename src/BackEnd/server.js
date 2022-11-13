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

  //JSON Data
  const books = [
    {
      "title": "Learn Git in a Month of Lunches",
      "isbn": "1617292419",
      "pageCount": 0,
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
      "status": "MEAP",
      "authors": ["Rick Umali"],
      "categories": []
    },
    {
      "title": "MongoDB in Action, Second Edition",
      "isbn": "1617291609",
      "pageCount": 0,
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
      "status": "MEAP",
      "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
      ],
      "categories": []
    },
    {
      "title": "Getting MEAN with Mongo, Express, Angular, and Node",
      "isbn": "1617292036",
      "pageCount": 0,
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
      "status": "MEAP",
      "authors": ["Simon Holmes"],
      "categories": []
    }
  ]
  //A JSON response is sent
  res.json({

    mybooks: books,
    message: 'Hello from the server'
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

