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
        case types.REMOVE_ITEM:
            return {
                idx: action.idx
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
        case types.ADD_ITEMS:
            return action.map((i) => {
                return {
                    name: i.name,
                    url: i.url
                };
            });
        case types.REMOVE_ITEM:
            return state.filter( (e, i) => {
                return i !== action.idx;
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    items,
    routing
});

export default rootReducer;
