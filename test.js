'use strict';

const expect = require('chai').expect;
const findById = require('.');

describe('findById()', () => {
  const tree = [
    { id: 1 },
    { id: 2, children: [{ id: 3 }]},
    { id: 4, children: [{ id: 5, children: [{ id: 6}] }]},
  ]

  it('creates a search function', () => {
    const fn = findById('children');

    expect(fn(tree, 'id', 1)).to.eql({ id: 1 });
  });

  it('works on nested elements', () => {
    const fn = findById('children');

    expect(fn(tree, 'id', 6)).to.eql({ id: 6 });
  });

  it('creates a search function with a pre-defined key', () => {
    const fn = findById('children', 'id');

    expect(fn(tree, 1)).to.eql({ id: 1 });
  });

  it('returns undefined if nothing is found', () => {
    const fn = findById('children');

    expect(fn(tree, 'id', 7)).to.be.undefined;
  });
});
