import React, {Component} from 'react';
import './sesion.scss';
import SecondaryNavbar from '../navbar/SecondaryNavbar';

class Sesion extends Component {
	
	render (){
		return (
			<React.Fragment>
		    	<SecondaryNavbar/>
	    		<section id="sesion">
		    		<h1>Sesión</h1>
		    	</section>
	    	</React.Fragment>
		);
	}
	
}

export default Sesion;