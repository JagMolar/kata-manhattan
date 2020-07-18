function manhattanDistance(pointA, pointB){
    
    if(typeof pointA === "number" && typeof pointB === "number" )
        throw new Error("La cagaste con los valores");
    
        return Math.abs(pointA[0]- pointB[0]) + Math.abs(pointA[1]- pointB[1]);
}

module.exports = manhattanDistance;