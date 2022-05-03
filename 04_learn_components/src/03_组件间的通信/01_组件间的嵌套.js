import React, {Component} from 'react'


// Header
function Header() {
    return <h2>我是Header组件</h2>
}

// Main
function Main() {
    return <h2>我是Main组件</h2>
}

// Footer
function Footer() {
    return <h2>我是Footer组件</h2>
}

// 类组件
export default class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
