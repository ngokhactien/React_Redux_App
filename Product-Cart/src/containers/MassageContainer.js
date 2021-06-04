import  { connect } from 'react-redux';
import Massage from '../components/Massage';
import PropTypes from 'prop-types';

function MassageContainer ( props) { 
    var { massage } = props ;
    return (
        <Massage  massage = { massage }></Massage>
    );
};

MassageContainer.propTypes = {
    massage : PropTypes.string.isRequired
};

const mapStatetoProps = state =>{
    return{
        massage : state.massage
    }

} 

export default connect(mapStatetoProps, null) (MassageContainer);
