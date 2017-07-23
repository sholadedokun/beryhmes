import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';

var classNames = require('classnames');
import $ from 'jquery';

class Intro extends Component{
    constructor(props){
        super(props);
        this.getStarted = this.getStarted.bind(this);
        this.state={
            enterSite: false
        }
    }
    // fadeImage(){
    //     $('.slideImages').each(function(){
    //         //
    //         let inde=parseInt($(this).css("z-index"));
    //         // console.log(inde++)
    //         if(inde==0){
    //             $(this).removeClass("fadeoutAnim")
    //         }
    //         if(inde!=20){
    //             $(this).css('z-index', inde+1 );
    //         }
    //
    //         else{  $(this).addClass("fadeoutAnim")}
    //
    //
    //     })
    // }
    // componentDidUpdate()
    // {
    //
    //
    //
    // }
    getStarted(e){
        e.preventDefault();
        this.setState({
            enterSite: true
        })
    }
    render(){
        let ProImages= this.props.images;
        // let AllImages=[];
        // if(ProImages !== null){
        //     AllImages=ProImages.map((eachImage, index)=>{
        //         let classN='slideImages';
        //         let ind= ProImages.length-index;
        //         if(index==0){
        //             classN=classN+' fadeoutAnim'
        //         }
        //         return(
        //             <li key={index} className={classN} style={{zIndex:ind}}><Image  src={eachImage} alt="profile Picture" responsive /></li>
        //         )
        //     })
        //
        // }
        // if(AllImages.length > 0){
        //     setTimeout(
        //         setInterval(this.fadeImage.bind(this), 6000),6000
        //
        //     )
        //
        // }

        return(
            // <Col xs={12} md={6} className="nop widget-main widget-margin-right widget-margin-bottom">
            //     <ul className="bigSlideImageContainer">
            //         {AllImages}
            //     </ul>
            // </Col>
            // Intro -->
                <section id="intro" className={classNames({wrapper:true, featured:true, style1:true, animated: true, forward:true, animate_xs_delay:this.state.enterSite, slideOutUp: this.state.enterSite})}>
                    <div className="inner">
                        <span className={classNames({image: true, animated: true, forward:true, zoomOutLeft: this.state.enterSite})} >
                            <span className="focusImage">
                                <span className="overlay1 rotateClockwise transform_origin"></span>
                                <span className="overlay2 rotateClockwise  transform_origin animate_md_delay animate_md_duration"></span>
                                <span className="overlay3 rotateAntiClockwise  transform_origin  animate_lg_duration"></span>
                            </span>
                            <img src="images/bannerw.jpg" alt="" />
                        </span>
                        <div className="content">
                            <header  className={classNames({animated: true, forward:true, fadeOutUp: this.state.enterSite})} >
                                <h1>BeRhymes</h1>
                                <h3>/ be-rimes / </h3>
                                <p>A talented Nigerian Artist.<br />
                                </p>
                            </header>
                            <footer  className={classNames({animated: true, forward:true, bounceOutRight: this.state.enterSite})} >
                                <ul className="actions">
                                    <li><a href="#" onClick={this.getStarted} className="button big">Get to Know me</a></li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                </section>
        )
    }
}
export default Intro;
