import React, { Component } from 'react';

import './Bar.css';
import '../utils/toolTip/ToolTip.css';

import { BarChartData } from '../data/Data';
import { ToolTip } from '../utils/toolTip/ToolTip';


// TODO : cant import it correctly
const d3 = require('d3');


class Bar extends Component {


	componentDidMount() {

		const tooltip = ToolTip.create();
		const w = 600;
		const h = 500;
		const padding = {top: 40, right: 40, bottom: 40, left:40};

		//stacking the data into pile
		//	-adding a y0 value
		//	-the 'cat' field is transmitted to the skills
		const data = BarChartData.map(cat => {
			cat.skills = cat.skills.map((skill, index) => {
				if (index === 0){
					skill.y0 = 0;
				} else {
					skill.y0 = cat.skills[index - 1].y0 + cat.skills[index - 1].value;
				}
				skill.x = cat.cat;
				return skill;
			});
			return cat;
		})

		const colorsPool = ['#1f77b4', '#2ca02c', '#ff7f0e', '#ff0d0d', '#ff0f87']
		const colorsPoolHover = ['#81bdea', '#89de87', '#ffd2a8', '#ffa3a3', '#ffa8d2']

		const colorHover =  (i) => colorsPoolHover[i % colorsPoolHover.length];
		const color = (i) => colorsPool[i % colorsPool.length];


		const xScale = d3.scale.ordinal()
		.domain(['', 'front-end', 'back-end', 'data', 'infrastructure'])
		.range([
			0,
			(w - padding.left - padding.right) * 0.1,
			(w - padding.left - padding.right) * 0.35,
			(w - padding.left - padding.right) * 0.60,
			(w - padding.left - padding.right) * 0.85,
			(w - padding.left - padding.right)
		]);


		const yScale = d3.scale.linear()
		.domain([0,
		d3.max( data, (e) => d3.max(e.skills, (e2) =>  e2.y0 + e2.value))
		])
		.range([h-padding.bottom-padding.top,0]);

		const xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom")
		.ticks(0);

		const yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left")
		.ticks(0);

		//Create SVG element
		const svg = d3.select("#bar")
		.append("svg")
		.attr("width", w)
		.attr("height", h);


		// Add a group for each col of data
		const cats = svg.selectAll("g")
		.data(data)
		.enter()
		.append("g")
		.attr("class","rgroups")
		.attr("transform","translate("+ padding.left + "," + (h - padding.bottom) +")")
		;

		// Add a rect for each data value
		var rects = cats.selectAll("rect")
		.data(d => d.skills)
		.enter()
		.append("rect")
		.attr("width", 30)
		.style("fill-opacity",1)
		.attr("x", (d, i) => xScale(d.x))
		.attr("y", (d) => -(- yScale(d.y0) - yScale(d.value) + (h - padding.top - padding.bottom)*2))
		.attr("height", (d) => -yScale(d.value) + (h - padding.top - padding.bottom))
		.style("fill", (d, i) => color(d3.max(data, e => e.skills.indexOf(d))))
		.on("mouseover", (d) => {
			ToolTip.on(tooltip, d.label);
			rects.transition()
			.duration(300)
			.style("fill", (d2) =>
				(d === d2) ? colorHover(d3.max(data, e => e.skills.indexOf(d)))
				: color(d3.max(data, e => e.skills.indexOf(d2))));
		})
		.on("mouseout", () => {
			ToolTip.off(tooltip);
			rects.transition()
			.duration(300)
			.style("fill", (d2) => color(d3.max(data, e => e.skills.indexOf(d2))));
		});
		svg.append("g")
			.attr("class","x axis")
			.attr("transform","translate(40," + (h - padding.bottom) + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class","y axis")
			.attr("transform","translate(" + padding.left + "," + padding.top + ")")
			.call(yAxis);
}

	render() {
    return (
			<div id={'bar'}/>
		);
  }
}



export default Bar;
