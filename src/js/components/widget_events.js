import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';

class Event extends Component{
    render(){

        return(
            <section id="event" className="wrapper style2 alt">
                <div className="inner">
                    <header className="timelineMajor">
                        <p>Catch Me if you can</p>
                        <h2>See all the cool Places I will be next</h2>
                    </header>
                    <section className="timeline">
                        <section>
                            <header>
                                <p>09.04.17</p>
                                <h4>Madison Square Garden, New York</h4>
                            </header>
                            <span className="image"><img src="images/madison.jpeg" alt="" /></span>
                            <div className="content">
                                <p>Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">More</a></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <header>
                                <p>12.28.17</p>
                                <h4>02 Arena,
                                London</h4>
                            </header>
                            <span className="image"><img src="images/02arena.jpg" alt=""/></span>
                            <div className="content">
                                <p>Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">More</a></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <header>
                                <p>02.22.18</p>
                                <h4>Wembley Stadium, London</h4>
                            </header>
                            <span className="image"><img src="images/wembley.jpg" alt=""/></span>
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
