import type { AboutMeDocument } from '@/types/content'

export const filterByFile = (
  data: AboutMeDocument[],
  fileName?: string,
): AboutMeDocument[] => {
  const fileInfo = data?.filter(dataItem => {
    return dataItem?.file == fileName
  })

  return fileInfo
}
