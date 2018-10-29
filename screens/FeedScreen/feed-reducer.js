import { FEED_GETFEED, AUTHLOADING_LOGIN, ActionOutcomes } from "../../actions/constants";

const initailState = {
    feed: []
};

export default (state = initailState, action) => {
    switch (action.type) {
        case FEED_GETFEED + ActionOutcomes.pending:
            return {...state};
        case FEED_GETFEED + ActionOutcomes.rejected:
            return {...state};
        case FEED_GETFEED + ActionOutcomes.fulfilled:
            return action.payload.data;

        default:
            return {...state};
    }
}