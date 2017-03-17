import React, { PropTypes } from 'react';
import { getClass, isSizeValid, pushSizeClassNames } from '../shared/utils';

const Col = ({
	className,
	xs4,
	xs8,
	sm8,
	sm12,
	md12,
	lg12,
	xl12,
	xs4Offset,
	xs8Offset,
	sm8Offset,
	sm12Offset,
	md12Offset,
	lg12Offset,
	xl12Offset,
	sm,
	md,
	lg,
	xl,
	smOffset,
	mdOffset,
	lgOffset,
	xlOffset,
	first,
	last,
	hidden,
	hiddenUp,
	hiddenDown,
	tagName,
	...other
}) => {
	const newProps = { ...other };
	const classNames = [];

	if (className) {
		classNames.push(className);
	}

	// size specific properties
	if (xs4) {
		classNames.push(getClass(`col-xs4-${xs4}`));
	}

	if (xs8) {
		classNames.push(getClass(`col-xs8-${xs8}`));
	}

	if (sm8) {
		classNames.push(getClass(`col-sm8-${sm8}`));
	}

	if (sm12) {
		classNames.push(getClass(`col-sm12-${sm12}`));
	}

	if (md12) {
		classNames.push(getClass(`col-md12-${md12}`));
	}

	if (lg12) {
		classNames.push(getClass(`col-lg12-${lg12}`));
	}

	if (xl12) {
		classNames.push(getClass(`col-xl12-${xl12}`));
	}

	if (xs4Offset) {
		classNames.push(getClass(`col-xs4-offset-${xs4Offset}`));
	}

	if (xs8Offset) {
		classNames.push(getClass(`col-xs8-offset-${xs8Offset}`));
	}

	if (sm8Offset) {
		classNames.push(getClass(`col-sm8-offset-${sm8Offset}`));
	}

	if (sm12Offset) {
		classNames.push(getClass(`col-sm12-offset-${sm12Offset}`));
	}

	if (md12Offset) {
		classNames.push(getClass(`col-md12-offset-${md12Offset}`));
	}

	if (lg12Offset) {
		classNames.push(getClass(`col-lg12-offset-${lg12Offset}`));
	}

	if (xl12Offset) {
		classNames.push(getClass(`col-xl12-offset-${xl12Offset}`));
	}

	// convenience properties (twelve columns implied)
	if (sm) {
		classNames.push(getClass(`col-sm-${sm}`));
	}

	if (md) {
		classNames.push(getClass(`col-md-${md}`));
	}

	if (lg) {
		classNames.push(getClass(`col-lg-${lg}`));
	}

	if (xl) {
		classNames.push(getClass(`col-xl-${xl}`));
	}

	if (smOffset) {
		classNames.push(getClass(`col-sm-offset-${smOffset}`));
	}

	if (mdOffset) {
		classNames.push(getClass(`col-md-offset-${mdOffset}`));
	}

	if (lgOffset) {
		classNames.push(getClass(`col-lg-offset-${lgOffset}`));
	}

	if (xlOffset) {
		classNames.push(getClass(`col-xl-offset-${xlOffset}`));
	}

	if (lgOffset) {
		classNames.push(getClass(`col-lg-offset-${lgOffset}`));
	}

	if (xlOffset) {
		classNames.push(getClass(`col-xl-offset-${xlOffset}`));
	}

	if (hiddenUp && isSizeValid(hiddenUp)) {
		classNames.push(getClass(`hidden-${hiddenUp}-up`));
	}

	if (hiddenDown && isSizeValid(hiddenDown)) {
		classNames.push(getClass(`hidden-${hiddenDown}-down`));
	}

	// properties implemented as an array of sizes
	pushSizeClassNames(classNames, first, 'first-');
	pushSizeClassNames(classNames, last, 'last-');
	pushSizeClassNames(classNames, hidden, 'hidden-', '-only');

	if (classNames.length) {
		newProps.className = classNames.filter(cssName => cssName).join(' ');
	}

	return (
		React.createElement(tagName || 'div', newProps)
	);
};

Col.propTypes = {
	className: PropTypes.string,
	xs4: PropTypes.number,
	xs8: PropTypes.number,
	sm8: PropTypes.number,
	sm12: PropTypes.number,
	md12: PropTypes.number,
	lg12: PropTypes.number,
	xl12: PropTypes.number,
	xs4Offset: PropTypes.number,
	xs8Offset: PropTypes.number,
	sm8Offset: PropTypes.number,
	sm12Offset: PropTypes.number,
	md12Offset: PropTypes.number,
	lg12Offset: PropTypes.number,
	xl12Offset: PropTypes.number,
	sm: PropTypes.number,
	md: PropTypes.number,
	lg: PropTypes.number,
	xl: PropTypes.number,
	smOffset: PropTypes.number,
	mdOffset: PropTypes.number,
	lgOffset: PropTypes.number,
	xlOffset: PropTypes.number,
	first: PropTypes.arrayOf(PropTypes.string),
	last: PropTypes.arrayOf(PropTypes.string),
	hidden: PropTypes.arrayOf(PropTypes.string),
	hiddenUp: PropTypes.string,
	hiddenDown: PropTypes.string,
	tagName: PropTypes.string,
};

Col.defaultProps = {
	className: null,
	xs4: null,
	xs8: null,
	sm8: null,
	sm12: null,
	md12: null,
	lg12: null,
	xl12: null,
	xs4Offset: null,
	xs8Offset: null,
	sm8Offset: null,
	sm12Offset: null,
	md12Offset: null,
	lg12Offset: null,
	xl12Offset: null,
	sm: null,
	md: null,
	lg: null,
	xl: null,
	smOffset: null,
	mdOffset: null,
	lgOffset: null,
	xlOffset: null,
	first: [],
	last: [],
	hidden: [],
	hiddenUp: null,
	hiddenDown: null,
	tagName: null,
};

export default Col;
