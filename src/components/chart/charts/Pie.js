import React, { Component } from 'react';

import './Pie.css';
import '../utils/toolTip/ToolTip.css';

import { PieChartData } from '../data/Data';
import { ToolTip } from '../utils/toolTip/ToolTip';

// TODO : cant import it correctly
const d3 = require('d3');

class PieChart extends Component {
	componentDidMount() {
		const data = PieChartData,
					m = 10,
		    	r = 100,
					z = d3.scale.linear().domain([0,data.length]).range(['#1f5c7a', '#aed6ea']),
					tooltip = ToolTip.create();
		const svg = d3.select("#pie").selectAll("svg")
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
				.on("mouseover", (d) => {ToolTip.on(tooltip, 'azzzeaze'); })
				.on("mouseout", (d) => {ToolTip.off(tooltip);});
	}

	render() {
    return (
			<div id={'pie'}/>
    );
  }
}



export default PieChart;
