import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const item = (state, action) => {
    switch(action.type) {
        case types.ADD_ITEM:
            return {
                name: action.item.name,
                url: action.item.url
            };
        default:
            return state;
    }
};

const items = (state = [], action) => {
    switch(action.type) {
        case types.ADD_ITEM:
            return [
                ...state,
                item(undefined, action)
            ];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    items,
    routing
});

export default rootReducer;
