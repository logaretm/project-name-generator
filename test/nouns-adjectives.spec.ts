import * as _ from 'lodash-es';
import nouns from '../src/nouns';
import adjectives from '../src/adjectives';

describe('nouns', stringArrayTestSuite.bind(this, nouns));
describe('adjectives', stringArrayTestSuite.bind(this, adjectives));

function stringArrayTestSuite(collection: string[]) {
  it('is an array', function() {
    expect(Array.isArray(collection)).toBe(true);
  });

  it('has at least one item', function() {
    expect(collection.length).toBeGreaterThan(0);
  });

  it('has each item as a string', function() {
    var everyItemIsAString = _.every(collection, function(item) {
      return typeof item === 'string';
    });
    expect(everyItemIsAString).toBe(true);
  });

  it('has every item with no spaces', function() {
    var anyItemWithSpaces = _.some(collection, function(item) {
      return item.indexOf(' ') !== -1;
    });
    expect(anyItemWithSpaces).toBe(false);
  });

  it('has every item with no dashes', function() {
    var anyItemWithDashes = _.some(collection, function(item) {
      return item.indexOf('-') !== -1;
    });
    expect(anyItemWithDashes).toBe(false);
  });
}
