import * as types from './types';

export function addItem(item) {
    return {
        type: types.ADD_ITEM,
        item
    };
}

export function addItems(items) {
    return {
        type: types.ADD_ITEMS,
        items
    };
}

export function removeItem(idx) {
    return {
        type: types.REMOVE_ITEM,
        idx
    };
}
