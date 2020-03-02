export const fetchClasses = async () => {
  let data = fetch('http://dnd5eapi.co/api/classes')
  .then(res => res.json())
  .then(data => {
    return data.results.map(result => {
      let things = fetchInfo(result.url)
      return things
    })
  })
  let classes = await data
  return Promise.all(classes)
}

export const fetchSpells = async () => {
  let data = fetch('http://dnd5eapi.co/api/spells')
  .then(res => res.json())
  .then(data => {
    return data.results.map(result => {
      let things = fetchInfo(result.url)
      return things
    })
  })
  let spells = await data
  return Promise.all(spells)
}

export const fetchMonsters = async () => {
  let data = fetch('http://dnd5eapi.co/api/monsters')
  .then(res => res.json())
  .then(data => {
    return data.results.map(result => {
      let things = fetchInfo(result.url)
      return things
    })
  })
  let monsters = await data
  return Promise.all(monsters)
}

const fetchInfo = async (url) => {
let data = fetch(`http://dnd5eapi.co${url}`)
.then(res => res.json())
let urlInfo = await data
return urlInfo
}


// .then(data => {
//   data.results.map(result => {
//     return {
//       name: result.name,
//       class: fetch(`http://dnd5eapi.co${result.url}`)
//     }
//   })
// })