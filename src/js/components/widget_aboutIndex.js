import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 class AboutDetails extends Component {
     constructor(props){
         super();
         this.state=
         {
             currentRandom:0,
             images:["images/banner6.jpg", "images/banner7.jpg", "images/banner8.jpg","images/bannerw.jpg"],
             imagePool:["images/pic01.jpg", "images/pic06.jpg","images/pic07.jpg"],
             animationLeaveDuration:1000,
             animationEnterDuration:900,
             totalSlide:4
         }
         this.animateRandom=this.animateRandom.bind(this);
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
     componentWillMount(){
         this.interval=setInterval(()=>this.animateRandom(), 7500);

     }
     componentWillUnMount(){
         clearInterval(this.interval);
     }
     render(){
         return(
             <div className='inner'>
                <div className="content">
                     <p>
                         Named Olalekan braimoh, but you know I have to put a little swag to it; "Berhymes" sounds
                         sweet so it stuck. I studied Music from the Obafemi Awolowo University
                         Ile-Ife. Music has been my passion and I do not really know when our love affair started.
                         I have drummed, written, vocalised, produced and masetered many songs -pro, uhhh!!!
                     </p>
                     <ul className="actions">
                         <li><a href="#" className="button" onClick={props.onClick('fullstrory')} >My Story</a></li>
                     </ul>
                </div>
                <div className="image-circles">
                    <div className="images">
                         <ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={this.state.animationEnterDuration} transitionLeaveTimeout={this.state.animationLeaveDuration} className="image"><img src={this.state.images[0]} key={this.state.images[0]} alt="" /></ReactCSSTransitionGroup>
                         <ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={this.state.animationEnterDuration} transitionLeaveTimeout={this.state.animationLeaveDuration} className="image"><img src={this.state.images[1]} key={this.state.images[1]} alt="" /></ReactCSSTransitionGroup>
                         <ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={this.state.animationEnterDuration} transitionLeaveTimeout={this.state.animationLeaveDuration} className="image"><img src={this.state.images[2]} key={this.state.images[2]} alt="" /></ReactCSSTransitionGroup>
                         <ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={this.state.animationEnterDuration} transitionLeaveTimeout={this.state.animationLeaveDuration} className="image"><img src={this.state.images[3]} key={this.state.images[3]} alt="" /></ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
         )
     }
}
export default AboutDetails;
