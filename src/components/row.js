import React from 'react';
import PropTypes from 'prop-types';

import Photo from './photo';

const PhotoRow = ( props ) => {
  return (
		<div
			style={ {
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
			} }
		>
			{
				props.photos.map( photo => {
					return (
						<Photo
							src={ photo.node.localFile.childImageSharp.sizes.src }
							sizes={ photo.node.localFile.childImageSharp.sizes }
							key={ photo.node.id }
							link={ photo.node.date + photo.node.slug }
						/>
					)
				} )
			}
		</div>
	)
}

PhotoRow.PropTypes = {
      photos: PropTypes.array,
}


export default PhotoRow;
