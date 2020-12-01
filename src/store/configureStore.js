import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import VideosReducer from './videos/videos.reducer';
import FavouritesReducer from './favourites/favourites.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const favouritesPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['FavouritesReducer'] // only VideosReducer will be persisted
};

const rootReducer = combineReducers({
    VideosReducer,
    FavouritesReducer
})

const persistedReducer = persistReducer(favouritesPersistConfig, rootReducer)

const componentEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store creation
const configureStore = () => {
    const store = createStore(
        persistedReducer,
        componentEnhancers(applyMiddleware(thunk))
    );
    const persistor = persistStore(store)

    return { store, persistor };
}


export default configureStore;