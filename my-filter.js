Array.prototype.myFilter = function(callback) {
    let resultArr = []
    for(let i=0; i< this.length; i++) {
        if(callback(this[i])) resultArr.push(this[i])
    }
    return resultArr
}

let evenNumbers = [1,2,3,4].myFilter((item) => (item%2) === 0)

console.log({evenNumbers})