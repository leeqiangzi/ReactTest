import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: ['星际穿越', '盗梦控件']
        }
    }

    render() {
        return (
            <div>
                <h2>电影列表</h2>
                <ul>
                    {
                        this.state.movies.map((item, index) => {
                            return (
                                <li key={item}>{item}</li>
                            );
                        })
                    }
                </ul>
                <button onClick={e => this.insertMovie()}>添加电影</button>
            </div>
        );
    }

    insertMovie() {
        this.setState({
            movies: ['大话西游', ...this.state.movies]
        })
    }
}
