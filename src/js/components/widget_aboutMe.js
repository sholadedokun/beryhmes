import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ProRandom extends Component{
    constructor(props){
        super();
        this.state=
        {
            currentRandom:0,
            images:["images/banner6.jpg", "images/banner7.jpg", "images/banner8.jpg","images/bannerw.jpg"],
            imagePool:["images/pic01.jpg", "images/pic06.jpg","images/pic07.jpg"],
            totalSlide:4
        }
        this.animateRandom=this.animateRandom.bind(this);
    }
    animateRandom(){
        let randomImageholder=Math.floor(Math.random()* this.state.images.length)
        let replacementImage=Math.floor(Math.random()* this.state.imagePool.length)

        let prevImage=this.state.images.slice();
        let poolImage=this.state.imagePool.slice();

        //replace Image
        prevImage[randomImageholder]=this.state.imagePool[replacementImage]
        //return Image to pool;
        poolImage[replacementImage]=this.state.images[randomImageholder];
        this.setState({images:prevImage, imagePool:poolImage});
    }
    componentWillReceiveProps(nextProps){
        this.setState({randomFacts:nextProps.random})
    }
    componentWillMount(){
        this.interval=setInterval(()=>this.animateRandom(), 5000)
    }
    componentWillUnMount(){
        clearInterval(this.interval);
    }
    render(){
        let randomDetails;
        let interval;
        return(
            <section id="one" className="wrapper style1 split">
				<div className="inner">
					<div className="content">
						<h2>About Me</h2>
						<p>Named Olalekan braimoh, but you know I have to put a little swag to it; "Berhymes" sounds sweet so it stuck. I studied Music from the Obafemi Awolowo University Ile-Ife. Music has been my passion and I don't really know when our love affair started. I've drummed, written, vocalised, produced and masetered many songs -pro, uhhh!!! </p>
						<ul className="actions">
						    <li><a href="#" className="button">My Story</a></li>
						</ul>
					</div>
					<div className="image-circles">
						<div className="images">
                            <ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={300} transitionLeaveTimeout={300} className="image"><img src={this.state.images[0]} key={this.state.images[0]} alt="" /></ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={300} transitionLeaveTimeout={300} className="image"><img src={this.state.images[1]} key={this.state.images[1]} alt="" /></ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={300} transitionLeaveTimeout={300} className="image"><img src={this.state.images[2]} key={this.state.images[2]} alt="" /></ReactCSSTransitionGroup>
                            <ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={300} transitionLeaveTimeout={300} className="image"><img src={this.state.images[3]} key={this.state.images[3]} alt="" /></ReactCSSTransitionGroup>
						</div>
                        <span className="focusImage">
                            <span className="overlay1 rotateClockwise transform_origin"></span>
                            <span className="overlay2 rotateClockwise  transform_origin animate_md_delay animate_md_duration"></span>
                            <span className="overlay3 rotateAntiClockwise  transform_origin  animate_lg_duration"></span>
                        </span>
					</div>
				</div>
			</section>
        )
    }
}
export default ProRandom;
