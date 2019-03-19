import React from 'react';
import moment from "moment";

class Weeklydate extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}

	handlerSelectDate = (key) => {
		this.props.onSelectDate(key)
	}
	render() {

		let suggestTimes = ''
		let oneweeksTimes = ''

		if (this.props.will_pick_manual) {

			oneweeksTimes = this.props.availableDateTime.map((dateItem, key) => {

				let currentDate = dateItem.date
				return <div className="fraction js-day-wrapper available" key={key} onClick={e => this.handlerSelectDate(key)}>
							<div className="day js-show-picker">
								<div>
									<strong className="shorthand">{moment(currentDate).format('ddd')}</strong>
								</div>
								<div>
									<div className="muted shorthand">{moment(currentDate).format('MMM DD')}</div>
								</div>
								<i className="icon-arrow-right"></i>
							</div>
						</div>
			})
		}else {//sugestion
			suggestTimes = this.props.suggestDates.map((dateItem, key) => {

				return <div className="fraction js-day-wrapper available"  key={key}  onClick={e => this.handlerSelectDate(key)}>
							<div className="day js-show-picker">
								<div>
									<strong className="shorthand">{moment(dateItem).format('MMM DD')}</strong>
								</div>
								<div>
									<div className="muted shorthand">{moment(dateItem).format('hh:mm')}</div>
								</div>
								<i className="icon-arrow-right"></i>
							</div>
						</div>
			})
		}

		return (
			<div className="wrapper">

				<div className="js-days-region mvl">
					<div className="week-view">
						
							{ this.props.will_pick_manual ?
								<h2 className="mbl text-center">Select a Date</h2>
								:
								<h2 className="mbl text-center">Suggested Time</h2>
							}
						<div className="js-days-region">
							<div className="period row">
								<span className="icon-angle-left disabled" data-nav="previous" style={{visibility: 'visible'}}></span>
								<span className="icon-angle-right" data-nav="next" style={{visibility: 'visible'}}></span>
								<div className="centered js-days-body">
									{/* <div className="fraction js-day-wrapper unavailable">
										<div className="today">– Today –</div>
										<div className="day js-show-picker">
											<div>
												<strong className="shorthand">Wed</strong>
												<strong className="full">Wednesday</strong>
											</div>
											<div>
												<div className="muted shorthand">Feb 6</div>
												<div className="full muted">February 6, 2019</div>
											</div>
											<i className="icon-arrow-right"></i>
										</div>
										<span className="status">unavailable</span>
									</div> */}

									{ this.props.will_pick_manual ?
										oneweeksTimes
										:
										suggestTimes
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
        }
    }
    export default Weeklydate