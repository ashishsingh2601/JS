const person = {
    name: "Ashish",
    age: "24",
}

// console.log(Object.entries(person));

const objToArray = (obj) => {
  const objKeys = Object.keys(obj);

  const result = objKeys?.map((key) => {
    const value = obj[key];
    return [key, value];
  })

  return result
}


console.log(objToArray(person))




