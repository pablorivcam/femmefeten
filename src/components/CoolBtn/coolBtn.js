import React, {Component} from 'react';
import styles from './coolbtn.module.css'; 

class CoolBtn extends Component {

	render (){
		return (
	    	<div className={styles['coolBtn']}>
	    		<svg width = "200" height = "60" xmlns="http://www.w3.org/2000/svg">
	    			<rect className={styles['coolBtnShape']} width = "200" height = "60"/>
	    		</svg>
    			<span className={styles['coolBtnText']}>{this.props.text}</span>
	    	</div>
		);
	}
	
}
	
export default CoolBtn;	