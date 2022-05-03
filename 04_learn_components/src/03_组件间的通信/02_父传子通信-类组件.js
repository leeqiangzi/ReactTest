import React, {Component} from 'react'

class ChildCpn extends Component {
    render() {
        return (
            <div>
                <h2>子组件展示数据：{this.props.name}</h2>
            </div>
        )
    }
}

// 类组件
export default class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <ChildCpn name={'why'}/>
                <ChildCpn name={'copy'}/>
            </div>
        );
    }
}
