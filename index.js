
const evolve = (grid, evolutions = 1) => {
    let current = grid
    for (let i = 0; i < evolutions; i++) {
        current = evolveInner(current)
    }
    return current
}

const evolveInner = (current) => {
    return current.map((innerArray, y) => {
        return innerArray.map((cell, x) => {
            const neighbors = getNeighbors(current, x, y)
            const totalNeighbors = neighbors.length
            switch (cell) {
                case 0:
                    if (neighbors.filter(n => n === 2).length === 2) return 1
                    return 0
                case 1:
                    if (totalNeighbors >= 5) return 0
                    if (totalNeighbors <= 1) return 0
                    return 2
                case 2:
                    if (totalNeighbors >= 3) return 0
                    if (totalNeighbors === 0) return 0
                    return 3
                case 3:
                    return 0
            }
        })
    })
}

const concatArrays = (...args) => [].concat.apply([], ...args)
const filterEmpty = _ => _
const NEIGHBOR_DIFF = [-1, 0, 1]
const getNeighbors = (grid, _x, _y) => {
    //loop over the coordinate differences to find all neighbors (-1, 0, 1)
    //add those values to the current y axis and determine if it is a valid coordinate
    //if it is do this again but on the x axis checking similarly but also comparing to see
    //if the difference of x AND y are 0 (in which case its the current cell and not a neighbor)
    //if all those conditions match return that value.
    //Concat all arrays together to represent a single list of neighbors and 
    //then filter out 0 and undefined values which happen when the coordinates are invalid
    return concatArrays(NEIGHBOR_DIFF.map(i => {
        y = _y + i
        if (y >= 0 && y < grid.length) {
            const innerArray = grid[y]
            return NEIGHBOR_DIFF.map(j => {
                x = _x + j
                if (x >= 0 && x < innerArray.length && !(i === 0 && j === 0)) {
                    return innerArray[x]
                }
            })
        }
    })).filter(filterEmpty)
}

module.exports = {
    evolve,
    getNeighbors
}