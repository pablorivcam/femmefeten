import React, {Component} from 'react';
import styles from './header.module.scss'; 
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.jpeg';
import CoolBtn from '../CoolBtn/coolBtn'; 

class Header extends Component {

	constructor (){
		super();
		window.addEventListener('scroll', () => {
	          let top = window.scrollY < document.querySelector("#homeWrapper").getBoundingClientRect().height * 0.9;
	          document.querySelector("header").className = top ? styles['hiddenTop'] : styles['fixedTop'];
	    });
	}
	
	render (){
		return (
				<header className={styles['hiddenTop']}>
					<div className={styles['headerNavbar']}>					
						<a>FOTOGRAFÍA</a>
						<a>VÍDEO</a>
						<div className={styles['logoContainer']}>
							<img className={styles['logo']} src={logo}/> 
						</div>
						<a href="#nosotrasAnchor">NOSOTRAS</a>
						<a href="#contactoAnchor">CONTACTO</a>
					</div>
				</header>
		);
	}
	
}

export default Header;