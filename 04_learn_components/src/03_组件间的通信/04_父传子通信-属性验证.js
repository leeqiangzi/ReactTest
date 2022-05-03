import React, {Component} from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props) {
    const {name = ''} = props;
    return (
        <h2>我是：{name}</h2>
    );
}

ChildCpn.prototype = {
    name: PropTypes.string,
}

// 类组件
export default class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <ChildCpn name='why'/>
                <ChildCpn name='copy'/>
            </div>
        );
    }
}
