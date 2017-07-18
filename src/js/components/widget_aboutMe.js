import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AboutIndex from './widget_aboutIndex';

class AboutMe extends Component{
    constructor(props){
        super();
        this.state=
        {
            currentRandom:0,
            images:["images/banner6.jpg", "images/banner7.jpg", "images/banner8.jpg","images/bannerw.jpg"],
            imagePool:["images/pic01.jpg", "images/pic06.jpg","images/pic07.jpg"],
            animationLeaveDuration:1000,
            animationEnterDuration:900,
            totalSlide:4,
            currentView: <AboutIndex onClick={this.handleRoute()} />
        }
        this.animateRandom=this.animateRandom.bind(this);
        this.handleRoute=this.handleRoute.bind(this);
    }
    handleRoute(route){
        console.log(route);
    }
    animateRandom(){
        let randomImageholder =Math.floor(Math.random()* this.state.images.length)
        let replacementImage=Math.floor(Math.random()* this.state.imagePool.length)

        let prevImage=this.state.images.slice();
        let poolImage=this.state.imagePool.slice();

        //replace Image
        prevImage[randomImageholder]=this.state.imagePool[replacementImage]
        //return Image to pool;
        poolImage[replacementImage]=this.state.images[randomImageholder];
        this.setState({images:prevImage, imagePool:poolImage});
    }
    showMore(){

    }
    componentWillReceiveProps(nextProps){
        this.setState({randomFacts:nextProps.random})
    }
    componentWillMount(){
        this.interval=setInterval(()=>this.animateRandom(), 7500);


    }
    componentWillUnMount(){
        clearInterval(this.interval);
    }
    render(){
        let randomDetails;
        let interval;

        return(
            <section id="about" className="wrapper style1 split">
				<div className="inner">
                    <h2>About Me</h2>
                    <ReactCSSTransitionGroup  transitionName="aboutImages"
                        transitionEnterTimeout={this.state.animationEnterDuration}
                        transitionLeaveTimeout={this.state.animationLeaveDuration}
                        className="aboutMovable"
                    >
                        {this.state.currentView}
                    </ReactCSSTransitionGroup>
				</div>
			</section>
        )
    }
}
export default AboutMe;
