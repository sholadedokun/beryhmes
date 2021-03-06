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
            <section id="banner" className="wrapper">
				<div className="inner">
					<div className="content">
						<span className='TopBannerHeader'>B</span><span className='TopBannerSubHeader'>erhymes</span>
						<p>
                            <div>
                                <div>Artist, Sound Engineer,</div>
                                <span className='workSlide'>
                                    <ul>
                                        <li>Guitarist</li>
                                        <li>Producer</li>
                                        <li>Musicologist</li>
                                        <li>Songwriter</li>
                                    </ul>
                                </span>
                            </div>
                        </p>
					</div>

				</div>
			</section>
        )
    }
}
export default TopBanner;
