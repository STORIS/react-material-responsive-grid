import styles from 'material-responsive-grid/material-responsive-grid.css';

export const getClass = className => (
	(styles && styles[className]) ? styles[className] : className
);

export const validSizes = [
	'xs4',
	'xs8',
	'sm8',
	'sm12',
	'md12',
	'lg12',
	'xl12',
	'sm',
	'md',
	'lg',
	'xl',
];

export const isSizeValid = size => (
	validSizes.indexOf(size) >= 0
);

export const pushSizeClassNames = (array, sizes, preClassName = '', postClassName = '') => {
	sizes.forEach((size) => {
		if (isSizeValid(size)) {
			array.push(getClass(`${preClassName}${size}${postClassName}`));
		}
	});
};

export default {
	getClass,
	validSizes,
	isSizeValid,
	pushSizeClassNames,
};
