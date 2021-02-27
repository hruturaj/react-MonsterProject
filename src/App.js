import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.components.jsx";
import { SearchBox } from "./components/search-box/search-box.components.jsx";
import { Title } from "./components/title/title.components.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monstersList: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monstersList: users }));
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { monstersList, searchValue } = this.state;
    var monsterFilter = monstersList.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return (
      <div className="App">
        <Title> Monsters Rodolex </Title>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={monsterFilter}></CardList>
      </div>
    );
  }
}

export default App;
