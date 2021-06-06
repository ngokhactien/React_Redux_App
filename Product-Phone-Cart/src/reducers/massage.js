import * as Types from './../constants/ActionType';
import * as Massage from './../constants/Massage';
const initialState = Massage.MSG_WELLCOME;

const massage = (state = initialState , action) => {
    switch(action.type){
        case Types.CHANGE_MASSAGE :
            return action.massage ;
        default : return state ;
    }
};


export default massage;