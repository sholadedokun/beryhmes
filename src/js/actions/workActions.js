import axios from "axios";

export function fetchBlog() {
  return function(dispatch) {
    /*
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some work to http://rest.learncode.academy/api/yourusername/work
    */
    axios.get("http://rest.learncode.academy/api/reacttest/work")
      .then((response) => {
        dispatch({type: "FETCH_BLOG_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_BLOG_REJECTED", payload: err})
      })
  }
}

export function fetchWork() {
    return function(dispatch) {
        dispatch({
            type: "FETCH_WORK_FULFILLED",
            payload:{
                title:'Daju Market Place',
                type:'Web Development',
                description:'An online B2B platform for industrial products',
                date:'March 2017',
                responsibilty:'Backend',
                technology:"Node, Express, Mongo, Mongoose"
            }
        })
    }
}

export function fetchExperiements() {
  return function(dispatch) {
    /*
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some work to http://rest.learncode.academy/api/yourusername/work
    */
    axios.get("http://rest.learncode.academy/api/reacttest/work")
      .then((response) => {
        dispatch({type: "FETCH_EXPERIMENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EXPERIMENTS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function contactPost(message) {

    return function(dispatch) {

      axios.post("http://rest.learncode.academy/api/reacttest/work", message)
        .then((response) => {
          dispatch({type: "POST_CONTACT", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "POST_CONTACT_REJECTED", payload: err})
        })
    }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
