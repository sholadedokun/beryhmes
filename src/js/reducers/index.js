import { combineReducers } from "redux"

import work from "./workReducer"
import user from "./userReducer"

export default combineReducers({
  work,
  user,
})
