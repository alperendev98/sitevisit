import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import {connect} from 'react-redux';

import {
    AsyncSettingComponent,
    AsyncBookingListComponent,
    AsyncClientComponent,
    DataComponent
} from "Components/AsyncComponent/AsyncComponent"

class Dashboard extends Component {

    render() {
        const { location, match, user  } = this.props;
        
		if (location.pathname === `${match.url}` && user && user.isAdmin) {
			return (<Redirect to={'/app/dashboard/admin'} />);			
		}
        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Dashboard</title>
                    <meta name="description" content="Site Visit BookingDashboard" />
                </Helmet>
                <Switch>
                    <Route exact path={`${match.url}/`} component={DataComponent} />
                    <Route path={`${match.url}/setting`} component={AsyncSettingComponent} />
                    <Route path={`${match.url}/admin`} component={AsyncBookingListComponent} />
                    <Route path={`${match.url}/client-contact`} component={AsyncClientComponent} />
                    
                </Switch>
            </div>
        )
    }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
	const { user } = authUser;
	return { user }
}

const DashboardContainer = connect(mapStateToProps, {
	
})(Dashboard);

export default DashboardContainer

