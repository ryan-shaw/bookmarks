import * as types from './types';

export function addItem(item) {
    return {
        type: types.ADD_ITEM,
        item
    };
}

export function removeItem(idx) {
    return {
        type: types.REMOVE_ITEM,
        idx
    };
}
