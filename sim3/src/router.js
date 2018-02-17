import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AuthView from './Components/AuthView/AuthView';
import DashView from './Components/DashView/DashView';
import ProfileView from './Components/ProfileView/ProfileView';
import SearchView from './Components/SearchView/SearchView';

export default(
    <Switch>
        <Route component={AuthView} path='/auth'/>
        <Route component={DashView} exact path='/'/>
        <Route component={ProfileView} path='/profile'/>
        <Route component={SearchView} path='/search'/>
    </Switch>
)