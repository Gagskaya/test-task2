const initialState = {
    filterNameValue: '',
    filterDistanceValue : ''
}

export const filter = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_NAME":
            return {
                ...state,
                filterNameValue: action.payload
            }
        case "FILTER_DISTANCE":
            return {
                ...state,
                filterDistanceValue: action.payload
            }
        default:
            return state;
    }
}