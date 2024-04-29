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
      values: {},
      selectedMonths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      selectedGraphs: ["Water", "Food", "GridSolar", "Gas", "Steam"]
    }
  }

  componentDidMount() {
    fetch("https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/vara/energy/")
      .then(response => response.json())
      .then((energy) => this.setState(() => {
        return { values: energy }
      },
        () => {

        }))

    if (localStorage.getItem("email")) {
      const requestBody = {
        email: localStorage.getItem("email"),
      };
      fetch("https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/vara/getPreferences/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(response => response.json())
        .then(pref => this.setState({
          selectedMonths: pref.months,
          selectedGraphs: pref.graphs
        }))
    }
  }

  handleMonthSelect = (selectedMonths) => {
    this.setState({ selectedMonths });
    // http://127.0.0.1:8000/

    // Style the multiselect


    const requestBody = {
      email: localStorage.getItem("email"),
      months: selectedMonths
    };

    fetch('https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/vara/userPreferences/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Update failed');
        }
        return response.json();
      })
      .then(data => {

      })
      .catch(error => {
        console.error('Login error:', error.message);
      });

  }

  handleGraphSelect = (selectedGraphs) => {
    this.setState({ selectedGraphs });

    const requestBody = {
      email: localStorage.getItem("email"),
      graphs: selectedGraphs
    };

    fetch('https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/vara/userPreferences/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Update failed');
        }
        return response.json();
      })
      .then(data => {
      })
      .catch(error => {
        console.error('Login error:', error.message);
      });

  }

  capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }


  render() {
    const { values, selectedMonths, selectedGraphs } = this.state;
    const isDataAvailable = values && values.vals;
    return (
      <>
        <Header />
        <div className="App">

          {/* Filter to select the Month and Fields */}
          {localStorage.getItem("loggedIn") &&
            (
              <div class="container">
                <div class="row">
                  <div class="col-4"></div>
                  <div class="col-1">
                    <label for="monthSelect" style={{marginLeft:"20%", fontWeight:900, fontSize:"20px"}}>
                      <abbr style={{textDecoration: "underline", cursor: "pointer"}} title="Hold down the Ctrl (Windows) or Command (Mac) button to select multiple options.">Select Months:</abbr>
                    </label><br/>
                      <select id="monthSelect" multiple value={selectedMonths} onChange={(e) => this.handleMonthSelect(Array.from(e.target.selectedOptions, option => option.value))}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                  </div>
                  <div className='col-1'></div>
                  <div class="col-1">
                    <label for="graphSelect" style={{marginLeft:"20%", fontWeight:900, fontSize:"20px"}}>
                      <abbr style={{textDecoration: "underline", cursor: "pointer"}} title="Hold down the Ctrl (Windows) or Command (Mac) button to select multiple options.">Select Graphs:</abbr>
                    </label><br/>
                      <select id="graphSelect" multiple value={selectedGraphs} onChange={(e) => this.handleGraphSelect(Array.from(e.target.selectedOptions, option => option.value))}>
                        <option value="Water">Water</option>
                        <option value="Gas">Gas</option>
                        <option value="GridSolar">Grid Solar</option>
                        <option value="Steam">Steam</option>
                        <option value="Food">Food</option>
                      </select>
                  </div>
                  <div class="col-4"></div>
                </div>
              </div>

            )

          }

          <div class="row">
            {isDataAvailable && selectedGraphs.includes("Water") && (
              <Water state={this.state} selectedMonths={selectedMonths} />
            )}
            {isDataAvailable && selectedGraphs.includes("Food") && (
              <Food state={this.state} selectedMonths={selectedMonths} />
            )}
          </div>

          <div class="row secondRow">
            {isDataAvailable && selectedGraphs.includes("GridSolar") && (
              <GridSolar state={this.state} selectedMonths={selectedMonths} />
            )}
          </div>

          <div class="row secondRow">
            {isDataAvailable && selectedGraphs.includes("Steam") && (
              <Steam state={this.state} selectedMonths={selectedMonths} />
            )}
            {isDataAvailable && selectedGraphs.includes("Gas") && (
              <Gas state={this.state} selectedMonths={selectedMonths} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;





