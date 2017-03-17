import expect from 'expect';
import * as Exports from '../index';

describe('index exports', () => {
	it('exports all components', () => {
		['Grid', 'Row', 'Col'].forEach((component) => {
			expect(Object.keys(Exports)).toContain(component);
		});
	});
});
