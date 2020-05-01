import React, { Component } from 'react';
import './App.css'

// Component to get user text from a form
// LOGICAL FLOW
    // User is going to enter text in a text field
    // Save that tet to a state
    // User submits the form. The button press passes the user selection back up to App.js by calling a function passed down through props

// What will we need
    // - A form with a text field and a submit button
    // - State
    // - Function from props

class Form extends Component {
    constructor() {
        super();
        this.state = {
            userEnteredIngredient: ""
        }
    }

    getFormSelection = (event) => {
        this.setState({
            userEnteredIngredient: event.target.value
        });
    }

    render() {
        return(
            <form action="">
                <input onChange={this.getFormSelection} value={this.state.userEnteredIngredient} type="text" name="translateText" id="translateText">
                </input>


                <button type="submit" onClick={(e) => this.props.getChoice(e, this.state.userEnteredIngredient)}>
                    Find Substitute
                </button>
            </form>

        )
    }
}

export default Form;