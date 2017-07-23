import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { contactPost} from '../actions/workActions';

class contactMe extends Component {
    renderInput(field){
        const {meta:{touched, error}} = field;
        const classN= `${ touched && error ? 'inputError':'' }`;
        return(
            <span>
                <input className={classN}  type={field.type} name={field.name} placeholder={field.placeholder} {...field.input} />
                <br /><span className='textError'>{touched ? error : ''}</span>
            </span>
        )

    }
    render(){

        return(
            <section id="footer" className="wrapper split style2">
                <div  id="contact" className="inner">
                    <section>
                        <header>
                            <h3>Contact Me</h3>
                        </header>
                        <p>For General Enquiry, please use the contact form provided or <br/> Send an Email to info@berhymes.com</p>
                        <ul className="icons">
                            <li><a href="https://www.facebook.com/berhymes/" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="https://www.twitter.com/iam_berhymes/" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="https://www.instagram.com/iam_berhymes/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="https://www.snapchat.com/iam_berhymes/" target="_blank" className="icon fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                            <li><a href="https://www.soundcloud.com/berhymes/" target="_blank" className="icon fa-soundcloud"><span className="label">Sound Cloud</span></a></li>
                        </ul>
                    </section>
                    <section>
                        <form onSubmit={this.props.handleSubmit((props)=> console.log(props))}>
                            <div className="field half first">
                                <Field component={this.renderInput.bind(this)} type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="field half">
                                <Field component={this.renderInput.bind(this)} type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="field">
                                <Field component="textarea" name="message" id="message" placeholder="Message" rows="4" />
                            </div>
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

}
function validate(values){
    const errors={}
    if(!values.name){
        errors.name = 'Please enter your name';
    }
    if(!values.email){
        errors.email = 'Please enter your email Address';
    }
    return errors;
}


export default reduxForm({
    validate,
    form: 'contactMe'
})(contactMe);
