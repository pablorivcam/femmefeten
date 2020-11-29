import React, {Component} from 'react';
import './footer.css';
import logo2 from '../../images/logo2.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

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
								<span className="footerTableLink"><FontAwesomeIcon icon={faEnvelope}/>pablorivcam@gmail.com</span>
							</td>
							<td>
								<span className="footerTableTitle">Enlaces</span>
								<AnchorLink href='#home' 
									offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}
									className="footerTableLink">Inicio</AnchorLink>	
								<AnchorLink href='#resumen' 
									offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}
									className="footerTableLink">Proyectos</AnchorLink>								<AnchorLink href='#nosotras' 
									offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}
									className="footerTableLink">Nosotras</AnchorLink>
								<AnchorLink href='#contacto' 
									offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}
									className="footerTableLink">Contacto</AnchorLink>
							</td>
							<td>
								<span className="footerTableTitle">Redes Sociales</span>
								<a className="footerTableLink" href="#">
									<FontAwesomeIcon icon={faInstagram} /> Instagram
								</a>
								<a className="footerTableLink" href="#">
								<FontAwesomeIcon icon={faFacebook} /> Facebook</a>
							</td>
						</tr>
					</tbody>
				</table>
			
			</footer>
		);
	}
	
}

export default Footer;