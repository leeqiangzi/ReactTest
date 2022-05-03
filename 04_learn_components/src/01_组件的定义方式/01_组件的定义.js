import React, {Component} from 'react'

// 类组件
// export default class App extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             message: '你好啊'
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <span>我是app组件</span>
//                 <h2>{this.state.message}</h2>
//             </div>
//         );
//     }
// }


// 函数式组件
export default function App() {
    return (
        <div>
            <span>我是function组件</span>
            <h2>你好啊</h2>
        </div>
    );
}
