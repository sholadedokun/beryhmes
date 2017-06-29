import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';

class TopBanner extends Component{
    render(){

        let ProDescription= this.props.description;
        let subtext="";
        if(ProDescription.subtext){
            subtext=<h4>{ProDescription.subtext}</h4>;
        }
        return(
            <section id="banner">
				<div className="inner">
					<div className="content">
						<h2>Berhymes is the name</h2>
						<p>Music is the game</p>
					</div>
					 <ul className="actions vertical"> 
						{/* <li><a href="#" className="button special major">Get Started</a></li> */}
						{/* <li><a href="#" className="button major">More Info</a></li> */}
					 </ul>
				</div>
			</section>
        )
    }
}
export default TopBanner;
