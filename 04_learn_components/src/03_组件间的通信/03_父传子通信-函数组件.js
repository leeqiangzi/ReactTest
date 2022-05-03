import React, {Component} from 'react'

function ChildCpn(props) {
    const {name = ''} = props;
    return (
        <h2>{name}</h2>
    );
}

// 类组件
export default class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <ChildCpn name={'why'}/>
                <ChildCpn name={'copy'}/>
            </div>
        );
    }
}
