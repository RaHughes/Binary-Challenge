export const loadClasses = classes => ({
  type: 'LOAD_CLASSES',
  classes
})

export const loadSpells = spells => ({
  type: 'LOAD_SPELLS',
  spells
})

export const loadMonsters = monsters => ({
  type: 'LOAD_MONSTERS',
  monsters
})

export const saveCharacter = character => ({
  type: 'SAVE_CHARACTER',
  character
})