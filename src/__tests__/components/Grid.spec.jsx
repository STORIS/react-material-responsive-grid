import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import style from 'material-responsive-grid/material-responsive-grid.css';
import Grid from '../../components/Grid';

/**
 *	className: string
 * fixed: string (left | center)
 *	tagName: string
 */
const renderer = TestUtils.createRenderer();

describe('Grid', () => {
	it('Should add "grid-fixed-left" class if fixed left', () => {
		renderer.render(<Grid fixed="left" />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toContain(style['grid-fixed-left']);
	});

	it('Should add "grid-fixed-center" class if fixed center', () => {
		renderer.render(<Grid fixed="center" />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toContain(style['grid-fixed-center']);
	});

	it('Should not add "grid-fixed-left" or "grid-fixed-center" class fixed is invalid', () => {
		renderer.render(<Grid fixed="right" />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toNotContain(style['grid-fixed-left']);
		expect(className).toNotContain(style['grid-fixed-left']);
	});

	it('Should not add "grid-fixed-left" or "grid-fixed-center" class if fluid', () => {
		renderer.render(<Grid />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toNotContain(style['grid-fixed-left']);
		expect(className).toNotContain(style['grid-fixed-left']);
	});

	it('Should not replace specified className', () => {
		renderer.render(<Grid className="foo" fixed="left" />);

		const { className } = renderer.getRenderOutput().props;

		expect(className).toContain('foo');
		expect(className).toContain(style['grid-fixed-left']);
	});

	it('Should support custom tag name', () => {
		renderer.render(<Grid tagName="li" />);
		expect(renderer.getRenderOutput().type).toBe('li');
	});
});
