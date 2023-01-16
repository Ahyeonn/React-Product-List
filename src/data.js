import data from './data.json'

export default data

const allCategories = data.map(obj => obj.category)

// Make an object where each key is a category name
const categoryObjects = allCategories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {}) // Initial value as an Object!
  // Make an arr array of the keys
const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = allCategories.reduce((acc, cat) => {
    if (acc[cat] === undefined) {
        acc[cat] = 1
    } else {
        acc[cat] += 1
    }
return acc
}, {}) 

const namesAndCategories = categoriesUnique.map(name => {
    return { name, count: categoriesWithCounts[name]}
  })

namesAndCategories.push({ name: 'All', count: data.length })

export {
    allCategories,
    categoriesUnique,
    categoriesWithCounts,
    namesAndCategories
}