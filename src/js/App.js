import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Grid} from 'react-bootstrap';
import Header from './components/header';
import Body from './components/body';
import Intro from "./components/widget_intro";
import $ from 'jquery';
import { fetchUser, fetchImages } from "./actions/userActions";
import { fetchWork } from "./actions/workActions";

class App extends Component {
    componentDidMount() {
        $('.nav').mouseover(function(){
            $('.nav span').addClass('navSpanDeactivate')
            $('.nav span').eq(0).removeClass('navSpanDeactivate').addClass('navSpanActive270')
            $('.nav span').eq(1).removeClass('navSpanDeactivate').addClass('navSpanActive30')
        })
        $('.arrow_left').click(function(){
            // $(this).parent().find('')
        })
    }
    componentWillMount() {
      this.props.dispatch(fetchUser())
      this.props.dispatch(fetchWork())
    //   this.props.dispatch(fetchImages())
    }

    fetchBlog() {
      this.props.dispatch(fetchWork())
    }
    render() {
        const{user, work}=this.props;
        return (
            <Grid className="App-body" fluid={true}>
                {/* <Intro images={user} /> */}
                <Header />
                 <Body user={user} work={work} />
            </Grid>
        );
    }
}
const enhance = compose(
    connect((store) => {
      return {
        user: store.user.user,
        userFetched: store.user.fetched,
        work: store.work,
        workFetched: store.work.fetched,
      };
    })
)
export default enhance(App);
