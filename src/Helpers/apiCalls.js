export const fetchClasses = async () => {
  let data = fetch('http://dnd5eapi.co/api/classes')
  .then(res => res.json())
  let classes = await data
  return classes
}

export const fetchSpells = async () => {
  let data = fetch('http://dnd5eapi.co/api/spells')
  .then(res => res.json())
  let spells = await data
  return spells
}

export const fetchMonsters = async () => {
  let data = fetch('http://dnd5eapi.co/api/monsters')
  .then(res => res.json())
  let monsters = await data
  return monsters
}



  //   classes.map(classs => {
  //     return fetch(`http://dnd5eapi.co/${classs.url}`)
  //     .then()
  // })