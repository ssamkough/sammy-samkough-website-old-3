import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Notebook from "./pages/Notebook";
import Gallery from "./pages/Gallery";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/notebook" component={Notebook} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <Nav></Nav>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
