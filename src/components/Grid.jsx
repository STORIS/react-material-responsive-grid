import React from 'react';
import PropTypes from 'prop-types';
import { getClass } from '../shared/utils';

const Grid = ({
	className,
	fixed,
	marginless,
	tagName,
	...other
}) => {
	const classNames = [getClass('grid')];

	if (fixed === 'left') {
		classNames.push(getClass('fixed-left'));
	} else if (fixed === 'center') {
		classNames.push(getClass('fixed-center'));
	}

	if (marginless) {
		classNames.push(getClass('marginless'));
	}

	// specified class is added last
	if (className) {
		classNames.push(className);
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
	fixed: PropTypes.oneOf(['left', 'center']),
	marginless: PropTypes.bool,
	tagName: PropTypes.string,
};

Grid.defaultProps = {
	className: null,
	fixed: null,
	marginless: false,
	tagName: 'div',
};

export default Grid;
