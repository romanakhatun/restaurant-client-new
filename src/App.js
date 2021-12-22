import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContextProvider, PrivateRoute } from './components/SignUpIn/useAuth';

import Header from './components/Header/Header';
import HomeHero from './components/HomeHero/HomeHero';

import FoodCorner from './components/FoodCorner/FoodCorner';
import Lunch from './components/Foods/Lunch';
import Dinner from './components/Foods/Dinner';
import Breakfast from './components/Foods/Breakfast';
import FoodDetails from './components/FoodCorner/FoodDetails';

import Cart from './components/Cart/Cart';
import Login from './components/SignUpIn/Login';
import Notfound from './components/Notfound/Notfound';
import CheckoutBtn from './components/FoodCorner/CheckoutBtn';
import LocationMap from './components/LocationMap/LocationMap';
import ChooseDelivery from './components/ChooseDelivery/ChooseDelivery';
import Footer from './components/Footer/Footer';
import Inventory from './components/Invetory/Inventory';

function App() {
  return (
    <div className="App">
      <AuthContextProvider value="Romana">
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              <HomeHero></HomeHero>
              <FoodCorner></FoodCorner>
            </Route>

            <Route exact path="/breakfast">
              <HomeHero></HomeHero>
              <FoodCorner></FoodCorner>
            </Route>

            <Route exact path="/dinner">
              <HomeHero></HomeHero>
              <FoodCorner></FoodCorner>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/cart">
              <Cart></Cart>
            </Route>

            <Route path="/inventory">
              <Inventory />
            </Route>

            <PrivateRoute path="/checkout">
              <LocationMap></LocationMap>
            </PrivateRoute>

            <Route path="/food/:foodKey">
              <FoodDetails />
            </Route>

            <Route path="*">
              <Notfound></Notfound>
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
              <CheckoutBtn></CheckoutBtn>
              <ChooseDelivery></ChooseDelivery>
            </Route>

            <Route exact path="/breakfast">
              <CheckoutBtn></CheckoutBtn>
              <ChooseDelivery></ChooseDelivery>
            </Route>

            <Route exact path="/dinner">
              <CheckoutBtn></CheckoutBtn>
              <ChooseDelivery></ChooseDelivery>
            </Route>
          </Switch>

        </Router>
        <Footer />
      </AuthContextProvider>
    </div >
  );
}

export default App;