import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';
import $ from 'jquery';
class Projects extends Component{
    constructor(props){
        super(props);
        this.state={projects:props.projects, currentProject:0}
        this.projectMove=this.projectMove.bind(this)
    }
    componentDidMount(){
        let self=this;
        $('.arrow').click(function(){
            let movable=$(this).parent().find('.moveAnimated')
            movable.removeClass('widget_animation_start_1').addClass('widget_animation_end_1');
            setTimeout(function(){
                self.projectMove($(this).attr('name'))
                setTimeout(function(){
                    movable.removeClass('widget_animation_end_1').addClass('widget_animation_start_1')
                },300)
            }, 500)
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({projects:nextProps.projects})
    }

    projectMove(action){
        console.log(action)
        if(action=='next'){
            if(this.state.currentProject<this.state.projects.length - 1) this.setState((prevState)=>({currentProject:prevState.currentProject +1}))
            else  this.setState({currentProject:0})
        }
        else{
            if(this.state.currentProject>0) this.setState((prevState)=>({currentProject:prevState.currentProject-1}));
            else this.setState((prevState)=>({currentProject:prevState.projects.length -1}));
        }
    }
    render(){
        let displayProject;
        if(this.state.projects.length >0){
            displayProject= <Col className="nop" xs={12}>
                <h5>{this.state.projects[this.state.currentProject].type}</h5>
                <div className="project_title">{this.state.projects[this.state.currentProject].title}</div>
                <p>{this.state.projects[this.state.currentProject].description}</p>
            </Col>
        }
        return (

            <section id="music" className="wrapper style3 special">
                <div className="inner">
                    <header>
                        <h2>Lastest Music</h2>
                        <p>{displayProject}</p>
                    </header>
                    <footer>
                        <ul className="actions">
                            <li><a href="#" className="button big">View Details</a></li>
                        </ul>
                    </footer>
                </div>
                <span className="arrow_left arrow fa fa-angle-left" name="previous"></span>
                <span className="arrow_right arrow fa fa-angle-right" name="next"></span>
            </section>

        )
    }
}
export default Projects;
