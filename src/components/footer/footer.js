import React, {Component} from 'react';
import './footer.css';
import logo2 from '../../images/logo2.jpeg';

class Footer extends Component {
	
	render (){
		return (
			<footer>
			
				<table>
					<tbody>
						<tr>
							<td>
								<img className="logo" src={logo2} alt="femmeFetenLogo"/> 
								<a className="footerTableLink" href="#">Pablo Rivas Camino - ©2020</a>
								<span className="footerTableLink">Dirección</span>
								<span className="footerTableLink">Teléfono</span>
							</td>
							<td>
								<span className="footerTableTitle">Enlaces</span>
								<a className="footerTableLink" href="#">Inicio</a>
								<a className="footerTableLink" href="#">Fotografía</a>
								<a className="footerTableLink" href="#">Vídeo</a>
								<a className="footerTableLink" href="#">Nosotras</a>
								<a className="footerTableLink" href="#">Contacto</a>
							</td>
							<td>
								<span className="footerTableTitle">Redes Sociales</span>
								<a className="footerTableLink" href="#">Instagram</a>
								<a className="footerTableLink" href="#">Facebook</a>
							</td>
						</tr>
					</tbody>
				</table>
			
			</footer>
		);
	}
	
}

export default Footer;