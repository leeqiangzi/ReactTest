import React, {PureComponent, createContext} from "react";

// 定义一个高阶组件
function withUser(WrappedComponent) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <WrappedComponent {...props} {...user}/>
                        );
                    }
                }
            </UserContext.Consumer>
        );
    }
}

// 创建Context
const UserContext = createContext({
    nickname: '默认',
    level: -1,
    region: '区域'
})

class Home extends PureComponent {
    render() {
        return (
            <h2>
                Home {`昵称：${this.props.nickName} 等级：${this.props.level} 区域:${this.props.region}`}
            </h2>
        );
    }
}

class About extends PureComponent {
    render() {
        return (
            <h2>
                About {`昵称：${this.props.nickName} 等级：${this.props.level} 区域:${this.props.region}`}
            </h2>
        );
    }
}

class Detail extends PureComponent{
    render() {
        return (
            <ul>
                <li>昵称：{this.props.nickName}</li>
                <li>等级：{this.props.level}</li>
                <li>区域:{this.props.region}</li>
            </ul>
        );
    }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);
const UserDetail = withUser(Detail);

class App extends PureComponent {
    render() {
        return (
            <div>
                app
                <UserContext.Provider value={{nickname: 'qiangzi', level: '18', region: '中国'}}>
                    <UserHome/>
                    <UserAbout/>
                    <UserDetail/>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;
