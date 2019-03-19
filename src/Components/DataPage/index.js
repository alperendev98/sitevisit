/**
 * Data Table
 */
import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Timelist from './Timelist'
import Weeklydate from './Weeklydate'
import {history} from '../../history'
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class DataPage extends React.Component {
	constructor() {
		super()
		this.state = {
			address: '',
			selectedAddress: null,
			latLng: {},
			will_pick_manual: false,
			step: 0,
		}
	}

	handleChange = address => {
		this.setState({ address, step: 0 });
		this.props.clearTopAddress()
	};
 
	handleSelect = address => {
		this.setState({ address });
		geocodeByAddress(address)
		.then(results => getLatLng(results[0]))
		.then(latLng => this.findTopClosestAddress(latLng))
		.catch(error => console.error('Error', error));
	};

	findTopClosestAddress = latLng => {
		console.log(latLng)
		this.setState({ latLng })
		this.props.findTopClosestAddress(latLng.lat, latLng.lng)
	}

	selectSuggestAddress = address => {
		this.setState({step: 1, will_pick_manual:false})//address selected
		this.props.suggest3DateTime(address.group_key)
		this.setState({selectedAddress: address})
	}

	onSelectDate = key => {
		if (this.state.will_pick_manual) {
			this.setState({step: 2, selectedIndex: key})//date selected
		}else {
			this.onSelectTime(key)
		}
		
	}
	
	onSelectTime = key => {
				
		let initBooking = null
		if (this.state.will_pick_manual) {

			let selectedDate = this.props.availableDateTime[this.state.selectedIndex]

			let bookedTime = selectedDate.date
			let year = bookedTime.getFullYear()
			let month = bookedTime.getMonth()
			let date = bookedTime.getDate()

			let time = selectedDate.timelist[key].time
			let timeaar = time.split(":")
			let hour = timeaar[0]
			let minute = timeaar[1]

			let timeslot = new Date(year, month, date, hour, minute, 0, 0)
			
			initBooking = {
				pick_time: timeslot,
				address_name: this.state.address,
				latitude: this.state.latLng.lat,
				longitude: this.state.latLng.lng,
				group_key: this.state.selectedAddress.group_key
			}
		}else {
			initBooking = {
				pick_time: this.props.suggestDates[key],
				address_name: this.state.address,
				latitude: this.state.latLng.lat,
				longitude: this.state.latLng.lng,
				group_key: this.state.selectedAddress.group_key
			}
		}

		console.log(JSON.stringify(initBooking))

		this.props.setInitialBooking(initBooking)
		history.push('/app/dashboard/client-contact')
		
	}

	generateUUID = () => { // Public Domain/MIT
		var d = new Date().getTime();
		if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
			d += performance.now(); //use high-precision timer if available
		}
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
		});
	}
	render() {

		return (
			<div className="container-fluid">
				
				<div className="form-group">
					<PlacesAutocomplete
						value={this.state.address}
						onChange={this.handleChange}
						onSelect={this.handleSelect}
					>
						{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
							<div className="m-auto text-center">
								<input
									{...getInputProps({
										placeholder: 'Search Places ...',
										className: 'large-text',
									})}
								/>
								<div className="autocomplete-dropdown-container">
									{loading && <div>Loading...</div>}
									{suggestions.map(suggestion => {
										const className = suggestion.active
											? 'suggestion-item--active'
											: 'suggestion-item';
										// inline style for demonstration purpose
										const style = suggestion.active
											? { backgroundColor: '#fafafa', cursor: 'pointer' }
											: { backgroundColor: '#ffffff', cursor: 'pointer' };
										return (
											<div
												{...getSuggestionItemProps(suggestion, {
													className,
													style,
												})}
											>
												<span>{suggestion.description}</span>
											</div>
										);
									})}
								</div>
							</div>
						)}
					</PlacesAutocomplete>
				</div>

				<div className="closest-list">
					<List component="nav">
						
						{
							this.props.top3address && this.props.findAddress?
							this.props.top3address.length > 0 ?
								this.props.top3address.map((address, key) => {
									return <ListItem key={key} button onClick={e => this.selectSuggestAddress(address)}>
										<ListItemText primary={address.address_name + '(' + address.distance_in_km + 'km)'} />
									</ListItem>
								})
								:
								<button className="mr-10 mb-10 btn btn-primary" onClick={e => this.selectSuggestAddress({group_key: this.generateUUID()})}>There is no booking nearlest your site location</button>
							:
							''
						}
					</List>
				</div>

				{
					this.state.step >= 1 ?
					<div>
						<div className="m-auto text-center">
							<button className="mr-10 mb-10 btn btn-primary" onClick={e => this.setState({will_pick_manual: true})}>Pick another time</button>
							<button className="mr-10 mb-10 btn btn-success">OK</button>
						</div>
						<Weeklydate 
							suggestDates={this.props.suggestDates} 
							availableDateTime={this.props.availableDateTime} 
							onSelectDate={this.onSelectDate} 
							will_pick_manual={this.state.will_pick_manual} 
							show={this.state.step >= 1 ? true: false}
						/>
						
					</div>
					:''
				}

				{
					this.state.step >= 2 ?
					<Timelist selectedDate={this.props.availableDateTime[this.state.selectedIndex]} onSelectTime={this.onSelectTime}/>
					:
					''
				}
				
			</div>
		);
	}
}

export default DataPage;
