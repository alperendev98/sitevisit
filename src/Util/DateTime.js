export const suggest3AvailableDateTime = (alltime) => {

	let suggest3DateTime = []
	for (var i = 0 ; i< alltime.length; i++) {
		let datelist = alltime[i]
		let bookedTime = datelist.date
		for (let j = 0; j < datelist.timelist.length; j++) {
			let timeItem = datelist.timelist[j]
			if (timeItem.type === 0) {

				let time = timeItem.time

				let year = bookedTime.getFullYear()
				let month = bookedTime.getMonth()
				let date = bookedTime.getDate()

				let timeaar = time.split(":")
				let hour = timeaar[0]
				let minute = timeaar[1]

				let timeslot = new Date(year, month, date, hour, minute, 0, 0)
				
				console.log('---time----' + timeslot)
				suggest3DateTime.push(timeslot)

				if (suggest3DateTime.length === 3) {
					return suggest3DateTime
				}
			}
		}
	}

	return suggest3DateTime
}
export const oneWeekAvailableDateTime = (data) => {
	let availableDates = []
	let endDate= new Date()
	let noOfDaysToAdd = 7, count = 0;

	while (count < noOfDaysToAdd) {
		
		// Date.getDay() gives weekday starting from 0(Sunday) to
		// 6(Saturday)
		if (endDate.getDay() !== 0 && endDate.getDay() !== 6 && !isHoliday(endDate)) {
			let d = new Date()
			d.setTime(endDate.getTime())
			availableDates[count] = d
			count++;
		}

		endDate.setDate(endDate.getDate() + 1)
	
	}
	

	let availableDateTime = []
	for (var i = 0 ; i< availableDates.length; i++) {
		availableDateTime[i] = {}
		availableDateTime[i].date = availableDates[i]

		availableDateTime[i].timelist = []

		let j = 0
		while(j < possibleTime.length) {
			
			availableDateTime[i].timelist[j] = {}
			availableDateTime[i].timelist[j].time = possibleTime[j]

			let bookedType = isBookedAlready(possibleTime[j], availableDates[i], data)
			if (bookedType === 1) {//picked time
				availableDateTime[i].timelist[j].booked = true
				availableDateTime[i].timelist[j].type = 1
			}else if (bookedType === 2) {//meeting time
				availableDateTime[i].timelist[j].booked = true
				availableDateTime[i].timelist[j].type = 2
			}else if (bookedType === 3) {//travling time
				availableDateTime[i].timelist[j].booked = true
				availableDateTime[i].timelist[j].type = 3
			}else if (bookedType === 4) {//not pickable because of next one
				availableDateTime[i].timelist[j].booked = true
				availableDateTime[i].timelist[j].type = 4
			}else {
				availableDateTime[i].timelist[j].booked = false
				availableDateTime[i].timelist[j].type = 0
			}
			j++

		}
	}
	return availableDateTime
}

const possibleTime = [
	'9:00',
	'9:15',
	'9:30',
	'9:45',
	'10:00',
	'10:15',
	'10:30',
	'10:45',
	'11:00',
	'11:15',
	'11:30',
	'11:45',
	'12:00',
	'12:15',
	'12:30',
	'12:45',
	'13:00',
	'13:15',
	'13:30',
	'13:45',
	'14:00',
	'14:15',
	'14:30',
	'14:45',
	'15:00',
	'15:15',
	'15:30',
	'15:45',
	'16:00',
]
const isHoliday = (dt) => {

	var holiday = [];
	holiday.push([1, 1])
	holiday.push([1, 9])
	holiday.push([1, 28])
	holiday.push([2, 11])
	holiday.push([2, 27])
	holiday.push([3, 4])
	holiday.push([3, 5])
	holiday.push([3, 11])
	holiday.push([4, 19])
	holiday.push([4, 20])
	holiday.push([4, 21])
	holiday.push([4, 22])
	holiday.push([4, 23])
	holiday.push([4, 25])
	holiday.push([5, 3])
	holiday.push([5, 6])
	holiday.push([5, 27])
	holiday.push([6, 3])
	holiday.push([6, 10])
	holiday.push([6, 28])
	holiday.push([7, 5])
	holiday.push([7, 12])
	holiday.push([7, 19])
	holiday.push([7, 26])
	holiday.push([8, 5])
	holiday.push([8, 14])
	holiday.push([8, 27])
	holiday.push([9, 30])
	holiday.push([10, 4])
	holiday.push([10, 7])
	holiday.push([10, 10])
	holiday.push([10, 18])
	holiday.push([10, 24])
	holiday.push([11, 4])
	holiday.push([11, 5])
	holiday.push([11, 29])
	holiday.push([12, 24])
	holiday.push([12, 25])
	holiday.push([12, 26])
	holiday.push([12, 31])

    for ( var i = 0; i < holiday.length; i++) {
        if (compare(dt, holiday[i])) { //If days are not holidays
            return true
        }
    }
    return false;
}

const compare = (dt1, dt2) => {
    var equal = false;
    if(dt1.getDate() === dt2[1] && dt1.getMonth() + 1 === dt2[0]) {
        equal = true;
    }
    return equal;
}

const isBookedAlready = (time, date, bookData) => {

	// console.log('bookData' + bookData)
	// console.log('compaire date' + date)

	for (var i =0 ; i < bookData.length ; i++) {
		let bookedTime = new Date(bookData[i].pick_time)
		// console.log('bookedTime' + bookedTime)
		if (date.getDate() === bookedTime.getDate()) {//same date, need to check the time

			
			let year = bookedTime.getFullYear()
			let month = bookedTime.getMonth()
			let date = bookedTime.getDate()

			let timeaar = time.split(":")
			let hour = timeaar[0]
			let minute = timeaar[1]

			let timeslot = new Date(year, month, date, hour, minute, 0, 0)
// console.log('timeslot' + timeslot)
			let diffTime = (bookedTime.getTime() - timeslot.getTime()) / 1000 / 60 //diff minute

			if (diffTime === 0) {//picked time
				return 1
			}else if (diffTime < 0 && diffTime >= -45) { // meeting time 
				return 2
			}else if (diffTime > 0 && diffTime <= 30) { // traveling time
				return 3
			}else if (diffTime > 30 && diffTime <= 75) { // no pickable because of next one
				return 4
			}
		}
	}

	return 0
}