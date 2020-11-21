import React, {Component} from 'react';
import styles from './navbar.module.scss'; 
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
					<AnchorLink href='#home' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>INICIO</AnchorLink>
					<AnchorLink href='#resumen' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>PROYECTOS</AnchorLink>
					<AnchorLink href='#home' className={styles['logoContainer']}>
						<img className={styles['logo']} src={logo}/> 
					</AnchorLink>
					<AnchorLink href='#nosotras' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>NOSOTRAS</AnchorLink>
					<AnchorLink href='#contacto' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>CONTACTO</AnchorLink>
				</div>
			</nav>
		);
	}
	
}

export default Navbar;