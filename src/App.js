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
  constructor() {
    super();
    this.state = {
      username: "",
      salon: [],
      services: []
    };
  }

  loggedIn = username => {
    this.setState({ username });
  };

  loggedOut = () => {
    this.setState({ username: "" });
  };

  async componentDidMount() {
    const responseSa = await fetch("http://localhost:3000/api/v1/salons");
    const responseSe = await fetch("http://localhost:3000/api/v1/services");
    const salon = await responseSa.json();
    const services = await responseSe.json();
    this.setState({
      salon,
      services
    });
    console.log(salon);
    console.log(services);
  }

  render() {
    return (
      <div className="main-container">
        <Navbar />
        <Welcome />
        <Gallery />
        <Services services={this.state.services} />
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
