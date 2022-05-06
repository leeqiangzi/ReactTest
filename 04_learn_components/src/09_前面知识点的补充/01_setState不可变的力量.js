import React, {PureComponent} from "react";

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            friends: [
                {name: 'lilei', age: 20},
                {name: 'lucy', age: 25},
                {name: 'tom', age: 22},
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {
                        this.state.friends.map((item, index) => {
                            return (
                                <li key={item.name}>
                                    姓名：{item.name} 年龄:{item.age}
                                    <button onClick={e => this.incrementAge(index)}>age+1</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={e => this.insertDate()}>添加数据</button>
            </div>
        );
    }

    insertDate() {
        // // 1、在开发中不要这样做
        // const newData = {name: 'qinagzi', age: '22'};
        // this.state.friends.push(newData)
        // this.setState({
        //     friends: this.state.friends,
        // })

        // 2、推荐做法
        const newData = {name: 'qinagzi', age: '22'};
        const newFriends = [...this.state.friends];
        newFriends.push(newData);
        this.setState({
            friends: newFriends,
        })
    }

    incrementAge(index) {
        const newFriends = [...this.state.friends];
        newFriends[index].age += 1;
        this.setState({
            friends: newFriends,
        })
    }
}

