import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from './menu/Menu';

class App extends Component {

  render() {
    return (
			<BrowserRouter>
				<div>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
					<Menu/>
				</div>
			</BrowserRouter>
    );
  }
}



export default App;
