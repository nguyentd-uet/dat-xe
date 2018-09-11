import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Loadable from 'react-loadable'
import Loading from '../loading/Loading'
import { Route } from "react-router-dom";

const HomeLoadable = Loadable({
    loader: () => import('./containers/home/Home'),
    loading: Loading,
});

const PriceLoadable = Loadable({
    loader: () => import('./containers/price/Prices'),
    loading: Loading,
});

const CarLoadable = Loadable({
    loader: () => import('./containers/car/Cars'),
    loading: Loading,
});

const AboutUsLoadable = Loadable({
    loader: () => import('./containers/about-us/AboutUs'),
    loading: Loading,
});

const NewsLoadable = Loadable({
    loader: () => import('./containers/news/News'),
    loading: Loading,
});

const ContactLoadable = Loadable({
    loader: () => import('./containers/contact/Contact'),
    loading: Loading,
});

const TestLoadable = Loadable({
    loader: () => import('./box-book-car/BoxBookCar'),
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
                    <Route path={`${match.url}/prices`} component={PriceLoadable}/>
                    <Route path={`${match.url}/cars`} component={CarLoadable}/>
                    <Route path={`${match.url}/about-us`} component={AboutUsLoadable}/>
                    <Route path={`${match.url}/news`} component={NewsLoadable}/>
                    <Route path={`${match.url}/contact`} component={ContactLoadable}/>

                    <Route path={`${match.url}/test`} component={TestLoadable}/>
                </main>
                <Footer />
            </div>
        );
    }
}

export default UserPage;