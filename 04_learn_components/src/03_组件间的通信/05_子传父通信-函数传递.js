import React, {Component} from 'react'

class CounterButton extends Component {
    render() {
        const {onClick} = this.props;
        return (
            <button onClick={onClick}>+1</button>
        );
    }
}

// 类组件
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <CounterButton onClick={this.increment}/>
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }
}
