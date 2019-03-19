
import React from 'react';
import moment from "moment";

class Timelist extends React.Component {
	constructor() {
		super()
		this.state = {
			selectedIndex: -1
		}
	}

	hanlderSelectTime = () =>{
		this.props.onSelectTime(this.state.selectedIndex)
	} 

	render() {
		return (

		<div className="m-auto text-center">
			<ul className="spots m-auto">
			{
				
				this.props.selectedDate.timelist.map((timeItem, key) => {

					let time = timeItem.time
					let bookedTime = this.props.selectedDate.date
					let year = bookedTime.getFullYear()
					let month = bookedTime.getMonth()
					let date = bookedTime.getDate()

					let timeaar = time.split(":")
					let hour = timeaar[0]
					let minute = timeaar[1]

					let timeslot = new Date(year, month, date, hour, minute, 0, 0)
					
					let disabled = false
					let timeClass = 'spot collapsed'
					if (timeItem.type === 0) {
						disabled = false
						timeClass = timeClass + ' available'
					}else if (timeItem.type === 1) {
						disabled = true
						timeClass = timeClass + ' unavailable1'
					}else if (timeItem.type === 2) {
						disabled = true
						timeClass = timeClass + ' unavailable2'
					}else if (timeItem.type === 3) {
						disabled = true
						timeClass = timeClass + ' unavailable3'
					}else if (timeItem.type === 4) {
						disabled = true
						timeClass = timeClass + ' unavailable4'
					}

					if (this.state.selectedIndex === key) {
						timeClass = timeClass + ' selected'
					}

					return 	<li key={key} className={timeClass}>
								<button disabled={disabled} className="button js-select time-button" onClick={e=> this.setState({selectedIndex: key})}>{moment(timeslot).format('h:mm a')}</button>
								<button disabled={disabled} onClick={e=> this.hanlderSelectTime()} className="base button confirm-button js-confirm">Confirm</button>
							</li>
				})
			}
			</ul>
		</div>
		)
	}
}
export default Timelist