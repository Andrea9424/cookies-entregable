
export const random = (list) => {
    const index = Math.floor(Math.random() * list.length)
    return list[index]
  }