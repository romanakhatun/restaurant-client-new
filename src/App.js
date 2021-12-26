import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "./utils/useAuth";
import { WithOutAuth } from "./utils/withOutAuth";
import { WithAuth } from "./utils/withAuth";
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
import Profile from "./components/Profile";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider value="Romana">
        <Router>
          <Header />

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

            <WithOutAuth path="/login">
              <Login />
            </WithOutAuth>

            <Route path="/cart">
              <Cart />
            </Route>

            <WithAuth path="/inventory">
              <Inventory />
            </WithAuth>

            <WithAuth path="/checkout">
              <LocationMap />
            </WithAuth>

            <WithAuth path="/profile">
              <Profile />
            </WithAuth>

            <Route path="/food/:foodKey">
              <FoodDetails />
            </Route>

            <Route path="*">
              <Notfound />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/" component={Lunch} />
            <Route exact path="/breakfast" component={Breakfast} />
            <Route exact path="/dinner" component={Dinner} />
          </Switch>

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
          <Footer />
        </Router>
      </AuthContextProvider>
    </div>
  );
};

export default App;
