import React, {Component} from 'react';
const contactMe = () => {
    return(
        <section id="footer" className="wrapper split style2">
            <div  id="contact" className="inner">
                <section>
                    <header>
                        <h3>Contact Me</h3>
                    </header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos magna fames ac turpis egestas amet non lorem amet.</p>
                    <ul className="icons">
                        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                    </ul>
                </section>
                <section>
                    <form method="post" action="#">
                        <div className="field half first"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div className="field half"><input type="email" name="email" id="email" placeholder="Email" /></div>
                        <div className="field"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" /></li>
                        </ul>
                    </form>
                </section>
            </div>
            <div className="copyright">
                <p>&copy; Hodaziah Music. All rights reserved.</p>
            </div>
        </section>
    )

}
export default contactMe;
