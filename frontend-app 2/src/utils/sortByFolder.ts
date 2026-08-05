import type { FolderDocument } from '@/types/content'

export const sortByFolder = (
  data: FolderDocument[],
  folderName: string,
): FolderDocument[] => {
  const folderData = data?.filter(dataItem => {
    return dataItem?.folder == folderName
  })

  return folderData
}
