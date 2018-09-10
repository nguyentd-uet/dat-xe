import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { AuthProvider } from '../../context/AuthContext';
import Header from './Header'
import SideBar from './SideBar'
import Content from './Content'
import './AdminPage.css'
import Login from './Login'

class AdminPage extends Component {
    state = {
        isLogin: false
    }

    login() {
        this.setState({isLogin: true})
    }

    logout() {
        this.setState({isLogin: false})
        this.props.history.push('/admin')
    }

    render() {
        const {isLogin} = this.state
        const {match} = this.props

        if (isLogin) {
            return (
                <div className="wrapper">
                    <AuthProvider>
                        <Header {...this.props} logout={this.logout.bind(this)} />
                        <SideBar />
                        {/* <Content /> */}

                        <div className="content-wrapper">
                            <section className="content-header">
                                <Route exact path={`${match.url}/prices`} component={priceView}/>
                                <Route path={`${match.url}/users`} component={userView}/>
                            </section>
                        </div>
                    </AuthProvider>
                </div>
            )
        }
        return <Login login={this.login.bind(this)}/>;
    }
}
const priceView = () => {
    return <h1>price view</h1>
}

const userView = () => {
    return <h1>user view</h1>
}
export default AdminPage;