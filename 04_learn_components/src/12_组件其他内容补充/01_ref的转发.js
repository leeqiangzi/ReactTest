import React, {PureComponent, createRef, forwardRef} from 'react'

class Home extends PureComponent{
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

// 高阶组件forwardRef
const Profie = forwardRef(function(props, ref) {
    return (
        <h1 ref={ref}>Profile</h1>
    );
})

export default class App extends PureComponent {
    constructor() {
        super();

        this.titleRef = createRef();
        this.homeRef = createRef();
        this.profileRef = createRef();
    }

    render() {
        return (
            <div>
                <h2 ref={this.titleRef}>hello world</h2>
                <Home ref={this.homeRef}/>
                <Profie ref={this.profileRef}/>
                <button onClick={e => this.printfRef()}>打印ref</button>
            </div>
        );
    }

    printfRef() {
        console.log(this.titleRef)
        console.log(this.homeRef)
        console.log(this.profileRef)
    }
}
