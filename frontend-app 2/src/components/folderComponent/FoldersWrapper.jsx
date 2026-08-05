'use client'

import { sortByFolder } from '@/utils/sortByFolder'
import { useState } from 'react'
import FolderComponent from './FolderComponent'

export default function FoldersWrapper({ data, searchParams }) {
  const [openFolder, setOpenFolder] = useState('')

  return (
    <div className="lg:flex lg:min-h-[var(--max-height-desktop-between-footer-nav)] lg:max-h-[var(--max-height-desktop-between-footer-nav)]">
      <div className="w-full lg:w-[calc(12.38vw+3.81vw-2rem-1px)] lg:border-r lg:border-line lg:[&>button:first-child]:border-y-0">
        {returnFolderName(data).map(folderName => (
          <FolderComponent
            folderName={folderName}
            data={sortByFolder(data, folderName)}
            openFolder={openFolder}
            setOpenFolder={setOpenFolder}
            key={folderName}
            searchParams={searchParams}
          />
        ))}
      </div>
    </div>
  )
}

const returnFolderName = data => {
  const folders = []
  data.forEach(item => {
    if (!folders.includes(item.folder)) {
      folders.push(item.folder)
    }
  })

  return folders
}
