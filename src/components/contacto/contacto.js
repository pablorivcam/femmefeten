import React, {Component, useState} from 'react';
import emailjs from 'emailjs-com';
import apiKeys from './apikeys'
import './contacto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

class Contacto extends Component {
		
	constructor (props, context){
		super();
		this.onSubmit = this.onSubmit.bind(this);
		this.sending = false;
	}
	
	onSubmit (e){
		e.preventDefault()// Prevents default refresh by the browser
		
		if (!this.sending){
			this.sending = true;	
			document.getElementById("sendMessage").classList.add("visible");
			document.getElementById("formularioContacto").reset();
			this.sending = false;	

			document.getElementById("home").addEventListener ("click",function (){
				document.getElementById("sendMessage").classList.remove("visible");
			})
			
	    }

			//emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
			//.then(result => {
			// this.sending = false
			//	alert('Message Sent, I\'ll get back to you shortly', result.text);
			//},
			//error => {
			//	alert( 'An error occured, Plese try again',error.text)
			//this.sending = false

			//})				

	}
	
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
							<form id="formularioContacto" className="formularioContacto" onSubmit = {this.onSubmit}>
	
					        	<label>Nombre:</label>
					            <input id="contactoFormNombre" type="text" name="nombre" 
					            	placeholder="Nombre y apellidos" required/>
					        	<label>Email:</label>
			            		<input type="email" name="correo" placeholder="Correo electrónico" required/>
	
					        	<label>Mensaje:</label>
				        		<textarea id="msg" name="mensaje" required></textarea>
	
					        	<input type="submit" value="Enviar" className="wpcf7-form-control wpcf7-submit"/>
						        
							</form>
			        	</div>
					</div>
				</div>
				
				<div id="sendMessage">
					<div>
						<h1><FontAwesomeIcon icon={faPaperPlane}/><br/>Mensaje Enviado!</h1>
						<p>Se ha enviado correctamente un correo electrónico a nuestra dirección de correo. Pronto te responderemos!</p>
					</div>
				</div>
				
			</section>
		);
	}
	
}

export default Contacto;