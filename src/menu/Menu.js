
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Nav, Navbar, Glyphicon} from 'react-bootstrap';
import './Menu.css';

class Menu extends Component {
  render() {
		return (
			<Navbar inverse collapseOnSelect className={'menu'}>
			 <Navbar.Header>
				 <Navbar.Brand>
					 <Link to={`/`}  className={'menu-home-link'}>
						 <Glyphicon glyph="home"/>
					 </Link>
				 </Navbar.Brand>
				 <Navbar.Toggle />
			 </Navbar.Header>
			 <Navbar.Collapse>
				 <Nav>
					 <Navbar.Brand eventKey={1}>
						 <Link to={`/charts`}  className={'menu-link'}>
							 <span>
								 Charts
							 </span>
						 </Link>
					 </Navbar.Brand>
					 <Navbar.Brand eventKey={2}>
						 <Link to={`/maps`} className={'menu-link'}>
							 <span>
								 Maps
							 </span>
						 </Link>
					 </Navbar.Brand>
				 </Nav>
			 </Navbar.Collapse>
		 </Navbar>
	 );
	}
}
export default Menu;
