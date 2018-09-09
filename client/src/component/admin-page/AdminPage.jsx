import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { AuthProvider } from '../../context/AuthContext';
import Header from './Header'
import SideBar from './SideBar'
import Content from './Content'
import './AdminPage.css'

class AdminPage extends Component {
    render() {
        const {match} = this.props
        return (
            <div className="wrapper">
                <AuthProvider>
                    {/* <main role="main" className="container">
                        
                    </main> */}
                    <Header {...this.props} />
                    <SideBar />
                    <Content />
                    {/* <main role="main" className="container">
                        <Route exact path={`${match.url}/login`} component={loginView}/>
                        <Route path={`${match.url}/users`} component={userView}/>
                    </main> */}
                </AuthProvider>
            </div>
        );
    }
}

const loginView = () => {
    return <h1>login view</h1>
}

const userView = () => {
    return <h1>user view</h1>
}

export default AdminPage;