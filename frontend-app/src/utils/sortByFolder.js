export const sortByFolder = (data, folderName) => {
  const folderData = data?.filter((dataItem) => {
    return dataItem?.folder == folderName
  })

  return folderData
}
