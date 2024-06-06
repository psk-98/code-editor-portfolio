export const filterByFile = (data, fileName) => {
  console.log(data)
  const fileInfo = data?.filter((dataItem) => {
    return dataItem?.file == fileName
  })

  return fileInfo
}
