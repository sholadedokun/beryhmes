import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';

import $ from 'jquery';

class Intro extends Component{

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
                <section id="intro" className="wrapper featured style1">
                    <div className="inner">
                        <span className="image">
                            {/*<span className="rotateIntroCycle1"></span>*/}

                            <img src="images/bannerw.jpg" alt="" />
                        </span>
                        <div className="content">
                            <header>
                                <h1>BeRhymes</h1>
                                <p>I'm ipsum dolor sit magna consectetur<br />
                                adipiscing elit. Duis dapibus rutrum facilisis.<br />
                                classaptent taciti sociosqu and you Love olushola.</p>
                            </header>
                            <footer>
                                <ul className="actions">
                                    <li><a href="#" className="button big">Get to Know me</a></li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                </section>
        )
    }
}
export default Intro;
