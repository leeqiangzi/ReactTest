import React, {PureComponent} from "react";

// 定义一个高阶组件
function enhanceRegionProps(WarppedComponent) {
    return props => {
        return <WarppedComponent {...props} region={'中国'}/>
    }
}

class Home extends PureComponent {
    render() {
        return (
            <div>
                home{`昵称：${this.props.nickName} 等级：${this.props.level} 区域:${this.props.region}`}
            </div>
        );
    }
}

class About extends PureComponent {
    render() {
        return (
            <div>
                home{`昵称：${this.props.nickName} 等级：${this.props.level} 区域:${this.props.region}`}
            </div>
        );
    }
}

const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);

class App extends PureComponent {
    render() {
        return (
            <div>
                app
                <EnhanceHome nickname={'qiangzi'} level={90}/>
                <EnhanceAbout nickname={'qiangzi1'} level={901}/>
            </div>
        );
    }
}

export default App;
