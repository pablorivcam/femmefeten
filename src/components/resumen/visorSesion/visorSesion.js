import React, {Component} from 'react';
import './visorSesion.scss';

import sesion04 from '../../../images/imagenes/sesion04.jpg';

class VisorSesion extends Component {
	
	setImages (images){
		
		for (let i = 0; i<images[0].length; i++){
			if (i !== 0){
				document.getElementById("visorSesionContainer").innerHTML+='<img src="'+images[0][i]+'"/>';	
			} else{
				document.getElementById("visorSesionContainer").innerHTML='<img src="'+images[0][i]+'"/>';	
			}
		}
		//console.log (document.getElementById("visorSesionContainer").innerHTML);
//		this.props.images = images;
//		this.props.key = Date.now();
	}
	render (){
		return (
			<div id="visorSesion">
				<div id="visorSesionContainer">
				</div>
			</div>
		);
	}
	
}

export default VisorSesion;