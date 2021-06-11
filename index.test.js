
const { evolve, getNeighbors } = require('./index')

describe('getNeighbors', () => {
    const testCase = [
        [0, 0, 2, 2, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 1, 3, 1, 0, 0, 2],
        [0, 0, 0, 2, 0, 3, 0, 0, 1, 3],
        [0, 0, 0, 0, 1, 3, 0, 0, 0, 3],
        [0, 2, 2, 0, 0, 0, 1, 3, 1, 0],
        [0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
        [0, 0, 2, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    it('finds neighbors test case 1', () => {
        expect(getNeighbors(testCase, 0, 0)).toEqual([])
    })
    it('finds neighbors test case 2', () => {
        expect(getNeighbors(testCase, 9, 9)).toEqual([1])
    })
    it('finds neighbors test case 3', () => {
        expect(getNeighbors(testCase, 9, 0)).toEqual([2, 2])
    })
    it('finds neighbors test case 4', () => {
        expect(getNeighbors(testCase, 3, 0)).toEqual([2, 1])
    })
    it('finds neighbors test case 4', () => {
        expect(getNeighbors(testCase, 5, 2)).toEqual([1, 3, 1, 1, 3])
    })
})

describe('Evolve', () => {
    it('Test Case 1', () => {
        const initial = [
            [0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 3, 1, 0, 0, 0],
            [0, 0, 0, 2, 0, 3, 0, 0, 1, 3],
            [0, 0, 0, 0, 1, 3, 0, 0, 0, 3],
            [0, 2, 2, 0, 0, 0, 1, 3, 1, 0],
            [0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
            [0, 0, 2, 0, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
        const expected = [
            [0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 2, 0, 0, 0],
            [0, 0, 0, 3, 0, 0, 0, 0, 2, 0],
            [0, 1, 0, 1, 2, 0, 0, 0, 0, 0],
            [0, 3, 3, 0, 0, 1, 2, 0, 2, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 3, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 3, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
        expect(evolve(initial)).toEqual(expected)
    })
    it('Test Case 2', () => {
        const initial = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,0,0,2,0,0,0],
            [0,0,3,3,2,0,0,0,2,0],
            [0,1,0,0,0,0,0,0,2,0],
            [0,0,3,0,0,1,2,0,0,0],
            [0,0,1,3,3,3,0,0,0,0],
            [0,0,0,1,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
        const expected = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,2,2,0,1,0,1,0,0],
            [0,0,0,0,3,1,0,0,3,1],
            [0,2,0,0,0,1,0,0,3,1],
            [0,0,0,0,0,2,3,1,0,0],
            [0,0,2,0,0,0,0,0,0,0],
            [0,0,0,2,0,2,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
        expect(evolve(initial)).toEqual(expected)
    })
    it('Test Case 3', () => {
        const initial = [
            [0,0,0,0,1,3,1,0,0,0],
            [0,0,0,0,0,3,0,0,0,0],
            [0,0,2,0,0,0,0,3,1,0],
            [0,0,2,0,2,3,0,0,3,0],
            [0,0,2,0,0,0,0,3,0,0],
            [0,0,0,0,0,2,1,3,1,0],
            [0,0,0,0,2,2,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
        const expected = [
            [0,0,0,0,2,0,2,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,1,3,0,0,0,0,0,2,0],
            [0,0,3,0,3,0,0,0,0,0],
            [0,1,3,0,1,1,0,0,0,0],
            [0,0,0,1,0,0,2,0,2,0],
            [0,0,0,0,3,0,1,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
        expect(evolve(initial)).toEqual(expected)
    })
    it('Test Case 4', () => {
        const initial = [
            [0,0,0,0,2,0,2,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,1,3,0,0,0,0,0,2,0],
            [0,0,3,0,3,0,0,0,0,0],
            [0,1,3,0,1,1,0,0,0,0],
            [0,0,0,1,0,0,2,0,2,0],
            [0,0,0,0,3,0,1,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
        const expected = [
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 2, 2, 0, 1, 0, 0],
            [0, 0, 0, 2, 0, 0, 3, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 0, 0],
            [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ]
        expect(evolve(initial)).toEqual(expected)
    })
    it('Test Case 5 - multiple evolutions', () => {
        const initial = [
            [0,0,0,0,1,3,1,0,0,0],
            [0,0,0,0,0,3,0,0,0,0],
            [0,0,2,0,0,0,0,3,1,0],
            [0,0,2,0,2,3,0,0,3,0],
            [0,0,2,0,0,0,0,3,0,0],
            [0,0,0,0,0,2,1,3,1,0],
            [0,0,0,0,2,2,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
        const expected = [
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 2, 2, 0, 1, 0, 0],
            [0, 0, 0, 2, 0, 0, 3, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 0, 0],
            [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ]
        expect(evolve(initial, 2)).toEqual(expected)
    })
})