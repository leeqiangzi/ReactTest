import React, {Component} from 'react'

class Cpn extends Component{
    render() {
        return (
            <h2>我是cpn组件</h2>
        );
    }

    componentWillMount() {
        console.log('调用了Cpn组件的componentWillMount方法');
    }
}

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            isShow: true,
        }

        console.log('执行了组件的constructor方法');
    }

    render() {
        console.log('执行了组件的render方法');
        return (
            <div>
                <span>我是app组件</span>
                <h2>当前计数{this.state.counter}</h2>
                <button onClick={() => this.increment()}>+1</button>
                <hr/>

                <button onClick={() => this.changeCpnShow()}>切换</button>
                {this.state.isShow && <Cpn/>}
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    changeCpnShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }


    componentDidMount() {
        console.log('执行了组件的componentDidMount方法');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('执行了组件的componentDidUpdate方法');
    }

    getDer

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    // }
}
