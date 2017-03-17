import React, { PropTypes } from 'react';
import { getClass } from '../shared/utils';

const Grid = ({
	className,
	fixed,
	tagName,
	...other
}) => {
	const classNames = [getClass('grid')];

	if (className) {
		classNames.push(className);
	}

	if (fixed === 'left') {
		classNames.push(getClass('grid-fixed-left'));
	} else if (fixed === 'center') {
		classNames.push(getClass('grid-fixed-center'));
	}

	return (
		React.createElement(tagName, {
			className: classNames.filter(cssName => cssName).join(' '),
			...other,
		})
	);
};

Grid.propTypes = {
	className: PropTypes.string,
	fixed: PropTypes.string,
	tagName: PropTypes.string,
};

Grid.defaultProps = {
	className: null,
	fixed: null,
	tagName: 'div',
};

export default Grid;
