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
// import Footer from "./pages/Footer";
import LoginCard from "./app/LoginCard";
import Register from "./forms/Register";
import Appointment from "./appointment/Appointment";
import NewsFeed from "./newsfeed/NewsFeed";
import Calendar from "./calendar/Calendar";
import Dashboard from "./dashboard/Dashboard";
import GalleryContainer from "./gallery/GalleryContainer";
import ContactUs from "./forms/ContactUs";
import CreateAppointment from "./forms/CreateAppointment";
import CreateHairCard from "./forms/CreateHairCard";
import CreateProfile from "./forms/CreateProfile";
import { Route, Switch } from "react-router-dom";
import API from "./API";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      jwt: "",
      salon: [],
      services: [],
      galleries: [],
      profiles: [],
      hair_cards: [],
      appointments: [],
      user: {}
    };
  }

  loggedIn = data => {
    console.log(data);
    localStorage.setItem("jwt", data.jwt);
    localStorage.setItem("username", data.user.username);
  };

  loggedOut = () => {
    localStorage.removeItem("jwt", "");
    localStorage.removeItem("username", "");
    this.setState({ username: "", user: {}, jwt: "" });
  };

  updateUser = user => {
    console.log("updateUser", user);
    return this.setState({
      user,
      username: user.username,
      profiles: user.profiles,
      appointments: user.appointments,
      hair_cards: user.hair_cards
    });
  };

  async componentDidMount() {
    const token = localStorage.getItem("jwt");

    if (token) {
      API.authenticate().then(data => {
        console.log("REAUTH", data);
        this.updateUser(data.user);
      });
    }
    const responseSa = await fetch("http://localhost:3000/api/v1/salons");
    const responseSe = await fetch("http://localhost:3000/api/v1/services");
    const responseGa = await fetch("http://localhost:3000/api/v1/galleries");
    const salon = await responseSa.json();
    const services = await responseSe.json();
    const galleries = await responseGa.json();
    this.setState({ salon, services, galleries });
  }

  render() {
    console.log("app", this.state.user);
    return (
      <div className="main-container">
        <Navbar
          username={this.state.username}
          word={this.state.word}
          loggedOut={this.loggedOut}
        />
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
              <LoginCard
                loggedIn={this.loggedIn}
                {...routerProps}
                updateUser={this.updateUser}
                username={this.state.username}
              />
            )}
          />
          <Route
            path="/register"
            component={routerProps => (
              <Register
                {...routerProps}
                loggedIn={this.loggedIn}
                updateUser={this.updateUser}
              />
            )}
          />
          <Route
            path="/profile"
            component={routerProps => (
              <Calendar
                user={this.state.user}
                username={this.state.username}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/galleries"
            component={routerProps => (
              <GalleryContainer
                galleries={this.state.galleries}
                username={this.username}
                {...routerProps}
              />
            )}
          />
          <Route path="/contact" component={Contact} />
          <Route
            path="/dashboard"
            component={routerProps => (
              <Dashboard username={this.username} {...routerProps} />
            )}
          />
          <Route
            path="/newsfeed"
            component={routerProps => (
              <NewsFeed username={this.username} {...routerProps} />
            )}
          />

          <Route
            path="/appointment"
            component={routerProps => (
              <Appointment
                username={this.username}
                {...routerProps}
                user={this.user}
              />
            )}
          />
          <Route path="/haircard" component={CreateHairCard} />
          <Route
            path="/createprofile"
            component={() => <CreateProfile user={this.state.user} />}
          />
          <Route path="/createappointment" component={CreateAppointment} />
          <Route path="/contactus" component={ContactUs} />
          <Route component={() => <h1>Page Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
