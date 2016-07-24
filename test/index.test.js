import { assert } from 'chai';
import index from '../src';

describe('Simple passing test', () => {
  it('index should return empty object', () => {
    assert.isObject(index);
    assert.equal(Object.keys(index).length, 0);
  })
});

