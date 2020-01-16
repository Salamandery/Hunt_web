import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Views/main';
import Product from './Views/product';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/product/:id" component={Product}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;