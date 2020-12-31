import {BrowserRouter,Route, Switch} from 'react-router-dom'
import React from 'react';

import Homepage from './pages/homepage/Homepage'
import Portfolio from './pages/portfolio/Portfolio'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Homepage}/>
                <Route path ="/portfolio" component = {Portfolio}/>
            </Switch>
        </BrowserRouter>
    )
}