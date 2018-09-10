import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Loadable from 'react-loadable'
import Loading from '../loading/Loading'
import { Route } from "react-router-dom";

const HomeLoadable = Loadable({
    loader: () => import('./home/Home'),
    loading: Loading,
});

const BookCarLoadable = Loadable({
    loader: () => import('./book-car/BookCar'),
    loading: Loading,
});

class UserPage extends Component {
    render() {
        const {match} = this.props
        return (
            <div className="App">
                <Header />  
                <main role="main" className="container">
                    <Route exact path={match.url} component={HomeLoadable}/>
                    <Route path={`${match.url}/dat-xe`} component={BookCarLoadable}/>
                </main>
                <Footer />
            </div>
        );
    }
}

export default UserPage;