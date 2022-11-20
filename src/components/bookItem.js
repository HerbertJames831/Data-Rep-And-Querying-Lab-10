import React from 'react';
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {

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
        </Card>
      </div>
    );
  }
}