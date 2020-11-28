import React, {Component} from 'react';
import './resumen.scss';
import ResumenItem from './resumenItem/resumenItem';
import SesionMap from './sesionMap.js';
import VisorSesion from './visorSesion/visorSesion.js';

class Resumen extends Component {

	sesionMap = {};
	visorSesion = new VisorSesion();	
	
	constructor (){
		super();
		this.sesionMap = new SesionMap();
		
	}
	
	getSesionContent (sesionId){
	
		let sesion = this.sesionMap.getMap()[sesionId];

		return (<td id={"sesionItem" + sesionId} data-aos={sesion.aosEffect} data-aos-duration="1000" 
			rowSpan= {sesion.rowspan} style={{width: sesion.ancho + 'vw', height: sesion.alto + 'vh'}}>
				<ResumenItem nombre={sesion.nombre} visorSesion = {this.visorSesion}
					imagen={sesion.portada} itemId="resumenItem01" imagenes = {sesion.imagenes}/>							
			</td>);
	}
	
	render (){
		return (
			<React.Fragment>
				<VisorSesion images = {[]}/>
				<section id="resumen">
					<h1>Nuestros proyectos</h1>
					<div id="resumenItems">
						<table>
							<tbody>
								<tr>
									{this.getSesionContent(0)}
									{this.getSesionContent(1)}						
								</tr>
								<tr>
									{this.getSesionContent(2)}						
								</tr>
							</tbody>
						</table>
						
					</div>
				</section>
			</React.Fragment>
		);
	}
	
}

export default Resumen;