export default function reducer(state={
    user: {
        id: null,
        name: null,
        age: null,
        ProImages:null,
        ProDescription:{
            title:'',
            text:''
        },
        ProRandom:[
            {
                type:'Made-up Stats', //thought, I said, passionate, believe,
                url:'',
                Number:2013,
                title:'Coffee Drank',
                Icon:'',
                description:''
            }
        ],
        social:{

        }

    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER_FULFILLED": {

        return {
            ...state,
            user:{
                ...state.user,
                name: action.payload.name,
                age: action.payload.age,
                ProDescription: action.payload.ProDescription,
                ProRandom:[ ...state.user.ProRandom,  action.payload.ProRandom]
            },
            fetching: true,

        }
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    //   case "FETCH_USER_FULFILLED": {
    //     return {
    //       ...state,
    //       fetching: false,
    //       fetched: true,
    //       user: action.payload,
    //     }
    //   }
      case "FETCH_IMAGE_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_IMAGES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user:{...state.user, ProImages: action.payload},
        }
      }
      case "SET_USER_NAME": {
        return {
          ...state,
          user: {...state.user, name: action.payload},
        }
      }
      case "SET_USER_AGE": {
        return {
          ...state,
          user: {...state.user, age: action.payload},
        }
      }
      default:{}
    }

    return state
}
