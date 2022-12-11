import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class BookItem extends React.Component {
  constructor() {
    super();
    //In React, the bind() method is an inbuilt method that is utilized to pass the data as an argument to a class based component's function
    this.DeleteBook = this.DeleteBook.bind(this);
  }
  DeleteBook(e) {
    //The preventDefault() method helps to cancel the event if it is cancelable; this means the default action which belongs to the event will not happen
    e.preventDefault();
    //The axios.delete() function makes it straightforward to send an HTTP DELETE request to the URL('http://localhost:4000/api/book/') 
    axios.delete('http://localhost:4000/api/book/' + this.props.book._id)
      .then(() => { this.props.Reload(); })
      .catch();
  }
  render() {

    return (

      <div>
        {/* Displaying all info inside a card */}
        <Card>
          {/* This contains the book title */}
          <Card.Header >{this.props.book.title}</Card.Header>
          <Card.Body>

            <blockquote className="blockquote mb-0">
              {/* This contains the book cover */}
              <img src={this.props.book.cover}></img>

              <footer>
                {/* This contains the name of the book author */}
                {this.props.book.author}

              </footer>
            </blockquote>
          </Card.Body>
          {/* When the user clicks the Edit Button, they can edit book details */}
          <Link to={'/edit/' + this.props.book._id} className='btn btn-primary'>Edit</Link>
          {/* When the user clicks the Delete Button, the book is deleted */}
          <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
        </Card>
      </div>
    );
  }
}