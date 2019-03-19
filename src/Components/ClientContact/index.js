/**
 * Client Contact Page
 */
import React from 'react';
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';
import {history} from '../../history'
class ClientContact extends React.Component {
	state = {
		full_name: '',
		email: '',
		phone: '',
	}

	componentDidMount() {
		let booking = this.props.initBooking
		if (booking === null) {
			history.push('/')
			return
		}
	}
	handlerBook = () => {
		let booking = this.props.initBooking
		if (booking === null) {
			history.push('/')
			return
		}
		booking.full_name = this.state.full_name
		booking.email = this.state.email
		booking.phone = this.state.phone
		
		this.props.postBook(booking)
	}
	
	render() {

		return (
			<div className="container-fluid">
				<div className="solo">
					<div className="header">
  						<div className="js-profile-region">
						  	<div className="wrapper">
							  	<div className="icon-arrow-left js-step-back step-back">&nbsp;</div>
								<div className="title-wrapper">
									<div className="mbs phs popover-holder">
										<div className="increased popover-toggle silent disabled">
											Alperen Aksoy
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr className="mbl"/>
					<div className="wrapper">
						<div className="row">
							<div className="col-lg-12">
							<h2 className="mbm">Enter Details</h2>
						
								<div className="mt-10"><div>
									<div className="form-group">
										<label htmlFor="full_name">Full Name *</label>
										<input value={this.state.full_name} onChange={e => this.setState({full_name: e.target.value})} className="large-text form-control" type="text" name="full_name"/>
										<span data-error="full_name"></span>
									</div>
									<div className="form-group">
										<label htmlFor="email">Your e-mail address *</label>
										<input value={this.state.email} onChange={e => this.setState({email: e.target.value})}  className="large-text form-control" type="email" name="email"/>
										<span data-error="email"></span>
									</div>
									<div className="form-group">
										<label htmlFor="phonenumber">Your phone number *</label>
										<input value={this.state.phone} onChange={e => this.setState({phone: e.target.value})}  className="large-text form-control" type="text" name="phonenumber"/>
										<span data-error="phonenumber"></span>
									</div>
								</div></div>
								<div className="ptm">
								<button className="mr-10 mb-10 btn btn-primary" onClick={e=> this.handlerBook(e)}>BOOK</button>
								</div>
						
							</div>
						</div>
					</div>
				</div>
				{this.props.loading &&
					<RctSectionLoader />
				}
			</div>
		);
	}
}

export default ClientContact;
