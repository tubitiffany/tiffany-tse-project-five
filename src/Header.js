import './App.css'
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Ingredient Substitution Finder</h1>
                <p>Enter the missing ingredient from your recipe and we'll provide you with possible substitutions! </p>
            </header>
        )
    }
}

export default Header;