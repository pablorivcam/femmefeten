import React, {Component} from 'react';
import './resumenItem.css';

class ResumenItem extends Component {
	
	render (){
		return (
			<div className="resumenItem">
				<div className="resumenItemImage" style={{background: 'url('+this.props.imagen+')'}}/>
				<div className="resumenItemContent">
					<h1>{this.props.nombre}</h1>
				</div>
			</div>
		);
	}
	
}

export default ResumenItem;