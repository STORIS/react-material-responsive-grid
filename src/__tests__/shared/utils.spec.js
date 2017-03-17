import expect from 'expect';
import style from 'material-responsive-grid/material-responsive-grid.css';
import { getClass, validSizes, isSizeValid, pushSizeClassNames } from '../../shared/utils';

describe('getClass', () => {
	it('Should translate known styles', () => {
		expect(getClass('col-xs4-3')).toEqual(style['col-xs4-3']);
	});

	it('Does not translate unknown styles', () => {
		expect(getClass('unknown-style')).toEqual('unknown-style');
	});
});

describe('isSizeValid', () => {
	it('Should return true for sizes in the validSizes array', () => {
		expect(isSizeValid(validSizes[0])).toBe(true);
	});

	it('Should return false for invalid sizes', () => {
		expect(isSizeValid('I believe it is called large')).toBe(false);
	});
});

describe('pushSizeClassNames', () => {
	it('Should push classNames for valid sizes onto the provided array', () => {
		const classNames = [];
		pushSizeClassNames(classNames, ['xs4', 'lg'], 'hidden-', '-only');
		expect(classNames).toEqual(['hidden-xs4-only', 'hidden-lg-only']);
	});
	it('Should not push classNames for invalid sizes', () => {
		const classNames = [];
		pushSizeClassNames(classNames, ['xs4', 'not a valid size', 'lg12'], 'hidden-', '-only');
		expect(classNames).toEqual(['hidden-xs4-only', 'hidden-lg12-only']);
	});
});
