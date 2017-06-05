import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import style from 'material-responsive-grid/material-responsive-grid.css';
import Grid from '../../components/Grid';

/**
 *	className: string
 * fixed: string (left | center)
 *	tagName: string
 */
const renderer = createRenderer();

describe('Grid', () => {
	it('Should add "marginless" class if marginless', () => {
		renderer.render(<Grid marginless />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toContain(style.marginless);
	});

	it('Should add "fixed-left" class if fixed left', () => {
		renderer.render(<Grid fixed="left" />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toContain(style['fixed-left']);
	});

	it('Should add "fixed-center" class if fixed center', () => {
		renderer.render(<Grid fixed="center" />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toContain(style['fixed-center']);
	});

	it('Should not add "fixed-left" or "fixed-center" class fixed is invalid', () => {
		renderer.render(<Grid fixed="right" />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toNotContain(style['fixed-left']);
		expect(className).toNotContain(style['fixed-center']);
	});

	it('Should not add "fixed-left", "fixed-center", or "marginless" class if unspecified', () => {
		renderer.render(<Grid />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.grid);
		expect(className).toNotContain(style['fixed-left']);
		expect(className).toNotContain(style['fixed-center']);
		expect(className).toNotContain(style.marginless);
	});

	it('Should retain specified className as last class', () => {
		renderer.render(<Grid className="foo" fixed="left" />);

		const { className } = renderer.getRenderOutput().props;

		expect(className).toContain('foo');
		expect(className).toContain(style['fixed-left']);
		expect(className.split(' ').pop()).toEqual('foo');
	});

	it('Should support custom tag name', () => {
		renderer.render(<Grid tagName="li" />);
		expect(renderer.getRenderOutput().type).toBe('li');
	});
});
