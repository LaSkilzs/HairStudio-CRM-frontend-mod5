import React from "react";
import "./App.css";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Form from "./pages/Form";
import Modal from "./pages/Modal";
import About from "./pages/About";
import Navbar from "./app/Navbar";
import Login from "./app/Login";
import Testimonial from "./pages/Testimonial";
import { Route } from "react-router-dom";
class App extends React.Component {
  state = {
    word: "profile",
    loggedIn: true
  };
  render() {
    return (
      <div className="main-container">
        <Navbar word={this.state.word} />
        {this.state.loggedIn ? (
          <Login />
        ) : (
          <Route
            path="/welcome"
            render={props => (
              <div>
                <Welcome />
                <Gallery />
                <Services />
                <Testimonial />
                <About />
                <Contact />
                <Form />
                <Footer />
              </div>
            )}
          />
        )}
      </div>
    );
  }
}

export default App;
