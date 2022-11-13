import React from 'react';
import { Books } from './books';
import axios from "axios";

export class Read extends React.Component {

    //When the component is already placed in the DOM(Document Object Model), the componentDidMount() method permits the React code to be executed
    componentDidMount() {

        //Axios is a promise-based HTTP library that allows developers to make requests to a third-party server or their own to fetch data
        //Axios provides several different ways of making requests such as GET, POST, PUT/PATCH and DELETE
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                //setState() assists in enqueuing changes to the component state and informs React that it is essential this component and its children must be re-rendered with the updated state
                this.setState({

                    books: response.data.mybooks

                })

            })
            .catch((error) => {

                console.log(error);

            });

    }
    //Utilized to carry data about the component 
    state = {
        //List of Information about Books (JSON code)
        books: []
    }

    //Helps display specific HTML code inside the specified HTML element
    render() {

        return (

            <div>

                <h3>Hello from Read Component</h3>

                <Books books={this.state.books}></Books>

            </div>

        )

    }
}




