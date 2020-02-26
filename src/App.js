import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home from "./pages/Home";
import About from "./pages/About";
import Notebook from "./pages/Notebook";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Photos from "./pages/Photos";
import Music from "./pages/Music";
import Post from "./components/posts/Post";
import Project from "./components/projects/Project";
import Service from "./components/services/Service";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Container className="app">
        <Row className="header justify-content-md-center">
          <Col md="auto">
            <Nav></Nav>
          </Col>
        </Row>
        <Row className="content justify-content-md-center align-items-center">
          <Col md="auto">
            <Switch>
              <Route exact path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/notebook" component={Notebook} />
              <Route path="/post/:path" component={Post} />
              <Route path="/projects" component={Projects} />
              <Route path="/project/:path" component={Project} />
              <Route path="/services" component={Services} />
              <Route path="/service/:path" component={Service} />
              <Route path="/photos" component={Photos} />
              <Route path="/music" component={Music} />
            </Switch>
          </Col>
        </Row>
        <Row className="bottom justify-content-md-center">
          <Col md="auto">
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
