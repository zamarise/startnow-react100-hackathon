import React, { Component } from 'react';

class RandomMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentRecipe, value } = this.props;

    // const filteredItems = currentRecipe.filter(Boolean);

    // // const arr = Object.keys(currentRecipe).map((item, i, arr) => (
    // //   <ul key={ i } item={ item } value={ currentRecipe[item] } />
    // // ));
    // // arr.map(e => (e === null ? '' : e));

    // console.log('filteredItems', filteredItems);

    return (
      <div>
        {Object.keys(currentRecipe).map((item, i, arr) => <ul key={ i } item={ item } value={ currentRecipe[item] } />)}

        <h1>{currentRecipe.strMeal}</h1>
        <p>
          <h3>Ingredients: </h3>
          <ul className='lead'>
            <small>
              Source: <a href>{currentRecipe.strSource}</a>
            </small>

          </ul>
        </p>
      </div>
    );
  }
}

export default RandomMeal;
