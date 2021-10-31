import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Barley from "./pages /Barley";
import Header from "./Components /Header/index";
import Navbar from "./Components /Navbar/index";
import Footer from "./Components /Footer /index";

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
