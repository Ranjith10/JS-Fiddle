//* Added myReduce method prototype
Array.prototype.myReduce = function (reducer, initialValue) {
    //* initialValue is not defined, select first element as initial Accumulator
    let accumulator = initialValue === undefined ? this[0] : initialValue
    //* initialValue is not defined, first element will be skipped from currentElement
    let startIndex = initialValue === undefined ? 1 : 0
    //* this - array object on which myReduce is called 
    for (let i = startIndex; i < this.length; i++) {
        accumulator = reducer(accumulator, this[i])
    }
    return accumulator
}

let sum = ["1", "2", "3", "4"].myReduce((acc, i) => acc + i, 0)

let students = [
  {
    name: "student1",
    year: 2,
    age: 22,
  },
  {
    name: "student2",
    year: 2,
    age: 23,
  },
  {
    name: "student3",
    year: 3,
    age: 24,
  },
  {
    name: "student4",
    year: 1,
    age: 21,
  },
]

let meanAge = students.myReduce((acc, student) => {
  if (!acc[student.year]) {
    acc["year"] = student.year
    acc[student.year] = student.age
  } else {
    acc[student.year] += student.age
  }
  return acc
}, {})

console.log({ sum })

console.log({ meanAge })
