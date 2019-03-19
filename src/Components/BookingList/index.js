/**
 * Instance Management Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import MUIDataTable from "mui-datatables"
import {
	Label,
} from 'reactstrap';

// delete confirmation dialog
// import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

export default class BookingList extends Component {

	state = {
		all: false,
		
		selectedBooking: null, // selected instance to perform operations
		loading: false, // loading activity
	
		selectedBookings: 0,

	}

	componentDidMount() {
		this.props.loadBookings()
	}

	/**
	 * On Delete
	 */
	onDelete(data) {
		this.refs.deleteConfirmationDialog.open();
		this.setState({ selectedBooking: data });
	}

	/**
	 * Delete Instance Permanently
	 */
	deleteInstancePermanently() {
		const { selectedBooking } = this.state;
		this.props.deleteSalesperson(selectedBooking.sp_pk)
	}

	/**
	 * On Reload
	 */
	onReload() {
		this.props.loadBookings()
	}

	/**
	 * On Select Instance
	 */
	onSelectInstance(booking) {
		booking.checked = !booking.checked;
		let selectedBookings = 0;
		let bookings = this.state.instances.map(instanceData => {
			if (instanceData.checked) {
				selectedBookings++;
			}
			if (instanceData.id === booking.id) {
				if (instanceData.checked) {
					selectedBookings++;
				}
				return booking;
			} else {
				return instanceData;
			}
		});
		this.setState({ bookings, selectedBookings });
	}

	//Select All instance
	onSelectAllInstance(e) {
		const { selectedBookings, instances } = this.state;
		let selectAll = selectedBookings < instances.length;
		if (selectAll) {
			let selectAllInstances = instances.map(instance => {
				instance.checked = true
				return instance
			});
			this.setState({ instances: selectAllInstances, selectedinstances: selectAllInstances.length })
		} else {
			let unselectedInstances = instances.map(instance => {
				instance.checked = false
				return instance;
			});
			this.setState({ selectedInstances: 0, instances: unselectedInstances });
		}
	}

	render() {
		const { loading } = this.state;

		const options = {
			filterType: 'dropdown',
			fixedHeader: false,
			responsive: 'scroll',
			print: false,
			download: false,
		
		};

		const columns = [
			{
				name: "ID",
				options: {
					filter: false,
					display: false,
					sort: true,
				}
			},
			{
				name: "Full Name",
				options: {
					filter: false,
					display: true,
					sort: true,
				}
			},
			{
				name: "E-mail",
				options: {
					filter: false,
					display: true,
					sort: true,
				}
			},
			{
				name: "Phone Number",
				options: {
					filter: false,
					display: true,
					sort: true,
				}
			},
			{
				name: "Booking Time",
				options: {
					filter: false,
					display: true,
					sort: true,
				}
			},
			{
				name: "Site Visit Address",
				options: {
					filter: false,
					display: true,
					sort: true,
				}
			},
			{
				name: "Latitude",
				options: {
					filter: false,
					display: false,
					sort: true,
				}
			},
			{
				name: "Longitude",
				options: {
					filter: false,
					display: false,
					sort: true,
				}
			},
			{
				name: "Group",
				options: {
					filter: true,
					display: false,
					sort: true,
				}
			},
		];

		return (
			<div className="user-management">
				<Helmet>
					<title>Site Visit Booking| Booking List </title>
					<meta name="description" content="Site Visit Booking List" />
				</Helmet>
				<PageTitleBar
					title='Booking List'
					match={this.props.match}
				/>
				
				<RctCollapsibleCard fullBlock>

					<div className="table-responsive">

					{this.props.bookings ? <MUIDataTable
						title={this.state.currentType}
						data={this.props.bookings}
						columns={columns}
						options={options}
					/> : ''}

					</div>
					{loading &&
						<RctSectionLoader />
					}
				</RctCollapsibleCard>
				{/* <DeleteConfirmationDialog
					ref="deleteConfirmationDialog"
					title="Are You Sure Want To Delete?"
					message="This will delete Salesperson permanently."
					onConfirm={() => this.deleteInstancePermanently()}
				/> */}
				
			</div>
		);
	}
}
