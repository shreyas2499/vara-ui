import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Header from './components/header/header';
import Water from './components/waterComponent/water';
import Gas from './components/gasComponent/gas';
import GridSolar from './components/gridSolarComponent/gridSolar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Steam from './components/steamComponent/steam';
import Food from './components/FoodComponent/food';

class App extends Component {
  constructor() {
    super();
    this.state = {
      values: {}

    }
  }

  componentDidMount() {
    fetch("https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/vara/energy/")
      .then(response => response.json())
      .then((energy) => this.setState(() => {
        return { values: energy }
      },
        () => {
          console.log(this.state.values.vals["Water consumption (m3)"])
        }))
  }


  capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }


  render() {
    const { values } = this.state;
    const isDataAvailable = values && values.vals;
    return (
      <>
        <Header />
        <div className="App">

          {/* Filter to select the Month and Fields */}
          {localStorage.getItem("loggedIn") &&
            (
              <>
              <h1>h1</h1>
              <hr/>
              </>
            )

          }

          <div class="row">
            {isDataAvailable && (
              <>
                <Water state={this.state} />
                <Food state={this.state} />
              </>
            )}
          </div>

          <div class="row secondRow">
            {isDataAvailable && (
              <GridSolar state={this.state} />
            )}
          </div>

          <div class="row secondRow">
            {isDataAvailable && (
              <>
                <Steam state={this.state} />
                <Gas state={this.state} />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
