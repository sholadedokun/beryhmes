import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';

class SocialMedia extends Component{
    render(){

        return(
            <section className="wrapper style2 special">
                <div className="inner">
                    <header>
                        <h2>Collect on Social Media</h2>
                        <p>I mostly post interesting stuff</p>
                    </header>
                    <ul className="icons major style2">
                        <li><a href="https://www.facebook.com/berhymes/" target="_blank"><span className="icon fa-facebook"><span className="label"> </span></span></a></li>
                        <li><a href="https://www.twitter.com/iam_berhymes/" target="_blank"><span className="icon fa-twitter"><span className="label"> </span></span></a></li>
                        <li><a href="https://www.instagram.com/iam_berhymes/" target="_blank"><span className="icon fa-instagram"><span className="label"> </span></span></a></li>
                        <li><a href="https://www.soundcloud.com/berhymes/" target="_blank"><span className="icon fa-soundcloud"><span className="label"> </span></span></a></li>
                        <li><a href="https://www.snapchat.com/add/iam_berhymes/" target="_blank"><span className="icon fa-snapchat"><span className="label"> </span></span></a></li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default SocialMedia;
