import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContextProvider, PrivateRoute } from "./utils/useAuth";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import FoodCorner from "./components/FoodCorner";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Breakfast from "./components/Breakfast";
import FoodDetails from "./components/FoodDetails";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import CheckoutBtn from "./components/CheckoutBtn";
import LocationMap from "./components/LocationMap";
import ChooseDelivery from "./components/ChooseDelivery";
import Footer from "./components/Footer";
import Inventory from "./components/Inventory";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider value="Romana">
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              <HomeHero />
              <FoodCorner />
            </Route>

            <Route exact path="/breakfast">
              <HomeHero />
              <FoodCorner />
            </Route>

            <Route exact path="/dinner">
              <HomeHero />
              <FoodCorner />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/inventory">
              <Inventory />
            </Route>

            <PrivateRoute path="/checkout">
              <LocationMap />
            </PrivateRoute>

            <Route path="/food/:foodKey">
              <FoodDetails />
            </Route>

            <Route path="*">
              <Notfound />
            </Route>
          </Switch>

          <div className="foodCorner">
            <Switch>
              <Route exact path="/" component={Lunch} />
              <Route exact path="/breakfast" component={Breakfast} />
              <Route exact path="/dinner" component={Dinner} />
            </Switch>
          </div>

          <Switch>
            <Route exact path="/">
              <CheckoutBtn />
              <ChooseDelivery />
            </Route>

            <Route exact path="/breakfast">
              <CheckoutBtn />
              <ChooseDelivery />
            </Route>

            <Route exact path="/dinner">
              <CheckoutBtn />
              <ChooseDelivery />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
