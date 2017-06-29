import axios from "axios";

export function fetchUser() {
    return function(dispatch) {
        dispatch({
            type: "FETCH_USER_FULFILLED",
            payload: {
                name: "Olushola Adedokun",
                age: 30,
                ProImages:null,
                ProDescription:{
                    title:'Whad Up,',
                    subtext:'and welcome to my digital Space.',
                    text:"My wall showcase my work, my thoughts and what I'm passionate about. If you like what I do, feel free to pin your thought on my wall."
                },
                ProRandom:

                        {
                            type:'Made-up Stats',
                            title:'Coca-Cola',
                            url:'',
                            stat:'4004',
                            description:'Bottles consumed since 2008'
                        }

            }
        })
    }
}

export function fetchImages() {
  return function(dispatch) {

    axios.get("https://api.gettyimages.com/v3/search/images?phrase=black young Man&minimum_size=medium&number_of_people=one&age_of_people=20-29_years&ethnicity=black&fields=display_set",{
      headers: { "Api-Key": "dy9732zcu3ujmjvzhkvd89nz" }})
      .then((response) => {
        let getUrlofImages=response.data.images.splice(0, 20).map((item)=>{
            return item.display_sizes[0].uri
        })
         dispatch({type: "FETCH_IMAGES_FULFILLED", payload: getUrlofImages})
      })
      .catch((err) => {
        dispatch({type: "FETCH_IMAGES_REJECTED", payload: err})
      })
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}
