


const evolve = (current) => current

const NEIGHBOR_DIFF = [-1, 0, 1]
const getNeighbors = (grid, _x, _y) => {
    return [].concat.apply([], (NEIGHBOR_DIFF.map(i => {
        y = _y + i
        if (y >= 0 && y < grid.length) {
            const innerArray = grid[y]
            return NEIGHBOR_DIFF.map(j => {
                x = _x + j
                if (x >= 0 && x < innerArray.length && !(i === 0 && j === 0)) {
                    return innerArray[x]
                }
            }).filter(_ => _ !== undefined)
        }
    }).filter(_ => _ !== undefined)))
}

module.exports = {
    evolve,
    getNeighbors
}