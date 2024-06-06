import {defineField, defineType} from 'sanity'

export const contactMe = defineType({
  name: 'contactMe',
  title: 'Contact Me',
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
    defineField({
      name: 'socialLink',
      title: 'Link',
      description: 'The link to the platform e.g github',
      type: 'string',
    }),
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
