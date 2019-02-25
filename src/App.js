import React from "react";
import "./App.css";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import About from "./pages/About";
import Navbar from "./app/Navbar";
import Login from "./app/Login";
import Testimonial from "./pages/Testimonial";
import { Route } from "react-router-dom";
class App extends React.Component {
  state = {
    word: true
  };
  render() {
    return (
      <div className="main-container">
        <Navbar word={this.state.word} />
        <Route path="/welcome" component={Welcome} />
        {/* 
        <Gallery />
        <Services />
        <Testimonial />
        <About />
        <Contact />
        <Footer /> */}
        <Login />
      </div>
    );
  }
}

export default App;
