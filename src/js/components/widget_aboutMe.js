import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';

class ProRandom extends Component{
    constructor(props){
        super();
        this.state={randomFacts:props.random, currentRandom:0}
        this.animateRandom=this.animateRandom.bind(this);
    }
    animateRandom(){
        if(this.state.currentRandom>=this.state.randomFacts.length-1){
            this.setState({currentRandom:0})
        }
        else this.setState((prevState)=>({currentRandom:prevState.currentRandom +1}))
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
        if(this.state.randomFacts.length >0){
                randomDetails= <Col className="nop randomFacts" xs={12}>
                <h5>{this.state.randomFacts[this.state.currentRandom].type}</h5>
                <div className="project_title">{this.state.randomFacts[this.state.currentRandom].title}</div>
                <p>{this.state.randomFacts[this.state.currentRandom].description}</p>
            </Col>
        }
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
							<span className="image"><img src="images/banner7.jpg" alt="" /></span>
							<span className="image"><img src="images/banner6.jpg" alt="" /></span>
                            <span className="image"><img src="images/banner8.jpg" alt="" /></span>
							<span className="image"><img src="images/bannerw.jpg" alt="" /></span>
						</div>

					</div>
				</div>
			</section>
        )
    }
}
export default ProRandom;
