import React, {PureComponent} from "react";

function withRenderTime(WrappedComponent) {
    return class extends PureComponent {
        // 即将渲染获取事件，beginTime
        UNSAFE_componentWillMount() {
            this.beginTime = Date.now();
        }

        // 渲染完成再获取时间：endTime
        componentDidMount() {
            this.endTime = Date.now();

            const interval = this.endTime - this.beginTime;
            console.log(`${WrappedComponent.name}渲染时间：${interval}`);
        }

        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }
}

class Home extends PureComponent {
    render() {
        return (
            <div>Home</div>
        );
    }
}

class About extends PureComponent {
    render() {
        return (
            <div>About1</div>
        );
    }
}

const TimeHome = withRenderTime(Home);
const TimeAbout = withRenderTime(About);

class App extends PureComponent {
    render() {
        return (
            <div>
                <TimeHome/>
                <TimeAbout/>
            </div>
        );
    }
}

export default App;
