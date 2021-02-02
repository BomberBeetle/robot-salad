import {HashRouter,Route, Switch} from 'react-router-dom'
import React from 'react';
import Homepage from './pages/homepage/Homepage'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';

export default function Routes(){
    return(
        <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
            <Switch>
                <Route path = "/" exact component = {Homepage}/>
                <Route path ="/portfolio" component = {Portfolio}/>
                <Route path ="/contact" component = {Contact}/>
                <Route path ="/blog" component = {Blog}/>
            </Switch>
        </HashRouter>
    )
}