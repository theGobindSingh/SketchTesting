import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { SHost } from "./Links";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import EventsPage from "./Pages/EventsPage";
import JoinPage from "./Pages/JoinPage";
import StoriesPage from "./Pages/StoriesPage";
import TeamPage from "./Pages/TeamPage";
import SiteInfo from "./Pages/SiteInfo";

import Header from "./Components/Header";
import HeaderMobile from "./Components/HeaderMobile";
import Footer from "./Components/Footer";
import FooterMobile from "./Components/FooterMobile";
import ScrollToTop from "./Components/ScrollToTop";

const client = new ApolloClient({
  uri: SHost + "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <ScrollToTop />
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
            <Route path="/SiteInfo">
              <SiteInfo />
            </Route>
          </Switch>
          <Footer />
          <FooterMobile />
        </div>
      </ApolloProvider>
    </HashRouter>
  );
}

export default App;
