import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const item = (state = [], action) => {
    switch(action.type) {
        case types.ADD_ITEM:
            return state.concat({
                name: action.name,
                url: action.url
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    item,
    routing
});

export default rootReducer;
