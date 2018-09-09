import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media
} from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header className='shadow-sm bg-light'>
        <div className="container">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Đặt xe trong 3 phút</NavLink>
              </NavItem>
            </Nav>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#"><button className="btn btn-outline-danger">Đặt xe ngay</button></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><button className="btn btn-outline-primary">Đi chung xe</button></NavLink>
                </NavItem>
                <NavItem>
                  <Media>
                    <Media left>
                      <i className="fas fa-phone fa-flip-horizontal" style={{ fontSize: '50px', color: '#dc3545' }}></i>
                    </Media>
                    <Media body style={{ marginLeft: '5px' }}>
                      <Media style={{marginTop: '-6px'}}>
                        <b>Đường dây nóng 24/7</b> 
                      </Media>
                      <Media style={{marginTop: '-5px'}}>
                        <span className="text-danger"><b>0922.222.161</b></span>
                      </Media>
                      <Media style={{marginTop: '-5px'}}>
                        <span className="text-danger"><b>0963.828.499</b></span>
                      </Media>
                    </Media>
                  </Media>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}
