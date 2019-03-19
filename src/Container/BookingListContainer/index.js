import {connect} from 'react-redux';
import BookingList from "Components/BookingList";

// redux action 
import {
	loadBookings,
} from 'Actions'

// map state to props
const mapStateToProps = ({ authUser, allData }) => {
	const { user } = authUser;
	const { data, loading, bookings } = allData
	return { user, data, loading, bookings }
}
const mapDispatchToProps = dispatch => {
    return {
		
		loadBookings: () => {
			dispatch(loadBookings())
		},		
    }
};

const BookingListContainer = connect(mapStateToProps, mapDispatchToProps)(BookingList);

export default BookingListContainer