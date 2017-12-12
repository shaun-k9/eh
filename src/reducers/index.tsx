import { combineReducers } from 'redux';



function router(state = { pathname: '/' }, action: any) {
    switch (action.type) {
      case 'UPDATE_ROUTER_STATE':
        return action.state
      default:
        return state
    }
}

const rootReducer = combineReducers({
    router
});
  
export default rootReducer;