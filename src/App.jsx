import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const url ="http://jsonplaceholder.typicode.com/users"

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
      fetch(url)
          .then(res=> res.json())
          .then(data => this.setState({monsters : data }))

    }


  render() {
        return (
            <div className="App">
              {this.state.monsters.map(monster => <h1 key={monster.id} >{monster.name}</h1> )}
            </div>
        )
    }
}

export default App;
