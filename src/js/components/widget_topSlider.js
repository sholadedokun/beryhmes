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
						<span className='TopBannerHeader'>BE</span><span className='TopBannerSubHeader'>RHYMES</span>
						<p>
                            <div>
                            <div>Artist, Producer,</div>
                                <ul>
                                    <li>Guitarist</li>
                                    <li>Teacher</li>
                                    <li>Dancer</li>
                                    <li>Writer</li>
                                </ul>
                            </div>
                        </p>
					</div>

				</div>
			</section>
        )
    }
}
export default TopBanner;
