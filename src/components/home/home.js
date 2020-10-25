import React, {Component} from 'react';
import './home.css';
import BackgroundVideo from '../backgroundvideo/BackgroundVideo';

class Home extends Component {
	
//	Player1 (){
//		return (<Player style="padding-top:1em"
//	    		autoPlay="true"
//	    		muted="true"
//				playsInline fluid={false}
//	    		aspectRatio="16:9"
//				poster="/assets/poster.png"
//				src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
//	    		<ControlBar autoHide="true" disableCompletely="true">
//	            	<PlaybackRateMenuButton rates={[2,1.5,1]} order={7.1} />
//	            	<VolumeMenuButton disabled />
//	    		</ControlBar>
//	    	</Player>);
//	}

	render (){
		return (
			<div className="home">
				<div className="homeContent">
					<div>
						<span className="homeContentSubtitle">Estudio fotográfico</span>
						<h1 className="homeContentTitle">FEMME FETÉN</h1>
						<span className="homeContentDescription">Somos dos chicas gallegas que hacemos unas fotografías que son la caña. Si quieres que te hagamos unas foticos contáctanos!</span>
						<a href="ddede" className="homeContentButton">VER MÁS</a>
					</div>
				</div>
				<div className="homeVideo">
					<BackgroundVideo videoSource="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
				</div>
			</div>
		);
	}
	
}

export default Home;