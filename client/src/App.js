import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Meta from "./components/pages/Meta";
import Work from "./components/pages/Work";
import Hobbies from "./components/pages/Hobbies.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Meta} />
          <Route path="/work" component={Work} />
          <Route path="/hobbies" component={Hobbies} />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
