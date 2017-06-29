import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';

class Event extends Component{
    render(){

        return(
            <section id="four" className="wrapper style2 alt">
                <div className="inner">
                    <header className="timelineMajor">
                        <p>Catch Me if you can</p>
                        <h2>See all the cool Places I will be next</h2>
                    </header>
                    <section className="timeline">
                        <section>
                            <header>
                                <p>09.04.16</p>
                                <h4>Magna etiam sed lorem ipsum dolor amet</h4>
                            </header>
                            <span className="image"><img src="images/bannerw.jpg" alt="" /></span>
                            <div className="content">
                                <p>Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">More</a></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <header>
                                <p>08.28.16</p>
                                <h4>Sed feugiat et mauris adipiscing dolor</h4>
                            </header>
                            <span className="image"><img src="images/banner7.jpg" alt=""/></span>
                            <div className="content">
                                <p>Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">More</a></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <header>
                                <p>08.22.16</p>
                                <h4>Tellus magna dolore sed elementum</h4>
                            </header>
                            <span className="image"><img src="images/banner8.jpg" alt=""/></span>
                            <div className="content">
                                <p>Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">More</a></li>
                                </ul>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}
export default Event;
