import React, { Component } from 'react';
import axios from 'axios';
import RandomMeal from './RandomMeal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { recipe: [] };
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(response => {
      console.log('response', response);

      this.setState({ recipe: response.data.meals['0'] });
    });
  }

  render() {
    const randomRecipe = this.state.recipe || [];
    console.log('randomRecipe', randomRecipe);

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='.col-xs-12 .col-md-8'>
            <h1 className='text-center'>What Should I Make Today?</h1>
            <h2 className='lead text-muted text-center'>A hackathon project (made in React)</h2>
            <hr />
          </div>
          <RandomMeal currentRecipe={ randomRecipe } />
        </div>
      </div>
    );
  }
}

export default App;
