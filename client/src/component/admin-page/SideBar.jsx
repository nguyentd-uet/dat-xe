import React, {Component} from 'react';
import avatar from '../../assets/images/user2_160x160.jpg'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="float-left image">
                            <img src={avatar} className="rounded-circle" alt="User Image" />
                        </div>
                        <div className="float-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li>
                            <Link to='/admin/prices'><i className="fas fa-dollar-sign"></i> <span>Prices</span></Link>
                        </li>
                        <li>
                            <Link to='/admin/users'><i className="fa fa-users"></i> <span>Users</span></Link>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}