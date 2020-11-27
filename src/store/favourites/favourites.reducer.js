import * as types from './favourites.actionTypes';


const FavouriteVideosReducerDefaultState = [];
export default (state = FavouriteVideosReducerDefaultState, action) => {
    switch (action.type) {
        case types.ADD_TO_FAVOURITES:
            return  [
                ...state,
                action.payload.id
            ]
        
        case types.REMOVE_FROM_FAVOURITES:
            return state.filter((id) => id !== action.payload.id)
        default:
            return state;
    }
}