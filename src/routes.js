import {HashRouter,Route, Switch} from 'react-router-dom'
import React from 'react';

import Homepage from './pages/homepage/Homepage'
import Portfolio from './pages/portfolio/Portfolio'

export default function Routes(){
    return(
        <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
            <Switch>
                <Route path = "/" exact component = {Homepage}/>
                <Route path ="/portfolio" component = {Portfolio}/>
            </Switch>
        </HashRouter>
    )
}