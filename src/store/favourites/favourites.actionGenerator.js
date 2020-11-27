import * as types from './favourites.actionTypes';

export function addToFavourites(id) {
    return {
        type: types.ADD_TO_FAVOURITES,
        payload: {
            id
        }
    }
}


export function removeFromFavourites(id) {
    return {
        type: types.REMOVE_FROM_FAVOURITES,
        payload: {
            id
        }
    }
}
