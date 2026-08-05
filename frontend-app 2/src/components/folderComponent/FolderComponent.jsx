import { AnimatePresence } from 'framer-motion'
import { folderArrow } from '../../../public/assests/svgs'
import FileComponent from '../fileComponent/FileComponent'

export default function FolderComponent({
  folderName,
  data,
  openFolder,
  setOpenFolder,
  searchParams,
}) {
  return (
    <>
      <button
        className="mb-[0.5rem] w-[calc(100vw-4rem)] cursor-pointer bg-line py-[1rem] pl-[2rem] text-left font-mono [&>*]:font-light lg:m-0 lg:w-full lg:border-y lg:border-line lg:pt-[2rem] lg:pb-[1.4rem] lg:pl-[2rem]"
        key={data[0]?._id}
        onClick={() =>
          setOpenFolder(folderName == openFolder ? '' : folderName)
        }
      >
        <span
          className={`[&_svg]:mr-[1rem] [&_svg]:h-[1rem] [&_svg]:fill-foreground [&_svg]:transition-transform [&_svg]:duration-400 ${folderName === openFolder ? '[&_svg]:rotate-90' : ''}`}
        >
          {folderArrow}
        </span>
        <span className="text-label text-foreground">{folderName}</span>
      </button>
      <AnimatePresence>
        {folderName === openFolder && (
          <FileComponent
            data={data}
            folderName={folderName}
            searchParams={searchParams}
          />
        )}
      </AnimatePresence>
    </>
  )
}
