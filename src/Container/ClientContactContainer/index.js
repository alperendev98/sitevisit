import {connect} from 'react-redux';
import ClientContact from "Components/ClientContact";

// redux action 
import {
	postBook,
} from 'Actions'
// map state to props
const mapStateToProps = ({ authUser, allData }) => {
	const { user } = authUser;
	const { data, loading, initBooking } = allData
	return { user, data, loading, initBooking }
}

const ClientContactContainer = connect(mapStateToProps, {
	postBook,
})(ClientContact);

export default ClientContactContainer