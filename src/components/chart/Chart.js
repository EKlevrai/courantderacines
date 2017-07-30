import React, { Component } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';

import Pie from './charts/Pie';

class Chart extends Component {
  render() {
    return (
			<Row>
				<Col md={2}></Col>
				<Col md={8}>
					<Tab.Container defaultActiveKey={'pie'} animation={false}  generateChildId={(eventKey, type) => `${type}-${eventKey}`}>
						<Tabs id="noanim-tab-example">
							<Tab eventKey={'pie'} title="Donut/Pie">
								<Pie/>
							</Tab>
							<Tab eventKey={'bar'} title="Bars">

							</Tab>
						</Tabs>
					</Tab.Container>
				</Col>
				<Col md={2}></Col>
			</Row>
		);
  }
}



export default Chart;
