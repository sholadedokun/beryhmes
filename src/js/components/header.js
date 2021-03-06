import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
class Head extends Component{

    render(){
        return(
            <div>
                <header id="header">
                    <nav>
                        <ul>
                            <li><a href="#menu">Menu</a></li>
                        </ul>
                    </nav>
                </header>

                <nav id="menu">
                    <h2>Menu</h2>
                    <ul className="links">
                        <li><a href="#banner">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#event">See Me Perform</a></li>
                        <li><a href="#music">Music And Me</a></li>
                        <li><a href="#social">Social Media</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default Head
