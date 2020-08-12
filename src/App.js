import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Productlist from "./components/Productlist";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Productlist}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal></Modal>
    </React.Fragment>
  );
}

export default App;

//notes
// switch is used here so that it stops looking for other routes once it has found the first match
