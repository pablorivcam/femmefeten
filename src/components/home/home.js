import React, {Component} from 'react';
import './home.css';
import BackgroundVideo from '../backgroundvideo/BackgroundVideo';
import Resumen from '../resumen/resumen';
import Nosotras from '../nosotras/nosotras';
import Contacto from '../contacto/contacto';
import Footer from '../footer/footer';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';

import headerVideo from '../../images/video/video01.MOV';

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
			<React.Fragment>
	    	<Header/>
	    	<Navbar/>
			<div id="home">
				<div className="homeContent">
					<div>
						<h1 className="homeContentTitle">FEMME FETÉN</h1>
						<span className="homeContentSubtitle">Estudio fotográfico</span>
					</div>
				</div>
				<div className="homeVideo">
					<BackgroundVideo videoSource={headerVideo}/>
				</div>
				<div id="homeStaticContent">
					<div id="homeWrapper"/>
					<Resumen/>
					<Nosotras/>
					<Contacto/>
		    		<Footer/>
				</div>
					
			</div>
			</React.Fragment>
		);
	}
	
}

export default Home;