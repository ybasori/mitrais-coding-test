export const authEmailUniqueInitialState = {
    isLoading: false,
    data: null,
    error: null
};

export const authEmailUniqueReducer = (state, action) => {
    switch(action.type){
        case "AUTH_EMAIL_UNIQUE_STARTED":
            return {
                isLoading: true,
                data: null,
                error: null
            }
        case "AUTH_EMAIL_UNIQUE_SUCCESS":
            return {
                isLoading: false,
                data: action.payload,
                error: null
            }
        case "AUTH_EMAIL_UNIQUE_FAILURE":
            return {
                isLoading: false,
                data: null,
                error: action.payload
            }
        case "AUTH_EMAIL_UNIQUE_RESET":
            return {
                isLoading: false,
                data: null,
                error: null
            }
        default:
            return state;
    }
}