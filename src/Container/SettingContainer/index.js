import {connect} from 'react-redux';
import Setting from "Components/Setting";

// redux action 
import {
	loadGlobalSetting,
	loadSalespersons,
	addSalesperson,
	deleteSalesperson,
	updateGlobalSetting,
	clearTopAddress,
} from 'Actions'

// map state to props
const mapStateToProps = ({ authUser, allData }) => {
	const { user } = authUser;
	const { data, loading, salesperson, global } = allData
	return { user, data, loading, global, salesperson }
}
const mapDispatchToProps = dispatch => {
    return {
		clearTopAddress,
		loadGlobalSetting: () => {
			dispatch(loadGlobalSetting())
		},

		loadSalespersons: () => {
			dispatch(loadSalespersons())
		},
		addSalesperson: (salesperson) => {
			dispatch(addSalesperson(salesperson))
		},
		
		deleteSalesperson: (sp_pk) => {
			dispatch(deleteSalesperson(sp_pk))
		},
		updateGlobalSetting: (g_setting) => {
			dispatch(updateGlobalSetting(g_setting))
		},
		
    }
};

const SettingContainer = connect(mapStateToProps, mapDispatchToProps)(Setting);

export default SettingContainer