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

        // Bind creates a new function that will force the this inside the function to be the parameter passed to bind().

        //JAVASCRIPT BY DEFAULT DOESNT SET THE SCOPE OF THIS ON FUNCTIONS. YOU HAVE TO DECLARE IT EXPLICITLY.
        //olo ayto to kanoume ston contructor giati trexei prwtos kai theloume na vevaiwthoume oti this anaferetai
        // swsta se kathe method kai oxi ws undefined. gia na mhn ginei lathos
        //in this case we want to bind this on the app component

        //Otan exoume arrow functions to this mesa tous AYTOMATA ginetai bind sto meros pou kanoume declare thn
        // arrow function, diladi sto context tou component px.

        // this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({monsters: data}))
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }


    render() {

        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <h1> Monsters Rolodex</h1>
                <SearchBox
                    placeholder="Search for Monsters"
                    handleChange={this.handleChange}/>

                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
