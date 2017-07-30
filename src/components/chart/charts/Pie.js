import React, { Component } from 'react';

import './Pie.css';
import '../utils/toolTip/ToolTip.css';
import { Row, Col } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';

import { PieChartData } from '../data/Data';
import { ToolTip } from '../utils/toolTip/ToolTip';


import PieChartHighlight from './PieChartHighligth'


// TODO : cant import it correctly
const d3 = require('d3');


let r = 100;

let svg;

class PieChart extends Component {
	componentDidMount() {
		this.setState({
			index: -1
		})
		const data = PieChartData,
					m = 10,
		    	z = d3.scale.linear().domain([0,data.length]).range(['#1f5c7a', '#aed6ea']),
					tooltip = ToolTip.create();

		// creating the donut and setting the data and listeners
		svg = d3.select("#pie").selectAll("svg")
	  	.data([data.map(e2 => e2.value)])
	  	.enter().append("svg")
	    	.attr("width", (r + m) * 2)
	    	.attr("height", (r + m) * 2)
	  	.append("g")
	    	.attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");
		svg.selectAll("path")
		  .data(d3.layout.pie())
		  .enter().append("path")
		    .attr("d", d3.svg.arc()
		      .innerRadius(r / 2)
		      .outerRadius(r))
					.style("fill", (d, i) => z(i))
				.on("mouseover", (d, i) => {
					ToolTip.on(tooltip, data[i].label);
				})
				.on("mouseout", () => {
					ToolTip.off(tooltip);
				})
				.on("click", (d, i) => {
					this.setState({
						index: i,
					})
				});
	}

	/**
		* toggle type (donut to pie and vice-versa)
		*	@param {integer} val : 1 for donut, 0 for pie
		*/
	toggleType = (val) => {
		let r2;
		if(val === 1){
			r2 = r/2;
		} else {
			r2 = 0;
		}
		svg.selectAll("path")
		.transition()
		.duration(200)
		.attr("d",d3.svg.arc()
			.innerRadius(r2)
			.outerRadius(r));
	}



	render() {
		const index = (this.state) ? this.state.index : -1;
    return (
			<Row>
				<Col md={3}>
						<div id={'pie'}/>
						<div className={'toggles'}>
							<ToggleButtonGroup type={'radio'} name="donut/pie" defaultValue={1} onChange={this.toggleType}>
	 							<ToggleButton value={1}>
		 							Donut
	 							</ToggleButton>
	 							<ToggleButton value={2}>
									Pie
								</ToggleButton>
 							</ToggleButtonGroup>
						</div>
				</Col>
				<Col md={9}>
					<PieChartHighlight index={index} ></PieChartHighlight>
				</Col>
			</Row>
    );
  }
}



export default PieChart;
