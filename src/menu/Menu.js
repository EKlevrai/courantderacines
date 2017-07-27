import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Menu.css';

class Menu extends Component {
	componentDidMount(){
	}

  render() {
		return (
			<Navbar inverse collapseOnSelect>
			 <Navbar.Header>
				 <Navbar.Brand>
					 <Link to={`/`}>
						 <span>
							 Home
						 </span>
					 </Link>
				 </Navbar.Brand>
				 <Navbar.Toggle />
			 </Navbar.Header>
			 <Navbar.Collapse>
				 <Nav>
					 <NavItem eventKey={1}>
						 <Link to={`/charts`}  className={'menu-link'}>
							 <span>
								 Charts
							 </span>
						 </Link>
					 </NavItem>
					 <NavItem eventKey={2}>
						 <Link to={`/maps`} className={'menu-link'}>
							 <span>
								 Maps
							 </span>
						 </Link>
					 </NavItem>
				 </Nav>
			 </Navbar.Collapse>
		 </Navbar>
	 );
	}
}
export default Menu;
