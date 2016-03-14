/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

/**
 * Internal dependencies
 */
import Main from 'components/main';
import PostType from 'my-sites/post-type';

export default function Types( { type } ) {
	return (
		<Main>
			<PostType type={ type } />
		</Main>
	);
}

Types.propTypes = {
	type: PropTypes.string.isRequired
};
