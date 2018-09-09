import React, { Component } from 'react';
import avatar from '../../assets/images/user2_160x160.jpg'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <header className="main-header" id='header-admin'>
                <a href="#" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        {/* <span className="sr-only">Toggle navigation</span> */}
                        <i className="fas fa-bars"></i>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                {/* <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fas fa-envelope"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src={avatar} className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul> */}
                                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret color="primary" style={{padding: '5px 12px 6px 12px', border: '0'}}>
                                        <i className="fas fa-envelope"></i>
                                        <Badge color="success">4</Badge>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <div className="float-left">
                                                <img src={avatar} className="rounded-circle" alt="User Image" />
                                            </div>
                                            <div className="float-right">
                                                <h4>
                                                    Support Team
                                                    <small><i className="far fa-clock"></i> 5 mins</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </div>

                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}