import React, {Component} from 'react';
import styles from './header.module.scss'; 
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.jpeg';
import CoolBtn from '../CoolBtn/coolBtn'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends Component {

	constructor (){
		super();
		
			window.addEventListener('scroll', () => {
				if (document.querySelector("#homeWrapper") != null){
					let top = window.scrollY < document.querySelector("#homeWrapper").getBoundingClientRect().height * 0.9;
					document.querySelector("header").className = top ? styles['hiddenTop'] : styles['fixedTop'];
				}
			});
		
	}
	
	render (){
		return (
				<header className={styles['hiddenTop']}>
					<div className={styles['headerNavbar']}>					
						<AnchorLink href='#home' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>INICIO</AnchorLink>
						<AnchorLink href='#resumen' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>PROYECTOS</AnchorLink>
						<AnchorLink href='#home' className={styles['logoContainer']}>
							<img className={styles['logo']} src={logo}/> 
						</AnchorLink>
						<AnchorLink href='#nosotras' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>NOSOTRAS</AnchorLink>
						<AnchorLink href='#contacto' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>CONTACTO</AnchorLink>
					</div>
				</header>
		);
	}
	
}

export default Header;