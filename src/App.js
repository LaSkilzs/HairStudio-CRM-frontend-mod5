import React from "react";
import "./App.css";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Form from "./pages/Form";
import About from "./pages/About";
import Navbar from "./app/Navbar";
import Login from "./app/Login";
import Testimonial from "./pages/Testimonial";

class App extends React.Component {
  state = {
    username: ""
  };

  loggedIn = username => {
    this.setState({ username });
  };

  loggedOut = () => {
    this.setState({ username: "" });
  };

  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Welcome />
        <Gallery />
        <Services />
        <Testimonial />
        <About />
        <Contact />
        <Form />
        <Footer />
        <Login />
      </div>
    );
  }
}

export default App;
