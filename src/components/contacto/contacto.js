import React, {Component} from 'react';
import emailjs from 'emailjs-com';
import apiKeys from './apikeys'
import './contacto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

class Contacto extends Component {
	
	onSubmit (e){
		e.preventDefault()// Prevents default refresh by the browser
		emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
		.then(result => {
			alert('Message Sent, I\'ll get back to you shortly', result.text);
		},
		error => {
			alert( 'An error occured, Plese try again',error.text)
		})	}
	
	render (){
		return (
			<section id="contacto">
				<div id="contactoContainer">
					<div id="contactoContent">
						<h1>Contáctanos</h1>
						<h2>Tienes un proyecto en mente? A qué esperas para contárnoslo!</h2>
						<div id="contactoInfo">
							<div id="staticContactoInfo">
								<div><FontAwesomeIcon icon={faPhone}/> +34 123 456 789</div>
								<div><FontAwesomeIcon icon={faEnvelope}/> femmefeten@gmail.com</div>
								<div id="contactoRedesSociales">
									<a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
									<a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
								</div>
							</div>
							<form className="formularioContacto" onSubmit = {this.onSubmit}>
	
					        	<label>Nombre:</label>
					            <input type="text" name="nombre" placeholder="Nombre y apellidos"/>
					        	<label>Email:</label>
			            		<input type="email" name="correo" placeholder="Correo electrónico"/>
	
					        	<label>Mensaje:</label>
				        		<textarea id="msg" name="mensaje"></textarea>
	
					        	<input type="submit" value="Enviar" class="wpcf7-form-control wpcf7-submit"/>
						        
							</form>
			        	</div>
					</div>
				</div>
			</section>
		);
	}
	
}

export default Contacto;