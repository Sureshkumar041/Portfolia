import { USER_DETAILS } from "../actions/userAction";

const initialState = {
    userDetails: undefined
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload
            };
        default:
            return state;
    }
};