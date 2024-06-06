import {defineField, defineType} from 'sanity'

export const aboutMe = defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'folder',
      title: 'Folder',
      description: 'The folder with the files you want to show, e.g bio file',
      type: 'string',
    }),
    defineField({
      name: 'file',
      title: 'File',
      description: 'The file that will show the text e.g bio',
      type: 'string',
    }),
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],

  preview: {
    select: {
      folder: 'folder',
      file: 'file',
    },
    prepare({folder, file}) {
      return {title: folder + ' / ' + file}
    },
  },
})
