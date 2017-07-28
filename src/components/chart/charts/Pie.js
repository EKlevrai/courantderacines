import React, { Component } from 'react';

import './Pie.css';

import { PieChartData } from './Data';
import { hsl } from './UtilChart';

// TODO : cant import it correctly
const d3 = require('d3');

class PieChart extends Component {
	componentDidMount() {
		const data = PieChartData,
					m = 10,
		    	r = 100,
					z = d3.scale.linear().domain([0,data.length]).range([hsl(200,	0.59,	0.4), hsl(200,	0.59,	0.8)]);
//	    		z = (d,i) => hsl(((360/data.length) * i) % 360, 0.7, 0.8 - (0.3 * d.data));

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
					.style("fill", function(d, i) { return z(i); });
	}

	render() {
    return (
			<div id={'pie'}/>
    );
  }
}



export default PieChart;
