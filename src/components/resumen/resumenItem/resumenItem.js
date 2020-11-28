import React, {Component} from 'react';
import './resumenItem.css';

class ResumenItem extends Component {
	
	constructor (){
		super();
		this.clickEvent = this.clickEvent.bind(this);
	}
	
	clickEvent (){
		this.props.visorSesion.setImages([this.props.imagenes]);
		document.getElementById("visorSesion").classList.add("visible");
		
		document.getElementById("home").addEventListener ("click",function (){
			document.getElementById("visorSesion").classList.remove("visible");
		})	
	}
	
	render (){
		return (
			<div className="resumenItem" onClick={this.clickEvent}>
				<div className="resumenItemImage" style={{background: 'url('+this.props.imagen+')'}}/>
				<div className="resumenItemContent">
					<h1>{this.props.nombre}</h1>
				</div>
			</div>
		);
	}
	
}

export default ResumenItem;