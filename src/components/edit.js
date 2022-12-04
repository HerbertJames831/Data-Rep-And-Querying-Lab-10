import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Edit(props) {
    // The useParams hook is responsible for returning an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // Arrays are updated using the React useState()
    // and without the Array object's push() method
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState("");
    // useNavigate is benefical for returning a function that can be used to navigate
    const navigate = useNavigate();
    //The useEffect Hook is similar to componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //axios is also known as a promise-based HTTP library that allows developers to make requests to a third-party server or their own to fetch data
        //axios provides several different ways of making requests such as GET, POST, PUT/PATCH and DELETE
        //A HTTP Request is made with the GET method and passed as part of the
        //url.
        axios.get('http://localhost:4000/api/book/' + id)
            .then((response) => {
                // Response data is assigned to the arrays using useState.
                setTitle(response.data.title);
                setCover(response.data.cover);
                setAuthor(response.data.author);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    //handleSubmit is responsible for retrieving the state's current value and adding it to the webhooks array 
    const handleSubmit = (event) => {
        //The preventDefault() method helps to cancel the event if it is cancelable; this means the default action which belongs to the event will not happen
        event.preventDefault();
        const newBook = {
            id: id,
            title: title,
            cover: cover,
            author: author
        };
        axios.put('http://localhost:4000/api/book/' + id, newBook)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    return (
        <div>
            {/* Handling new events from the button click and logging the information that is submitted by the user in the form to the console */}
            <form onSubmit={handleSubmit}>
                {/* Book Title Input Control */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                {/* Book Release Year Input Control */}
                <div className="form-group">
                    <label>Add Release Year: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </div>
                {/* Book Poster URL Input Control */}
                <div className="form-group">
                    <label>Add Poster Url: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                {/*Button for the user to press when they want to edit a book */}
                <div className="form-group">
                    <input type="submit" value="Edit Book" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    );
}

