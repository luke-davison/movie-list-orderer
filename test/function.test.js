const chai = require('chai')

const sortingFunction = require('../functions/sorting')

const expect = chai.expect

describe('sorting function', () => {
  const currentOrder = ['a', 'd', 'c', 'e', 'b', 'f']
  const correctOrder = ['a', 'b', 'c', 'd', 'e', 'f']
  const results = sortingFunction(currentOrder, correctOrder)
  const expectedResults = [
    {current: 4, correct: 1, value: 'b'},
    {current: 2, correct: 2, value: 'c'}
  ]
  it('should return an array', () => {
    expect(results instanceof Array).to.be.true
  })
  it('and that array contains objects', () => {
    results.forEach(result => {
      expect(result).to.be.a('object')
    })
  })
  it('and those objects are correct', () => {
    expect(results).to.deep.equal(expectedResults)
  })
})
