import React, {Component} from 'react';
import './App.css';
import CardList from "./components/cardlist/cardlist.component";
import SearchBox from "./components/searchbox/searchbox.component";

const url = "http://jsonplaceholder.typicode.com/users"

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({monsters: data}))
    }


    render() {

        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <SearchBox
                    placeholder="Search for Monsters"
                    handleChange={e => this.setState({searchField: e.target.value})}/>

                    <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
