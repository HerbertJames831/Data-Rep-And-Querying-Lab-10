import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router, //Importing react router dom
  Routes,
  Route
} from "react-router-dom";
//Class
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg="info" variant="light" > {/* Bootstap navigation bar */}
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto"> {/* Navigation links */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>{/* End Navigation bar */}
        <Routes>  {/* Switching between route elements*/}
          <Route path="/" element={<Header />} />
          <Route path="/read" element={<Footer />} />
          <Route path="/create" element={<Content />} />
        </Routes>
      </Router>
    );
  }
}
export default App;

