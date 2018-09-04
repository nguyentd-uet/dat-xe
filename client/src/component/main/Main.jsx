import React, { Component } from 'react'
import Loadable from 'react-loadable'
import Loading from '../loading/Loading'
import { Switch, Route } from 'react-router-dom'


const HomeLoadable = Loadable({
    loader: () => import('../home/Home'),
    loading: Loading,
});

const BookCarLoadable = Loadable({
    loader: () => import('../book-car/BookCar'),
    loading: Loading,
});

export default class Main extends Component {
  render() {
    return (
        <main role="main" className="container">
            <Switch> 
                <Route exact path= '/' component={HomeLoadable} />
                <Route path='/dat-xe' component={BookCarLoadable} /> 
            </Switch>
            
        </main>
    )
  }
}
