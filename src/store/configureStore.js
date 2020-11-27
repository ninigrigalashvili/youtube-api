import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import VideosReducer from './videos/videos.reducer';
import FavouritesReducer from './favourites/favourites.reducer';

const componentEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Store creation
const configureStore = () => {
    const store = createStore(
        combineReducers({
             VideosReducer,
             FavouritesReducer
        }),
        componentEnhancers(applyMiddleware(thunk))
    );
    return store;
}

export default configureStore;