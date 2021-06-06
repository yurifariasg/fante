export const shuffle = <T extends {}>(listToShuffle: Array<T>): Array<T> => {
  const list = [...listToShuffle]
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = list[i]
    list[i] = list[j]
    list[j] = temp
  }
  return list
}

export const getFormattedDate = (date = new Date()) => {
  const dayOfMonth = date.getDate()
  const monthOfYear = date.getMonth() + 1
  const year = date.getFullYear()
  return `${dayOfMonth}.${monthOfYear}.${year}`
}
