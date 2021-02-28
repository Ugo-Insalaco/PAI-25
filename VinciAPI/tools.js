const arrayEquals = function(T, U){
    return JSON.stringify(T)===JSON.stringify(U)
}

module.exports = {
    arrayEquals: arrayEquals
}