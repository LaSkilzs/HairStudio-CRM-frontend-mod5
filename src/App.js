import React from "react";
import "./App.css";
import Navbar from "./app/Navbar";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Form from "./pages/Form";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Login from "./app/Login";
import Profile from "./profile/Profile";
import Register from "./forms/Register";
import { Route, Switch } from "react-router-dom";
import Appointment from "./appointment/Appointment";
import NewsFeed from "./newsfeed/NewsFeed";
import Calendar from "./calendar/Calendar";
import Dashboard from "./dashboard/Dashboard";
import GalleryContainer from "./gallery/GalleryContainer";
import ContactUs from "./forms/ContactUs";
import CreateAppointment from "./forms/CreateAppointment";
import CreateHairCard from "./forms/CreateHairCard";
import CreateProfile from "./forms/CreateProfile";
import Header from "./app/Header";

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
    this.setState({ salon, services });
  }

  render() {
    console.log(this.state.username);
    return (
      <div className="main-container">
        <Navbar username={this.state.username} loggedOut={this.loggedOut} />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/gallery" component={Gallery} />
          <Route
            exact
            path="/services"
            render={() => <Services services={this.state.services} />}
          />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/about" component={About} />
          <Route path="/form" component={Form} />
          <Route
            exact
            path="/contact"
            render={() => <Contact salon={this.state.salon} />}
          />
          <Route
            path="/login"
            component={routerProps => (
              <Login loggedIn={this.loggedIn} {...routerProps} />
            )}
          />
          <Route path="/register" component={Register} />
          {/* <Header /> */}
          <Route
            path="/profile"
            component={routerProps => (
              <Profile {...routerProps} username={this.state.username} />
            )}
          />
          <Route path="/calendar" component={Calendar} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/newsfeed" component={NewsFeed} />
          <Route path="/galleries" component={GalleryContainer} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/haircard" component={CreateHairCard} />
          <Route path="/createprofile" component={CreateProfile} />
          <Route path="/createappointment" component={CreateAppointment} />
          <Route path="/contact" component={Contact} />
          <Route component={() => <h1>Page Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
