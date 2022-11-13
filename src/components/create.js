import React from "react";
import axios from "axios";

export class Create extends React.Component {
    constructor() {
        super();
        //In React, the bind() method is an inbuilt method that is utilized to pass the data as an argument to a class based component's function
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);


        this.state = {

            title: '',
            cover: '',
            author: ''
        }
    }
    //handleSubmit is responsible for retrieving the state's current value and adding it to the webhooks array 
    handleSubmit(e) {

        //The preventDefault() method helps to cancel the event if it is cancelable; this means the default action which belongs to the event will not happen
        e.preventDefault();
        console.log(`Button clicked
    ${this.state.title},
  ${this.state.cover},
  ${this.state.author}`);

        const book = {
            title: this.state.title,
            cover: this.state.cover,
            author: this.state.author,

        }
        //The data is sent to an endpoint using the Axios POST method
        //A promise is returned by the then() method
        //The catch() method catches the error and does something with the error information when a promise fails
        axios.post('http://localhost:4000/api/books', book)
            .then()
            .catch();

    }
    //onChange is an event handler in React that gets triggered whenever the input field for book title is changed
    onChangeBookTitle(e) {
        //setState() helps to enqueue changes to the component state and informs React that it is essential this component and its children must be re-rendered with the updated state
        this.setState({
            //Event Target Value is beneficial for getting the value of the book title element
            title: e.target.value
        })
    }
    //onChange is an event handler in React that gets triggered whenever the input field for book cover is changed
    onChangeBookCover(e) {
        //setState() aids to enqueue changes to the component state and informs React that it is vital this component and its children must be re-rendered with the updated state
        this.setState({
            //Event Target Value is useful for getting the value of the book cover element
            cover: e.target.value
        })
    }
    //onChange is an event handler in React that gets triggered whenever the input field for book author is changed
    onChangeBookAuthor(e) {
        //setState() assists in enqueuing changes to the component state and informs React that it is crucial this component and its children must be re-rendered with the updated state
        this.setState({
            //Event Target Value is beneficial for getting the value of the book author element
            author: e.target.value
        })
    }
    //Helps display specific HTML code inside the specified HTML element
    render() {

        return (

            <div>

                <h3>Hello from Create Component</h3>
                {/* Handling new events from the button click and logging the information that is submitted by the user in the form to the console */}
                <form onSubmit={this.handleSubmit}>
                    {/* Book Title Input Control */}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle} />
                    </div>

                    {/* Book Cover Input Control */}
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover} />
                    </div>

                    {/* Book Author Input Control */}
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor} />

                        <input type="submit" value="Add Book" />

                    </div>

                </form>
            </div>
        )
    }
}