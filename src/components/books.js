import React from 'react';
import { BookItem } from './bookItem';

export class Books extends React.Component {
    //Helps displays specific HTML code inside the specified HTML element
    render() {
        //The Map Function splits the array of books into individual books
        return this.props.books.map(

            (book) => {

                //The book id is used as a key meaning that it provides an identity to the elements in the list
                return <BookItem book={book} key={book._id} Reload={this.props.Reload}></BookItem>
            }
        );
    }
}
