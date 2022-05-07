import React, {PureComponent} from "react";

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            valid: '',
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor={'username'}>
                        用户：
                        {/*受控组件*/}
                        <input type={'text'}
                               name={'username'}
                               id={'username'}
                               onChange={e => this.handleChange(e)}
                               value={this.state.username}
                        />
                    </label>
                    <br/>
                    <label htmlFor={'password'}>
                        密码：
                        {/*受控组件*/}
                        <input type={'text'}
                               name={'password'}
                               id={'password'}
                               onChange={e => this.handleChange(e)}
                               value={this.state.password}
                        />
                    </label>
                    <br/>
                    <label htmlFor={'valid'}>
                        验证码：
                        {/*受控组件*/}
                        <input type={'text'}
                               name={'valid'}
                               id={'valid'}
                               onChange={e => this.handleChange(e)}
                               value={this.state.valid}
                        />
                    </label>
                    <input type={'submit'} value={'提交'}/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        // 取消自动提交
        event.preventDefault();
        console.log(this.state.username, this.state.password, this.state.valid);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}

