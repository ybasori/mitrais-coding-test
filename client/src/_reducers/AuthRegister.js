export const authRegisterInitialState = {
    isLoading: false,
    data: null,
    error: null
};

export const authRegisterReducer = (state, action) => {
    switch(action.type){
        case "AUTH_REGISTER_STARTED":
            return {
                isLoading: true,
                data: null,
                error: null
            }
        case "AUTH_REGISTER_SUCCESS":
            return {
                isLoading: false,
                data: action.payload,
                error: null
            }
        case "AUTH_REGISTER_FAILURE":
            return {
                isLoading: false,
                data: null,
                error: action.payload
            }
        case "AUTH_REGISTER_RESET":
            return {
                isLoading: false,
                data: null,
                error: null
            }
        default:
            return state;
    }
}