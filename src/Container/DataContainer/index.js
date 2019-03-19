import {connect} from 'react-redux';
import DataPage from "Components/DataPage";

// redux action 
import {
	findTopClosestAddress,
	clearTopAddress,
	suggest3DateTime,
	setInitialBooking,
} from 'Actions'

// map state to props
const mapStateToProps = ({ authUser, allData }) => {
	const { user } = authUser;
	const { top3address, loading, suggestDates, availableDateTime, findAddress } = allData
	return { user, top3address, loading, suggestDates, availableDateTime, findAddress }
}

const DataContainer = connect(mapStateToProps, {
	findTopClosestAddress,
	clearTopAddress,
	suggest3DateTime,
	setInitialBooking,
	
})(DataPage);

export default DataContainer