import React, {Component} from 'react';
import styles from './navbar.module.scss'; 
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.jpeg';

class Navbar extends Component {
	
	constructor (){
		super();
		window.addEventListener('scroll', () => {
	          let top = window.scrollY < document.querySelector("#homeWrapper").getBoundingClientRect().height -
	          document.querySelector("nav").getBoundingClientRect().height;
	          document.querySelector("nav").className = top ? styles['hiddenTop'] : styles['fixedTop'];
	    });
	}
	
	render (){
		return (
			<nav>
				<div className={styles['headerNavbar']}>					
					<a>FOTOGRAFÍA</a>
					<a>VÍDEO</a>
					<div className={styles['logoContainer']}>
						<img className={styles['logo']} src={logo}/> 
					</div>
					<a>NOSOTRAS</a>
					<a>CONTACTO</a>
				</div>
			</nav>
		);
	}
	
}

export default Navbar;