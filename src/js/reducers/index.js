import { combineReducers } from "redux"

import work from "./workReducer"
import user from "./userReducer"
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  work,
  user,
  form: formReducer
})
