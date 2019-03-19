/**
 * Pages Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncBlankComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Pages = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/blank`} />
            <Route path={`${match.url}/blank`} component={AsyncBlankComponent} />
        </Switch>
    </div>
);

export default Pages;
