import React, {Component} from "react";
import TabControl from './TabControl'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.titles = ['新款', '精选', '流行'];

        this.state = {
            currentTitle: this.titles[0],
        }
    }

    render() {
        return (
            <div>
                <TabControl titles={this.titles}
                            itemClick={(index) => this.itemClick(index)}/>
                <h2>{this.state.currentTitle}</h2>
            </div>
        );
    }

    itemClick(index) {
        this.setState({
            currentTitle: this.titles[index],
        })
    }
}
