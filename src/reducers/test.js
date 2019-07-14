const testInitialState = {
    name: 'havt'
};
const testReducer = (state = testInitialState, action) => {
    switch (action.type) {
        case 'TEST':
            return state
        default:
            return state
    }
}

export default testReducer;