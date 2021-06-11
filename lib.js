
/* evolve takes a grid and will generate specified number of generations of it
   generations defaults to a single generation. 
   Optionally also takes a logger method of the form (grid, generationNumber).
 */
const evolve = (grid, generations = 1, logger = () => { }) => {
    let current = grid
    let i
    for (i = 1; i <= generations; i++) {
        logger(current, i)
        current = evolveInner(current)
    }
    logger(current, i)
    return current
}

/* takes a grid and returns the next generation.
   This is done by mapping over each inner array (y)
   and then mapping over each individual cell and based on rules
   returning the new value.
 */
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
    /* loop over the coordinate differences to find all neighbors (-1, 0, 1)
       add those values to the current y axis and determine if it is a valid coordinate
       if it is do this again but on the x axis checking similarly but also comparing to see
       if the difference of x AND y are 0 (in which case its the current cell and not a neighbor)
       if all those conditions match return that value.
       Concat all arrays together to represent a single list of neighbors and 
      then filter out 0 and undefined values which happen when the coordinates are invalid */
    return concatArrays(NEIGHBOR_DIFF.map(i => {
        const y = _y + i
        if (y >= 0 && y < grid.length) {
            const innerArray = grid[y]
            return NEIGHBOR_DIFF.map(j => {
                const x = _x + j
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