import React from 'react';
import PropTypes from 'prop-types';
import { getClass, pushSizeClassNames } from '../shared/utils';

const Row = ({
	className,
	reverse,
	start,
	center,
	end,
	top,
	middle,
	bottom,
	around,
	between,
	tagName,
	...other
}) => {
	const classNames = [getClass('row')];

	if (reverse) {
		classNames.push(getClass('reverse'));
	}

	// properties implemented as an array of sizes
	pushSizeClassNames(classNames, start, 'start-');
	pushSizeClassNames(classNames, center, 'center-');
	pushSizeClassNames(classNames, end, 'end-');
	pushSizeClassNames(classNames, top, 'top-');
	pushSizeClassNames(classNames, middle, 'middle-');
	pushSizeClassNames(classNames, bottom, 'bottom-');
	pushSizeClassNames(classNames, around, 'around-');
	pushSizeClassNames(classNames, between, 'between-');

	// specified class is added last
	if (className) {
		classNames.push(className);
	}

	return (
		React.createElement(tagName || 'div', {
			className: classNames.filter(cssName => cssName).join(' '),
			...other,
		})
	);
};

Row.propTypes = {
	className: PropTypes.string,
	reverse: PropTypes.bool,
	start: PropTypes.arrayOf(PropTypes.string),
	center: PropTypes.arrayOf(PropTypes.string),
	end: PropTypes.arrayOf(PropTypes.string),
	top: PropTypes.arrayOf(PropTypes.string),
	middle: PropTypes.arrayOf(PropTypes.string),
	bottom: PropTypes.arrayOf(PropTypes.string),
	around: PropTypes.arrayOf(PropTypes.string),
	between: PropTypes.arrayOf(PropTypes.string),
	tagName: PropTypes.string,
};

Row.defaultProps = {
	className: null,
	reverse: false,
	start: [],
	center: [],
	end: [],
	top: [],
	middle: [],
	bottom: [],
	around: [],
	between: [],
	tagName: null,
};

export default Row;
