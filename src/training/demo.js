import { createStore } from 'redux';
import { status, sort } from './actions/index';

import myReducer from './reducers/index';

const store = createStore(myReducer);

console.log('Default: ' , store.getState());
// thực hiện công việc thay đổi status
// var action = { type: 'TOGGLE_STATUS' }
// store.dispatch(action);
store.dispatch(status());
console.log('TOGGLE STATUS: ' , store.getState());

// thực hiện công việc sắp xếp tên từ Z-A
// var sortAction = {
//     type: 'SORT',
//     sort: {
//         by: 'name',
//         value: -1
//     }
// }
// store.dispatch(sortAction);
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('SORT: ' , store.getState());