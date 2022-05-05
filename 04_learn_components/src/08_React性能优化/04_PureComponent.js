import React, {PureComponent} from 'react'


// Header
function Header() {
    console.log('Header被调用');
    return <h2>我是Header组件</h2>
}

// Banner
class Banner extends PureComponent {
    render() {
        console.log('Banner被调用');
        return <h3>我是Banner组件</h3>
    }
}

// Main
class Main extends PureComponent {
    render() {
        console.log('Main被调用');
        return (
            <div>
                <Banner/>
                <ProductList/>
            </div>
        );
    }
}

function ProductList() {
    console.log('ProductList被调用');
    return (
        <ul>
            <li>商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
            <li>商品列表4</li>
        </ul>
    );
}

// Footer
function Footer() {
    console.log('Footer被调用');
    return <h2>我是Footer组件</h2>
}

// 类组件
export default class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            counter: 0,
        }
    }

    render() {
        console.log('App被调用');
        return (
            <div>
                <h2>当前计数{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}
