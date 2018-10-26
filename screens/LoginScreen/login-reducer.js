import { LOGIN_LOGIN, AUTHLOADING_LOGIN, ActionOutcomes } from "../../actions/constants";

const initailState = {
    user: {firstName:'', lastName:'', id:''},
    token: '',
};

export default (state = initailState, action) => {
    switch (action.type) {
        case LOGIN_LOGIN + ActionOutcomes.pending:
            return {...state};
        case LOGIN_LOGIN + ActionOutcomes.rejected:
            return {...state};
        case LOGIN_LOGIN + ActionOutcomes.fulfilled:
            return action.payload;

        case AUTHLOADING_LOGIN:
            return action.payload;


        default:
            return {...state};
    }
}