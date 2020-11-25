import React  from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import MainPage from '../pages/MainPage';
import SingleVideoPage from '../pages/SingleVideoPage';
import TrendingPage from '../pages/TrendingPage';
import NotFoundPage from '../pages/NotFoundPage';

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={MainPage} exact></Route>
                <Route path='/trending' component={TrendingPage}/>
                <Route path='/singleVideo' component={SingleVideoPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
    )  
}

export default AppRouter;