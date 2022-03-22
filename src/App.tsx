import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Photos from "./pages/Photos";
import Notebook from "./pages/posts/Notebook";
import PostDetails from "./pages/posts/PostDetails";
import ProjectDetails from "./pages/projects/ProjectDetails";
import Projects from "./pages/projects/Projects";
import ServiceDetails from "./pages/services/ServiceDetails";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <Router>
      <Container className="app">
        <Row className="header">
          <Col sm="auto" md="auto" lg="auto">
            <NavBar></NavBar>
          </Col>
        </Row>
        <Row className="content justify-content-center align-items-center">
          <Col>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/notebook" component={Notebook} />
              <Route path="/post/:path" component={PostDetails} />
              <Route path="/projects" component={Projects} />
              <Route path="/project/:path" component={ProjectDetails} />
              <Route path="/services" component={Services} />
              <Route path="/service/:path" component={ServiceDetails} />
              <Route path="/photos" component={Photos} />
              <Route path="/music" component={Music} />
            </Switch>
          </Col>
        </Row>
        <Row className="bottom justify-content-center">
          <Col sm="auto" md="auto">
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
