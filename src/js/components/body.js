import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { fetchImages } from "../actions/userActions";

import TopSlider from "./widget_topSlider";
import AboutMe from "./widget_aboutMe";
import ProWork from "./widget_projects";
import SocialMedia from "./widget_socialMedia"
import Event from "./widget_events"
import Blog from "./widget_blog"
import ContactMe from "./widget_contactMe"

import '../../style/App.css';
class Body extends Component{
    // constructor(){
    //     super();

    // }
    // componentWillMount() {
    //     this.props.dispatch(fetchImages())
    // }
    render(){
        const {user, work}=this.props;
        return(
            <Row>
                <Col className="App-bodyMarign " xs={12}>
                    <TopSlider description={user.ProDescription} />
                    <AboutMe random={user.ProRandom} />
                    <Event  />
                    <ProWork projects={work.projects} />
                    <SocialMedia  />
                    <Blog  />
                    <ContactMe  />
                </Col>
            </Row>
        )
    }
}
export default Body;
