import React, {PureComponent} from "react";


class Home extends PureComponent {

    // 即将渲染获取事件，beginTime
    UNSAFE_componentWillMount() {
        this.beginTime = Date.now();
    }

    render() {
        return (
            <div>Home</div>
        );
    }

    // 渲染完成再获取时间：endTime
    componentDidMount() {
        this.endTime = Date.now();

        const interval = this.endTime - this.beginTime;
        console.log(`渲染时间：${interval}`);
    }
}

class About extends PureComponent {
    render() {
        return (
            <div>About1</div>
        );
    }
}

class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        );
    }
}

export default App;
