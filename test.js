'use strict';

const expect = require('chai').expect;
const findById = require('.');

describe('findById()', () => {
  const tree = [
    { id: 0, children: [{ id: 4 }] },
    { id: 1 },
    { id: 2, children: [{ id: 3 }] },
  ]

  it('creates a search function', () => {
    const fn = findById('children');

    expect(fn(tree, 'id', 1)).to.eql({ id: 1 });
  });

  it('works on nested elements', () => {
    const fn = findById('children');

    expect(fn(tree, 'id', 3)).to.eql({ id: 3 });
  });

  it('works with subsequent nested elements', () => {
    const fn = findById('children');

    expect(fn(tree, 'id', 4)).to.eql({ id: 4 });
  });

  it('creates a search function with a pre-defined key', () => {
    const fn = findById('children', 'id');

    expect(fn(tree, 1)).to.eql({ id: 1 });
  });

  it('returns undefined if nothing is found', () => {
    const fn = findById('children');

    expect(fn(tree, 'id', 1000)).to.be.undefined;
  });
});
