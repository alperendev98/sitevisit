/**
 * Instance Management Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form, FormGroup, Label, Input 
} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { NotificationManager } from 'react-notifications';

// delete confirmation dialog
import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';

// add new instance form
import AddNewInstanceForm from './AddNewInstanceForm';

// update instance form
import UpdateInstanceForm from './UpdateInstanceForm';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

export default class Setting extends Component {

	state = {
		all: false,
		
		selectedInstance: null, // selected instance to perform operations
		loading: false, // loading activity
		addNewInstanceModal: false, // add new instance form modal
		addNewInstanceDetail: {
			name: '',
			address: '',
			username: '',
			password: '',
		},
		openViewInstanceDialog: false, // view instance dialog box
		editInstance: null,
		allSelected: false,
		selectedInstances: 0,

		close_distance: 10,
		far_distance: 50,
		earlist_time: '9:00',
		latest_time: '16:30',
		looking_date: 5,

	}

	componentDidMount() {
		this.props.loadSalespersons()
		this.props.loadGlobalSetting()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.global) {
			
			this.setState({
				close_distance : nextProps.global.close_distance,
				far_distance : nextProps.global.far_distance,
				earlist_time : nextProps.global.earlist_time,
				latest_time : nextProps.global.latest_time,
				looking_date : nextProps.global.looking_date,
			})

		}
	}
	/**
	 * On Delete
	 */
	onDelete(data) {
		this.refs.deleteConfirmationDialog.open();
		this.setState({ selectedInstance: data });
	}

	/**
	 * Delete Instance Permanently
	 */
	deleteInstancePermanently() {
		const { selectedInstance } = this.state;
		this.props.deleteSalesperson(selectedInstance.sp_pk)
	}

	/**
	 * Open Add New Instance Modal
	 */
	opnAddNewInstanceModal() {
		this.setState({ addNewInstanceModal: true });
	}

	/**
	 * On Reload
	 */
	onReload() {
		console.log('ttt1')
		this.props.loadSalespersons()
		this.props.loadGlobalSetting()
	}

	/**
	 * On Select Instance
	 */
	onSelectInstance(instance) {
		instance.checked = !instance.checked;
		let selectedInstances = 0;
		let instances = this.state.instances.map(instanceData => {
			if (instanceData.checked) {
				selectedInstances++;
			}
			if (instanceData.id === instance.id) {
				if (instanceData.checked) {
					selectedInstances++;
				}
				return instance;
			} else {
				return instanceData;
			}
		});
		this.setState({ instances, selectedInstances });
	}

	/**
	 * On Change Add New Instance Details
	 */
	onChangeAddNewInstanceDetails(key, value) {
		this.setState({
			addNewInstanceDetail: {
				...this.state.addNewInstanceDetail,
				[key]: value
			}
		});
	}

	onChangeGlobal(key, value) {
		this.setState({
			[key]: value
		});
	}
	

	/**
	 * Add New Instance
	 */
	addNewInstance() {
		const { name, email, phone, s_address, f_address } = this.state.addNewInstanceDetail;
		if (name !== '' && email !== '' && phone !== '' && s_address !== '' && f_address !== '') {
			this.props.addSalesperson(this.state.addNewInstanceDetail)	
		}
		this.setState({ addNewInstanceModal: false });
	}

	/**
	 * View Instance Detail Hanlder
	 */
	viewInstanceDetail(data) {
		this.setState({ openViewInstanceDialog: true, selectedInstance: data });
	}

	/**
	 * On Edit Instance
	 */
	oneditInstance(instance) {
		this.setState({ addNewInstanceModal: true, editInstance: instance });
	}

	/**
	 * On Add & Update Instance Modal Close
	 */
	onAddUpdateIntanceModalClose() {
		this.setState({ addNewInstanceModal: false, editInstance: null })
	}

	/**
	 * On Update Instance Details
	 */
	onUpdateInstanceDetails(key, value) {
		this.setState({
			editInstance: {
				...this.state.editInstance,
				[key]: value
			}
		});
	}

	setGeneralSetting = () => {
		let g_setting = {
			g_pk: this.props.global.g_pk,
			close_distance: this.state.close_distance, 
			far_distance: this.state.far_distance, 
			earlist_time: this.state.earlist_time, 
			latest_time: this.state.latest_time, 
			looking_date: this.state.looking_date,
		}
		this.props.updateGlobalSetting(g_setting)
	}
	/**
	 * Update Instance
	 */
	updateInstance() {
		const { editInstance } = this.state;
		let indexOfUpdateInstance = '';
		let instances = this.state.instances;
		for (let i = 0; i < instances.length; i++) {
			const instance = instances[i];
			if (instance.id === editInstance.id) {
				indexOfUpdateInstance = i
			}
		}
		instances[indexOfUpdateInstance] = editInstance;
		this.setState({ loading: true, editInstance: null, addNewInstanceModal: false });
		let self = this;
		setTimeout(() => {
			self.setState({ instances, loading: false }, localStorage.setItem('instances', JSON.stringify(instances)));
			NotificationManager.success('Instance Updated!');
		}, 1000);
	}

	//Select All instance
	onSelectAllInstance(e) {
		const { selectedInstances, instances } = this.state;
		let selectAll = selectedInstances < instances.length;
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
		const { instances, loading, selectedInstance, editInstance, selectedinstances } = this.state;
		return (
			<div className="user-management">
				<Helmet>
					<title>Site Visit Booking| Add Salesperson </title>
					<meta name="description" content="Site Visit BookingSettings" />
				</Helmet>
				<PageTitleBar
					title={<IntlMessages id="dashboard.Setting" />}
					match={this.props.match}
				/>
				<RctCollapsibleCard fullBlock>
					<Form className="p-10">
						<Label for="userName"><h2>Global Settings</h2></Label>
						<FormGroup>
								<Label for="userName">Close distance</Label>
								<Input
									type="text"
									name="userName"
									id="userName"
									placeholder="Close distance"
									value={this.state.close_distance}
									onChange={(e) => this.onChangeGlobal('close_distance', e.target.value)}
								/>
						</FormGroup>
						<FormGroup>
								<Label for="address">Far distance</Label>
								<Input
									type="email"
									name="address"
									id="address"
									placeholder="far distance"
									value={this.state.far_distance}
									onChange={(e) => this.onChangeGlobal('far_distance', e.target.value)}
								/>
						</FormGroup>
						<FormGroup>
								<Label for="username">Earlist Time</Label>
								<Input
									type="phone"
									name="username"
									id="username"
									placeholder=""
									value={this.state.earlist_time}
									onChange={(e) => this.onChangeGlobal('earlist_time', e.target.value)}
								/>
						</FormGroup>
						<FormGroup>
								<Label for="password">Latest Time</Label>
								<Input
									type="text"
									name="password"
									id="password"
									placeholder=""
									value={this.state.latest_time}
									onChange={(e) => this.onChangeGlobal('latest_time', e.target.value)}
								/>
						</FormGroup>
						<FormGroup>
								<Label for="password">Looking Days</Label>
								<Input
									type="text"
									name="password"
									id="password"
									placeholder=""
									value={this.state.looking_date}
									onChange={(e) => this.onChangeGlobal('looking_date', e.target.value)}
								/>
						</FormGroup>
						
						<Button  className="text-white btn-success" onClick={() => this.setGeneralSetting()}>Ok</Button>
					</Form>
				</RctCollapsibleCard>
				<RctCollapsibleCard fullBlock>

					<div className="table-responsive">
						<div className="d-flex justify-content-between py-20 px-10 border-bottom">
							<div className="d-flex">
								<Label for="userName"><h2>Sales Persons</h2></Label>
								<button onClick={() => this.onReload()} className="btn-outline-default mr-10 ml-10"><i className="ti-reload"></i></button>								
							</div>
							<div>
								<button onClick={() => this.opnAddNewInstanceModal()} color="primary" className="caret btn-sm mr-10">Add New Salesperson <i className="zmdi zmdi-plus"></i></button>
							</div>
						</div>
						<table className="table table-middle table-hover mb-0">
							<thead>
								<tr>
									<th className="w-5">
										<FormControlLabel
											control={
												<Checkbox
													indeterminate={selectedinstances > 0 && selectedinstances < instances.length}
													checked={selectedinstances > 0}
													onChange={(e) => this.onSelectAllInstance(e)}
													value="all"
													color="primary"
												/>
											}
											label="All"
										/>
									</th>
									<th>Name</th>
									<th>E-mail</th>
									<th>Phone</th>
									<th>Start Address</th>
									<th>Finish Address</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{this.props.salesperson && this.props.salesperson.map((instance, key) => (
									<tr key={instance.sp_pk}>
										<td>
											<FormControlLabel
												control={
													<Checkbox
														checked={instance.checked}
														onChange={() => this.onSelectInstance(instance)}
														color="primary"
													/>
												}
											/>
										</td>
										<td>{instance.name}</td>
										<td>{instance.email}</td>
										<td>{instance.phone}</td>
										<td>{instance.s_address}</td>
										<td>{instance.f_address}</td>
										
										<td className="list-action">
											{/* <div onClick={() => this.oneditInstance(instance)}><i className="ti-pencil"></i></div> */}
											<div onClick={() => this.onDelete(instance)}><i className="ti-close"></i></div>
										</td>
									</tr>
								))}
							</tbody>
							<tfoot className="border-top">
								
							</tfoot>
						</table>
					</div>
					{loading &&
						<RctSectionLoader />
					}
				</RctCollapsibleCard>
				<DeleteConfirmationDialog
					ref="deleteConfirmationDialog"
					title="Are You Sure Want To Delete?"
					message="This will delete Salesperson permanently."
					onConfirm={() => this.deleteInstancePermanently()}
				/>
				<Modal isOpen={this.state.addNewInstanceModal} toggle={() => this.onAddUpdateIntanceModalClose()}>
					<ModalHeader toggle={() => this.onAddUpdateIntanceModalClose()}>
						{editInstance === null ?
							'Add New Salesperson' : 'Update Salesperson'
						}
					</ModalHeader>
					<ModalBody>
						{editInstance === null ?
							<AddNewInstanceForm
								addNewInstanceDetails={this.state.addNewInstanceDetail}
								onChangeAddNewInstanceDetails={this.onChangeAddNewInstanceDetails.bind(this)}
							/>
							: <UpdateInstanceForm instance={editInstance} onUpdateInstanceDetail={this.onUpdateInstanceDetails.bind(this)} />
						}
					</ModalBody>
					<ModalFooter>
						{editInstance === null ?
							<Button  className="text-white btn-success" onClick={() => this.addNewInstance()}>Add</Button>
							: <Button  color="primary" className="text-white btn-success" onClick={() => this.updateInstance()}>Update</Button>
						}
						{' '}
						<Button  className="text-white btn-danger" onClick={() => this.onAddUpdateIntanceModalClose()}>Cancel</Button>
					</ModalFooter>
				</Modal>
				<Dialog
					onClose={() => this.setState({ openViewInstanceDialog: false })}
					open={this.state.openViewInstanceDialog}
				>
					<DialogContent>
						{selectedInstance !== null &&
							<div>
								<div className="clearfix d-flex">
									<div className="media pull-left">
										<img src={selectedInstance.avatar} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />
										<div className="media-body">
											<p>Name: <span className="fw-bold">{selectedInstance.name}</span></p>
											<p>E-mail: <span className="fw-bold">{selectedInstance.email}</span></p>
											<p>Phone: <span className="badge badge-warning">{selectedInstance.phone}</span></p>
											<p>Start Address: <span className={`badge ${selectedInstance.badgeClass} badge-pill`}>{selectedInstance.s_address}</span></p>
											<p>Finish Address: <span className={`badge ${selectedInstance.badgeClass} badge-pill`}>{selectedInstance.f_address}</span></p>
										</div>
									</div>
								</div>
							</div>
						}
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}
