import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import EventsPage from "./Pages/EventsPage";
import JoinPage from "./Pages/JoinPage";
import StoriesPage from "./Pages/StoriesPage";
import TeamPage from "./Pages/TeamPage";

import Header from "./Components/Header";
import HeaderMobile from "./Components/HeaderMobile";
import Footer from "./Components/Footer";
import FooterMobile from "./Components/FooterMobile";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <HeaderMobile />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/About">
            <AboutPage />
          </Route>
          <Route path="/Contact">
            <ContactPage />
          </Route>
          <Route path="/Events">
            <EventsPage />
          </Route>
          <Route path="/Join">
            <JoinPage />
          </Route>
          <Route path="/Stories">
            <StoriesPage />
          </Route>
          <Route path="/Team">
            <TeamPage />
          </Route>
        </Switch>
        <Footer />
        <FooterMobile />
      </div>
    </HashRouter>
  );
}

export default App;
