import React, {Component} from 'react';
import './resumen.scss';
import ResumenItem from './resumenItem/resumenItem';
import dummyImage from '../../images/dummyImg.jpg';

class Resumen extends Component {
	
	render (){
		return (
			<section id="resumen">
				<h1>Nuestros proyectos</h1>
				<div id="resumenItems">
					<ResumenItem nombre="Fotografía" 
						imagen={dummyImage}
						descripcion="uhfweuf fewuifewuhfew iuefwhifehefwuioehuoiewquh oiuio h"/>
					<ResumenItem nombre="Vídeo" 
						imagen={dummyImage}
						descripcion="uhfweuf fewuifewuhfew iuefwhifehefwuioehuoiewquh oiuio h"/>
				</div>
			</section>
		);
	}
	
}

export default Resumen;