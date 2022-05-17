import store from './store/index.js';
import {addAction, subAction} from './store/actionCreator.js'

store.subscribe(() => {
    console.log(store.getState().counter);
})

// 1、基本使用
// store.dispatch(addAction(20))
// store.dispatch(subAction(15))

// 2、优化
// function dispatchAndLogging(action) {
//     console.log('dispatch前', action);
//     store.dispatch(action)
//     console.log('dispatch后', store.getState());
// }
//
// dispatchAndLogging(addAction(20));
// dispatchAndLogging(subAction(15));


// 3、函数的基础至上进行优化：修改原油的dispatch
// hack技术：monkeyingpatch
// const next = store.dispatch;
//
// function dispatchAndLogging(action) {
//     console.log('dispatch前 action', action);
//     next(action)
//     console.log('dispatch后 store', store.getState());
// }
//
// store.dispatch = dispatchAndLogging;
//
// store.dispatch(addAction(20));
// store.dispatch(subAction(15));


// 4、将之前的操作进行封装
export function patchLogging(store) {
    const next = store.dispatch;

    function dispatchAndLogging(action) {
        console.log('dispatch前 action', action);
        next(action)
        console.log('dispatch后 store', store.getState());
    }

    // store.dispatch = dispatchAndLogging;
    return dispatchAndLogging;
}

// store.dispatch(addAction(20));
// store.dispatch(subAction(15));


// 5、封装patchThunk的功能
function patchThunk(store) {
    const next = store.dispatch;

    function dispatchAndThunk(action) {
        if (typeof action === 'function') {
            action(store.dispatch, store.getState());
        } else {
            next(action);
        }
    }

    // store.dispatch = dispatchAndThunk;
    return dispatchAndThunk;
}

patchLogging(store);
patchThunk(store);

// store.dispatch(addAction(20));
// store.dispatch(subAction(15));

// function foo(dispatch, getState) {
//     dispatch(subAction(10))
// }
//
// store.dispatch(foo);


// 6、封装applyMiddlewares
function applyMiddlewares(...middlewares) {
    middlewares.forEach(middleware => {
        store.dispatch = middleware(store);
    })
}

applyMiddlewares(patchLogging, patchThunk);
