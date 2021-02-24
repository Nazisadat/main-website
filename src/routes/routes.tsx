import React from 'react'
import Inside from '../components/Inside/inside'
import {
    Switch,
    Route
  } from "react-router-dom";
import Product from '../components/product/product';

export default function Routes() {
    return (
        <div>
            
          <Switch>
          <Route path="/solutions">
            <h1>solutions</h1>
          </Route>
          <Route path="/product">
            <Product/>
            <h1>inside</h1>
          </Route>
          <Route path="/support">
            <h1> Support & Warranty </h1>
          </Route>
          <Route  exact path="/">
            <h1> product & services</h1>
          </Route>
        </Switch>
      </div>
   )
}
