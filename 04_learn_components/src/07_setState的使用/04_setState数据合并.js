import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'xxx',
            name: 'codewhy'
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.state.message}</h2>
                <h2>当前计数：{this.state.name}</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
            </div>
        );
    }

    changeText() {
        this.setState({
            message: '你好强子',
        });
    }
}
