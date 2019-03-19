/**
 * App Header
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import { history } from '../../history'
import HorizontalMenu from 'Components/HorizontalMenu/HorizontalMenu';
// actions
import { collapsedSidebarAction, logoutUser } from 'Actions';

class Header extends Component {

	state = {
		customizer: false,
		isMobileSearchFormVisible: false
	}

	// function to change the state of collapsed sidebar
	onToggleNavCollapsed = (event) => {
		const val = !this.props.navCollapsed;
		this.props.collapsedSidebarAction(val);
	}

	// open dashboard overlay
	openDashboardOverlay() {
		$('.dashboard-overlay').toggleClass('d-none');
		$('.dashboard-overlay').toggleClass('show');
		if ($('.dashboard-overlay').hasClass('show')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', '');
		}
	}

	// close dashboard overlay
	closeDashboardOverlay() {
		$('.dashboard-overlay').removeClass('show');
		$('.dashboard-overlay').addClass('d-none');
		$('body').css('overflow', '');
	}

	// toggle screen full
	toggleSignout = () => {
		this.props.logoutUser()
	}

	// mobile search form
	openMobileSearchForm() {
		this.setState({ isMobileSearchFormVisible: true });
	}

	handleSetting = () => {
		history.push('/app/dashboard/setting')
	}

	render() {
		$('body').click(function () {
			$('.dashboard-overlay').removeClass('show');
			$('.dashboard-overlay').addClass('d-none');
			$('body').css('overflow', '');
		});
		return (
			<AppBar position="static" className="rct-header">
				<Toolbar className="d-flex justify-content-between w-100 pl-0">
					<div className="d-flex align-items-center">
						<div className="site-logo">
							<Link to="/" className="logo-mini">
								<img src={require('assets/img/site-logo.png')} className="mr-15" alt="site logo" height="20px" />
							</Link>
							
						</div>
					
						<HorizontalMenu />
					
					</div>
					<ul className="navbar-right list-inline mb-0">
						
						{/* <LanguageProvider />
						<Notifications /> */}
						<li className="list-inline-item setting-icon">
							<Tooltip title="Settings" placement="bottom">
								<IconButton aria-label="settings" onClick={() => this.handleSetting()}>
									<i className="zmdi zmdi-settings"></i>
								</IconButton>
							</Tooltip>
						</li>
						<li className="list-inline-item">
							<Tooltip title="Logout" placement="bottom">
								<IconButton aria-label="settings" onClick={() => this.toggleSignout()}>
									<i className="zmdi zmdi-power"></i>
								</IconButton>
							</Tooltip>
						</li>
					</ul>
				</Toolbar>
				
			</AppBar>
		);
	}
}

// map state to props
const mapStateToProps = ({ settings }) => {
	return settings;
};

export default withRouter(connect(mapStateToProps, {
	collapsedSidebarAction,
	logoutUser,
})(Header));
