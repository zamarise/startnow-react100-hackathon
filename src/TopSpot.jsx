import React from 'react';

export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a href={ `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${props.location}` }>
      <button type='button' className='btn btn-primary btn-lg btn-block'>
        Open in Google Maps
      </button>
    </a>
  </div>
);
