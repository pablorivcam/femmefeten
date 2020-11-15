import React, {Component} from 'react';
import './resumen.scss';
import ResumenItem from './resumenItem/resumenItem';

import sesion01 from '../../images/imagenes/sesion01.jpg';
import sesion02 from '../../images/imagenes/sesion02.jpg';
import sesion03 from '../../images/imagenes/sesion03.jpg';
import sesion04 from '../../images/imagenes/sesion04.jpg';
import sesion05 from '../../images/imagenes/sesion05.jpg';

class Resumen extends Component {
	
	render (){
		return (
			<section id="resumen">
				<h1>Nuestros proyectos</h1>
				<div id="resumenItems">
					<table>
						<tr>
							<td style={{width: 50 + 'vw', height: 45 + 'vh'}}>
								<ResumenItem nombre="Sesión prueba 01" 
									imagen={sesion01}/>							
							</td>
							<td style={{width: 40 + 'vw', height: 70 + 'vh'}} rowspan="2">
								<ResumenItem nombre="Sesión prueba 02" 
									imagen={sesion05}/>							
							</td>
						</tr>
						<tr>
							<td style={{width: 50 + 'vw', height: 25 + 'vh'}}>
								<ResumenItem nombre="Sesión prueba 03" 
									imagen={sesion02}/>	
							</td>
						</tr>
					</table>
					
				</div>
			</section>
		);
	}
	
}

export default Resumen;