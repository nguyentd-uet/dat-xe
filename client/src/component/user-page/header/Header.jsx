import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Media
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import './Header.css'

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
      <header className='shadow-sm bg-light header-user-page'>
        <div className="">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
            </NavbarBrand>
            
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem2 to='/home'>Trang chủ</NavItem2>
                <NavItem2 to='/home/prices'>Bảng giá</NavItem2>
                <NavItem2 to='/home/cars'>Các dòng xe</NavItem2>
                <NavItem2 to='/home/about-us'>Về chúng tôi</NavItem2>
                <NavItem2 to='/home/news'>Tin tức</NavItem2>
                <NavItem2 to='/home/contact'>Liên hệ</NavItem2>
              </Nav>
              <Nav className="ml-auto" navbar>
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
                <NavItem className='mt-2 mx-2'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/New_Logo_Gmail.svg/1200px-New_Logo_Gmail.svg.png" width="30" height="30" alt=""></img>
                </NavItem>
                <NavItem className='mt-2 mx-2'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png" width="30" height="30" alt=""></img>
                </NavItem>
                <NavItem className='mt-2 mx-2'>
                  <img src="https://i.pinimg.com/originals/6a/ec/d4/6aecd4d3a513e32a11391a56d260574b.png" width="30" height="30" alt=""></img>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

const NavItem2 = withRouter((props) => {
  const { to, children, location } = props;
  return (
      <li className={'nav-item ' + (location.pathname === to ? 'active' : null)}>
          <Link className='nav-link' to={to}>{children}</Link >
      </li>
  )
});