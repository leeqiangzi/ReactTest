import React, {Component} from "react";

const UserContext = React.createContext({
    nickName: '',
    level: -1
})

const ThemeContext = React.createContext({
    color: 'black',
})

function ProfileHeader() {
    return (
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <ThemeContext.Consumer>
                            {
                                theme => {
                                    return (
                                        <div>
                                            <h2>用户昵称：{value.nickName}</h2>
                                            <h2>用户等级：{value.level}</h2>
                                            <h2>颜色{String(theme.color)}</h2>
                                        </div>
                                    );
                                }
                            }
                        </ThemeContext.Consumer>
                    );
                }
            }
        </UserContext.Consumer>
    )
}

function Profile(props) {
    return (
        <div>
            <ProfileHeader/>
            <ul>
                <li>设置1</li>
                <li>设置2</li>
                <li>设置3</li>
                <li>设置4</li>
            </ul>
        </div>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickName: 'qiangzi',
            level: 99,
        }
    }

    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <ThemeContext.Provider value={{color: 'red'}}>
                        <Profile/>
                    </ThemeContext.Provider>
                </UserContext.Provider>
            </div>
        );
    }
}
