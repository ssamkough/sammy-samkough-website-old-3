import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Notebook from "./pages/Notebook";
import Photos from "./pages/Photos";
import Music from "./pages/Music";
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
          <Route path="/photos" component={Photos} />
          <Route path="/music" component={Music} />
        </Switch>
        <div className="bottom">
          <Nav></Nav>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
