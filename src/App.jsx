import React, {Component} from 'react';
import './App.css';
import CardList from "./components/cardlist/cardlist.component";

const url = "http://jsonplaceholder.typicode.com/users"

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({monsters: data}))
    }


    render() {
        return (
            <div className="App">
                <CardList monsters={this.state.monsters}/>
            </div>
        )
    }
}

export default App;
