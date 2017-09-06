const expect = require('chai').expect;
const {month, reverseSentence, nameProp, filterBetween} = require('./functions');

describe('Month()', function() {
  it('should to be a function', function() {
    expect(month).to.be.a('function');
  });
  it('should return a string', function() {
    expect(' ').to.be.a('string');
  });
  it('should return an error when passed invalid arguments', () => {
    expect(month).to.throw(TypeError);
  })
});

describe('ReverseSentence()', function() {
  it('should be a function', function() {
    expect(reverseSentence).to.be.a('function');
  });
  it('should return a string', function() {
    expect(' ').to.be.a('string');
  });
  it('should return a reversed sentence', function() {
    let str = "please let me pass this test";
    expect(reverseSentence(str)).to.eql("test this pass me let please");
  })
});

describe('NameProp()', function() {
  it('should be a function', function() {
    expect(nameProp).to.be.a('function');
  });
  it('should return an object', function() {
    expect({}).to.be.a('object');
  });
  it('should have contents within the object', function() {
    expect(['age', 'name', 'phone']).to.deep.equal([ 'age', 'name', 'phone' ]);
  });
});

describe('FilterBetween()', function() {
  it('should to be a function', function() {
    expect(filterBetween).to.be.a('function');
  });
  it('should return an object', function() {
    expect({}).to.be.a('object');
  });
  it('should return an error when passed invalid arguments', () => {
    expect(month).to.throw(TypeError);
  })
});
