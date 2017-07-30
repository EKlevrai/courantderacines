import React, { Component } from 'react';
import { PieChartData } from '../data/Data';
import './PieChartHighlight.css';

/**
	*	PieChartHighlight is the right part of the pie chart
	*	it uses PieChartData, so modifying the data file will affect both Pie.js and PieChartHighlight
	*/
class PieChartHighlight extends Component {
	render() {
		const index = this.props.index;
		if (index >= 0){
				const selected = PieChartData[index],
				value = selected.value,
				sumData = PieChartData.map(e => e.value).reduce((tot, n) => tot + n),
				percent = 100 * value / sumData;
	    return (
				<div className={'image-wrapper'} style={{backgroundImage: `url(${selected.imgUrl})`, backgroundSize:'cover'}}>
					<div className={'white-layer'}>
						<h2>{selected.label}</h2>
						<p>{value} sur {sumData} ({percent}%)</p>
						<p className={'description'}>{selected.description}</p>
					</div>
				</div>
	    );
		}
		return (<h1>Click on the chart ! </h1>);
  }
}



export default PieChartHighlight;
