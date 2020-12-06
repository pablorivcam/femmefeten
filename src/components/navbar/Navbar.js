import React, {Component} from 'react';
import styles from './navbar.module.scss'; 
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
	
	
	constructor (){
		super();	
		
		this.collapsed = true;
		this.initialized = false;
		
		this.onCollapse = this.onCollapse.bind(this);
		window.addEventListener('scroll', () => {
			if (document.querySelector("#homeWrapper") != null){
	          let isTop = document.getElementsByTagName("body")[0].clientWidth > 768 && window.scrollY < document.querySelector("#homeWrapper").getBoundingClientRect().height -
	          document.querySelector("nav").getBoundingClientRect().height;
	          document.querySelector("nav").className = isTop ? styles['hiddenTop'] : styles['fixedTop'];
			}	
	    });

	}
	
	onCollapse (){
		this.collapsed = !this.collapsed;
		
		if (this.collapsed){
			document.getElementById("collapseButton").classList.remove(styles['activeCollapesButon']);
			document.getElementById("navbarContent").classList.remove(styles['uncollapsed']);	
		} else {
			document.getElementById("collapseButton").classList.add(styles['activeCollapesButon']);	
			document.getElementById("navbarContent").classList.add(styles['uncollapsed']);	
		}	
		
		
	}
	
	render (){
		return (
			<nav>
				<div className={styles['collapseButtonContainer']}>
					<div id="collapseButton" className={styles['collapseButton']} onClick={this.onCollapse}>
						<FontAwesomeIcon icon={faBars}/>
					</div>
				</div>
				<div className={styles['collapseLogo']}>
					<img className={styles['logo']} src={logo}/> 
					<h1>Femme Fetén</h1>
				</div>
				<div id="navbarContent" className={styles['headerNavbar']}>
					<div className={styles['headerNavbarLink']} onClick={this.onCollapse}>
						<AnchorLink href='#home' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>INICIO</AnchorLink>
					</div>
					<div className={styles['headerNavbarLink']} onClick={this.onCollapse}>
						<AnchorLink href='#resumen' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>PROYECTOS</AnchorLink>
					</div>
					<AnchorLink id={styles['homeLink']} href='#home' className={styles['logoContainer']}>
						<img className={styles['logo']} src={logo}/> 
					</AnchorLink>
					<div className={styles['headerNavbarLink']} onClick={this.onCollapse}>
						<AnchorLink href='#nosotras' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>NOSOTRAS</AnchorLink>
					</div>
					<div className={styles['headerNavbarLink']} onClick={this.onCollapse}>
						<AnchorLink href='#contacto' offset={() => Math.floor(document.querySelector("nav").getBoundingClientRect().height)}>CONTACTO</AnchorLink>
					</div>
				</div>
			</nav>
		);
	}
	
}

export default Navbar;