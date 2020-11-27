import { addToFavourites, removeFromFavourites } from './favourites.actionGenerator';

export const AddToFavourites = (id) => {
    return (dispatch) => {
        dispatch(addToFavourites(id))
    }
}

export const RemoveFromFavourites = (id) => {
    return (dispatch) => {
        dispatch(removeFromFavourites(id))
    }
}
