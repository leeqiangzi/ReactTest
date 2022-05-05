import React, {Component} from 'react'

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            message: 'hello world'
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false; // 不会阻止第一次渲染
    }

    render() {
        console.log('App被调用');
        return (
            <div>
                <h2>当前计数{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    changeText() {
        this.setState({
            message: '你好，强子'
        })
    }
}
