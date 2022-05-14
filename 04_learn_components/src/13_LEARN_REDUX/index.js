import store from './store/index.js';
import {addAction, subAction} from './store/actionCreator.js'

store.subscribe(() => {
    console.log(store.getState().counter);
})

store.dispatch(addAction(20))
store.dispatch(subAction(15))
