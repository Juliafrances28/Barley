import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import Barley from "../pages/Barley";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Barley} />
          <Route exact path="/Barley" component={Barley} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
