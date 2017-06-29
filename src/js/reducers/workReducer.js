export default function reducer(state={
    projects: [
        {
            title:'Resolve',
            type:'Mobile Development',
            description:'A mobile App for reporting or whisle-blowing corrupt practises',
            date:'Feburary 2017',
            role:'Founder, Backend',
            technology:"Node, Express, Mongo, Mongoose"
        }
    ],
    blog: [
        {
            title:'',
            type:'',
            content:'',
            date:'',
            keyword:'',
            images:'',
            author:'',
            url:''
        }
    ],
    experiments:[
        {
            type:'',
            title:'',
            url:'',
            description:''
        }
    ],
    fetching: false,
    fetched: false,
    error: null,
  }, action){

    switch (action.type) {
        case "FETCH_BLOG": {
            return {...state, fetching: true}
        }
        case "FETCH_BLOG_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_BLOG_FULFILLED": {
            return {
              ...state,
              fetching: false,
              fetched: true,
              blog: action.payload,
            }
        }
        case "FETCH_WORK": {
            return {...state, fetching: true}
        }
        case "FETCH_WORK_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_WORK_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                projects: [
                    ...state.projects || [] ,
                    action.payload
                ]
            }
        }
        case "FETCH_EXPERIMENTS": {
            return {...state, fetching: true}
        }
        case "FETCH_EXPERIMENTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_EXPERIMENTS_FULFILLED": {
            return {
              ...state,
              fetching: false,
              fetched: true,
              WORK: action.payload,
            }
        }
        default:{}
    }

    return state
}
