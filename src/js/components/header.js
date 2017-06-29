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
                        <li><a href="index.html">Home</a></li>
                        <li><a href="generic.html">Ipsum veroeros</a></li>
                        <li><a href="generic.html">Tempus etiam</a></li>
                        <li><a href="generic.html">Consequat dolor</a></li>
                        <li><a href="elements.html">Elements</a></li>
                    </ul>
                    <ul className="actions vertical">
                        <li><a href="#" className="button fit special">Get Started</a></li>
                        <li><a href="#" className="button fit">Log In</a></li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default Head
