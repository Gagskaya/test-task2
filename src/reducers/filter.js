const initialState = {
    filterNameValue: ''
}

export const filter = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_NAME":
            return {
                ...state,
                filterNameValue: action.payload
            }
        default:
            return state;
    }
}