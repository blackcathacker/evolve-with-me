


const evolve = (current) => {
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
            }).filter(_ => _)
        }
    }).filter(_ => _)))
}

module.exports = {
    evolve,
    getNeighbors
}