import React from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends React.Component {
  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //ajax call
    console.log("App mounted");
  }

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    console.log("App rendered");
    const { counters } = this.state;
    return (
      <React.Fragment>
        <NavBar total={counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
