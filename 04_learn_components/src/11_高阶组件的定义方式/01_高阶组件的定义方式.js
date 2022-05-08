import React, {PureComponent} from "react";

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                app {this.props.name}
            </div>
        );
    }
}

// 类
// function enhanceComponent(WarppedComponent) {
//     return class NewComponent extends PureComponent{
//         render() {
//             return (
//                 <WarppedComponent {...this.props}/>
//             );
//         }
//     }
// }

// 函数
function enhanceComponent(WarppedComponent) {
    function NewComponent(props) {
        return <WarppedComponent {...props}/>
    }
    return NewComponent;
}

const EnhanceComponent = enhanceComponent(App);

export default EnhanceComponent;
