# tree-search

[![Travis](https://img.shields.io/travis/gakimball/tree-search.svg?maxAge=2592000)](https://travis-ci.org/gakimball/tree-search) [![npm](https://img.shields.io/npm/v/tree-search.svg?maxAge=2592000)](https://www.npmjs.com/package/tree-search)

> Create a function to search a tree of items

Use this if you deal with a custom recursive data structure often.

## Installation

```bash
npm install tree-search
```

## Usage

Create a search function that knows your tree's structure, then call the function to look for specific key/value pairs.

```js
const treeSearch = require('tree-search');

// Our tree uses the key `children` for nested items
const tree = [
  { id: 1 },
  { id: 2, children: [
    { id: 3, doggos: true },
  ]},
];

const find = treeSearch('children');

find(tree, 'id', 1); // => { id: 1 }
find(tree, 'doggos', true); // => { id: 3, doggos: true }
find(tree, 'id', 4); // => undefined
```

You can also specify the key upfront, and then you can just pass the value to the created function.

```js
const treeSearch = require('tree-search');

// Our tree uses the key `children` for nested items
const tree = [
  { id: 1 },
  { id: 2, children: [
    { id: 3, doggos: true },
  ]},
];

const find = treeSearch('children', 'id');

find(tree, 1); // => { id: 1 }
find(tree, 3); // => { id: 3, doggos: true }
find(tree, 4); // => undefined
```

## API

### treeSearch(subKey[, idKey])

Create a search function that recursively searches an array of objects.

- **subKey** (String): property in each object that will contain an array of objects.
- **idKey** (String): key to match against when searching for items.

Returns a finder function. The signature of the function depends on if `idKey` is provided or not.

#### find(tree, key, value)

This function is created if `treeSearch()` is called *without* the `idKey` parameter. Finds the first item in a tree with the key/value pair specified.

- **tree** (Array of Objects): tree to search.
- **key** (String): key to inspect on each object.
- **value** (String): value to match against.

Returns the object found, or `undefined` if one wasn't found.

#### find(tree, value)

This function is created if `treeSearch()` is called *with* the `idKey` parameter. Finds the first item in a tree with `value` assigned to `idKey`.

- **tree** (Array of Objects): tree to search.
- **value** (String): value to match against.

Returns the object found, or `undefined` if one wasn't found.

## Local Development

```bash
git clone https://github.com/gakimball/tree-search
cd tree-search
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
