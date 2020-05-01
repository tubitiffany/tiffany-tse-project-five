import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form'
import Subs from './Subs'
import Header from './Header';
import './App.css';



// API call to funtranslations.com API to get data (in our componentDidMount), save it in a state

class App extends Component {
  constructor() {
    super();
    this.state = {
      ingredientName: " ",
    }
  }

  componentDidMount() {
    this.getAxios()
  }

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
          substitutionOptions: response.data.substitutes
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

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Form getChoice={this.getChoice}></Form>
        <Subs></Subs>
      </div>
    );  
  }
  
}

export default App;
