import React, {PureComponent, createRef} from "react";

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.userNameRef = createRef();
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor={'username'}>
                        用户：
                        <input type={'text'} id={'username'} ref={this.userNameRef}/>
                    </label>
                    <input type={'submit'} value={'提交'}/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        // 取消自动提交
        event.preventDefault();
        console.log(this.userNameRef.current.value);
    }
}

