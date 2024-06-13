export const filterByFile = (data, fileName) => {
  const fileInfo = data?.filter((dataItem) => {
    return dataItem?.file == fileName
  })

  return fileInfo
}
