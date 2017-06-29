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
                        <li><span className="icon fa-facebook"><span className="label">Lorem</span></span></li><li>
                        <span className="icon fa-twitter"><span className="label">Ipsum</span></span></li><li>
                        <span className="icon fa-instagram"><span className="label">Dolor</span></span></li><li>
                        <span className="icon fa-pinterest"><span className="label">Feugiat</span></span></li><li>
                        <span className="icon fa-snapchat"><span className="label">Tempus</span></span></li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default SocialMedia;
