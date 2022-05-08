import React, {PureComponent} from "react";

class LoginPage extends PureComponent{
    render() {
        return (
            <h2>LoginPage</h2>
        );
    }
}

function withAuth(WarppedComponent) {
    const NewComponent = props => {
        const {isLogin} = props;
        if (isLogin) {
            return <WarppedComponent {...props}/>
        } else {
            return <LoginPage/>
        }
    }
    return NewComponent;
}

class CartPage extends PureComponent{
    render() {
        return (
            <h2>cart page</h2>
        );
    }
}

const AuthCartPage = withAuth(CartPage)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <AuthCartPage isLogin={false}/>
            </div>
        );
    }
}
