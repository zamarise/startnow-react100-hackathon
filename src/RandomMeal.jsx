import React, { Component } from 'react';

class RandomMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, key, i, value, newRecipeArray, name } = this.props;

    return (
      <div className='container-fluid' key={ i }>
        <div className='row'>
          <center>
            {/* immediately invoked function */}
            {(() => {
              if (name === 'MealThumb') {
                return (
                  <div className='row'>
                    <img src={ value } alt='food' width='400px' height='auto' className='img-rounded' />
                  </div>
                );
              }
              if (name === 'Youtube') {
                return <a href={ value }>YouTube</a>;
              }
              if (name === 'Source') {
                return <a href={ value }>Original Recipe Source</a>;
              }
              if (name === 'Meal') {
                return <h1>{value}</h1>;
              }
              if (name === 'Instructions') {
                return (
                  <blockquote>
                    <h4>
                      {name}: {value}
                    </h4>
                  </blockquote>
                );
              }
              return (
                <h4>
                  {name}: {value}
                </h4>
              );
            })(name, value)}
          </center>
        </div>
      </div>
    );
  }
}
export default RandomMeal;
