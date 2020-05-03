import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form'
import Header from './Header';
import './App.css';

// note for testing! use ingredients like butter, molasses, soy sauce, salmon for results

class App extends Component {
  constructor() {
    super();
    this.state = {
      ingredientName: " ",
      substitutionsAvailable: " ",
      substitutionMessage: " ",
      substitutionOptions: []
    }
  }

  // API call to funtranslations.com API to get data, save it in a state
  getAxios = () => {
    axios({
      url: `https://api.spoonacular.com/food/ingredients/substitutes`,
      method: `GET`,
      responseType: `json`,
      params: {
        apiKey: `fe865e8ce28b4733ae2e9fd57d01b355`,
        ingredientName: this.state.ingredientName,
      }
    }).then((response) => {
      this.setState({
        substitutionsAvailable: response.data.status,
        substitutionMessage: response.data.message,
        substitutionOptions: response.data.substitutes,
      })
    })
  }

  // Function to get user's choice from Form.js component
  // save user's choice to a state
  getChoice = (event, foodItem) => {
    event.preventDefault();

    this.setState({
      ingredientName: foodItem

    }, () => {
      this.getAxios()
    })

  }


// display header, form and conditional statement to render information to the DOM
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Form getChoice={this.getChoice}></Form>
        {
          this.state.substitutionsAvailable === "failure" 
            ? <p>Sorry there are no substitutes available for {this.state.ingredientName}</p>
            : <div>
              <h2>{this.state.ingredientName}</h2>
              <p>{this.state.substitutionMessage}</p>
              <ul>
                {this.state.substitutionOptions.map((item) => {
                  return (
                    <li>{item}</li>
                  )
                })}
              </ul>
            </div>
          }
      </div>
    );  
  }
}

export default App;
