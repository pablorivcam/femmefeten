import React, {Component} from 'react';
import './resumenItem.css';

class ResumenItem extends Component {
	
	render (){
		return (
			<div className="resumenItem">
				<img src={this.props.imagen}/>
				<h1>{this.props.nombre}</h1>
				<span>{this.props.descripcion}</span>
				<div className="resumenItemLink">
					<a href="#">Ver más</a>
				</div>
			</div>
		);
	}
	
}

export default ResumenItem;