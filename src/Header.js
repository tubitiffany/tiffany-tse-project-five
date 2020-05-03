import './App.css'
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Ingredient Substitution Finder</h1>
                <p>Enter the ingredient you're missing to see if there's anything you can use to substitute it with!</p>
            </header>
        )
    }
}

export default Header;