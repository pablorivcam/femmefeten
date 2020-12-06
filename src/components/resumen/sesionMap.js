import sesion01 from '../../images/imagenes/sesion01.jpg';
import sesion02 from '../../images/imagenes/sesion02.jpg';
import sesion03 from '../../images/imagenes/sesion03.jpg';
import sesion04 from '../../images/imagenes/sesion04.jpg';
import sesion05 from '../../images/imagenes/sesion05.jpg';

import begoAreaPortada from '../../images/imagenes/begoArea/portada.jpg';
import begoArea01 from '../../images/imagenes/begoArea/ML9B1383.jpg';
import begoArea02 from '../../images/imagenes/begoArea/ML9B1374.jpg';
import begoArea03 from '../../images/imagenes/begoArea/ML9B1258.jpg';
import begoArea04 from '../../images/imagenes/begoArea/ML9B1219.jpg';
import begoArea05 from '../../images/imagenes/begoArea/ML9B1187.jpg';

import danielaAidaPortada from '../../images/imagenes/danielaAida/portada.jpg';
import danielaAida01 from '../../images/imagenes/danielaAida/ML9B0348.jpg';
import danielaAida02 from '../../images/imagenes/danielaAida/ML9B0354.jpg';
import danielaAida03 from '../../images/imagenes/danielaAida/ML9B0356.jpg';
import danielaAida04 from '../../images/imagenes/danielaAida/ML9B0380.jpg';
import danielaAida05 from '../../images/imagenes/danielaAida/ML9B0385.jpg';

import juditWebPortada from '../../images/imagenes/judithWeb/portada.jpg';
import juditWeb01 from '../../images/imagenes/judithWeb/4_DSC9002.jpg';
import juditWeb02 from '../../images/imagenes/judithWeb/4_DSC9007.jpg';
import juditWeb03 from '../../images/imagenes/judithWeb/4_DSC9017.jpg';
import juditWeb04 from '../../images/imagenes/judithWeb/4_DSC9018.jpg';


class SessionMap {	
	
	getMap (){
		return  [		
			{
				nombre: 'Bego Area',
				portada: begoAreaPortada,
				imagenes: [begoArea01, begoArea02, begoArea03, begoArea04, begoArea05],
				ancho: 50,
				alto: 45,
				rowspan: 1,
				colspan: 1,
				aosEffect: 'fade-up'
			},
			{
				nombre: 'Judith Web',
				portada: juditWebPortada,
				imagenes: [juditWeb01, juditWeb02, juditWeb03, juditWeb04],
				ancho: 40,
				alto: 71,
				rowspan: 2,
				colspan: 1,
				aosEffect: 'fade-left'
			},
			{
				nombre: 'Daniela Aida',
				portada: danielaAidaPortada,
				imagenes: [danielaAida01, danielaAida02, danielaAida03,danielaAida04,danielaAida05],
				ancho: 50,
				alto: 25,
				rowspan: 1,
				colspan: 1,
				aosEffect: 'fade-right'
			}
		]
	}

}

export default SessionMap;