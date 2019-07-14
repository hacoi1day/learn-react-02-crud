var initialState = false;

var myReducer = (state = initialState, action) => {
    if(action.type === 'TOGGLE_STATUS') {
        return state = !state;
    }
    return state;
}

export default myReducer;