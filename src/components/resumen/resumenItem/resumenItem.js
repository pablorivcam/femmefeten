import React, {Component} from 'react';
import './resumenItem.css';

class ResumenItem extends Component {
	
	render (){
		return (
			<div className="resumenItem">
				<img src={this.props.imagen}/>
				<div className="resumenItemContent">
					<h1>{this.props.nombre}</h1>
				</div>
			</div>
		);
	}
	
}

export default ResumenItem;