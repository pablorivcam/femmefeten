import React, {Component} from 'react';
import styles from './navbar.module.scss'; 
import logo from '../../images/logo.png';
import logo2 from '../../images/logo2.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {NavLink} from 'react-router-dom'

class SecondaryNavbar extends Component {
	
	render (){
		return (
			<nav className={styles['fixedTop']}>
				<div className={styles['headerNavbar']} style={{justifyContent: "flex-end", width: "98%"}}>					
					<NavLink to='/'>VOLVER</NavLink>
					<NavLink to='/' className={styles['logoContainer']}>
						<img className={styles['logo']} src={logo}/> 
					</NavLink>
				</div>
			</nav>
		);
	}
	
}

export default SecondaryNavbar;