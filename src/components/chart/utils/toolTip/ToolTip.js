const d3 = require('d3');
/**
	* This file is a bundle of functions required to print a tooltip and interract with them
	* In order to make it work, you have to import the Tooltip.css
	*/


export const ToolTip = {
	create: () => {
		const tooltip = d3.select("body").append("div")
			.attr("class", "tooltip")
			.style("opacity", 0);
			return tooltip;
	},
	on: (tooltip, html) => {
		tooltip.transition()
				.duration(200)
				.style("opacity", .9);
		tooltip.html(html)
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
	},
	off: (tooltip) => {
		tooltip.transition()
		    .duration(500)
		    .style("opacity", 0);
	}
}
