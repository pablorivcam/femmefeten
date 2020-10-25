import React, {Component} from 'react';
import styles from './backgroundvid.module.css'; 

class BackgroundVideo extends Component {

	render (){
		return (
	    	<div className={styles.videoContainer}>
	    		<video autoPlay="autoplay" loop="loop" muted className={styles.video}>
	    			<source src={this.props.videoSource} type="video/mp4" />
	    			Tu navegador no soporta la etiqueta video.
	    		</video>
	    	</div>
		);
	}
	
}
	
export default BackgroundVideo;	
