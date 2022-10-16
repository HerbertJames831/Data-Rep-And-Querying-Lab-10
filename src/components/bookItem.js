import React from 'react';
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {

  render() {

    return (

      <div>
        {/* Displaying all info inside a card */}
        <Card>
          <Card.Header >{this.props.book.title}</Card.Header>
          <Card.Body>

            <blockquote className="blockquote mb-0">
              {/* This contains all the books thumbnail */}
              <img src={this.props.book.thumbnailUrl}></img>

              <footer>
                {/* This contains all the names of all the book authors */}
                {this.props.book.authors[0]}

              </footer>

            </blockquote>


          </Card.Body>

        </Card>
      </div>

    );
  }

}