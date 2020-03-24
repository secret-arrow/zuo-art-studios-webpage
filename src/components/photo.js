import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const Photo = ( props ) => {
  return (
          <div
        style={ {
          width: 'calc( 100% / 3 )',
          padding: '0.2em',
        } }
      >
          <Img
            src={ props.src }
            sizes={ props.sizes }
            style={ {
              width: 'auto',
              height: 'auto',
            } }
          />
      </div>
  )
}

Photo.PropTypes = {
      src: PropTypes.string,
      sizes: PropTypes.object,
      link: PropTypes.string,
}

export default Photo;
