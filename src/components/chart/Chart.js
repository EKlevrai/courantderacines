import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Pie from './charts/Pie';

class Chart extends Component {
  render() {
    return (
			<Row>
				<Col md={2}></Col>
				<Col md={8}>
					<Pie/>
				</Col>
				<Col md={2}></Col>
			</Row>
		);
  }
}



export default Chart;
