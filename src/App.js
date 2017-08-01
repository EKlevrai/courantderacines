import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import io from 'socket.io-client';

import Menu from './menu/Menu';

import Chart from './components/chart/Chart';
import Home from './components/home/Home';
import Map from './components/map/Map';

const socket = io('http://80.240.136.144:2000');
global.logger = (d) => {socket.emit('action', d)}



class App extends Component {
	componentDidMount(){
		socket.emit('userAgent', navigator.userAgent);
	}

  render() {
    return (
			<BrowserRouter>
				<div>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
					<Menu/>
					<Route path="/charts" component={Chart}/>
						<Route path="/maps" component={Map}/>
						<Route path="/" exact={true} component={Home}/>
				</div>
			</BrowserRouter>
    );
  }
}



export default App;
