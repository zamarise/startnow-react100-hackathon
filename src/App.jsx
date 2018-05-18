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
      this.setState({ recipe: response.data.meals['0'] });
    });
  }

  render() {
    const { recipe } = this.state;

    const removeEmpty = obj => {
      Object.keys(obj).forEach(k => !obj[k] && obj[k] !== undefined && delete obj[k]);
      Object.keys(obj).forEach(k => obj[k] && obj[k] === obj.idMeal && delete obj[k]);
      Object.keys(obj).forEach(k => obj[k] && obj[k] === obj.strCategory && delete obj[k]);
      Object.keys(obj).forEach(k => obj[k] && obj[k] === obj.strArea && delete obj[k]);
      Object.keys(obj).forEach(k => obj[k] && obj[k] === obj.strTags && delete obj[k]);
      return obj;
    };

    const newRecipeArray = removeEmpty(recipe);

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='.col-xs-12 .col-md-8'>
            <h1 className='text-center'>What Should I Make Today?</h1>
            <h2 className='lead text-muted text-center'>
              A hackathon project (made in React). Refresh the page for a new recipe.
            </h2>
            <hr />

            {Object.keys(newRecipeArray).map((item, i) => (
              <RandomMeal
                name={ item
                  .replace(/^str/, '')
                  .replace(/^Ingredient/, 'Ingredient ')
                  .replace(/^Measure/, 'Measure ') }
                key={ i }
                value={ newRecipeArray[item] }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
