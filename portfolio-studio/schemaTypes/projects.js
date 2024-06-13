import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Name of the project',
      type: 'string',
    }),
    defineField({
      name: 'projectCoverImage',
      title: 'Project Cover Image',
      description: 'Cover image of the project, screenshot etc',
      type: 'image',
    }),
    {
      name: 'description',
      title: 'Description',
      description: 'Short description of the project',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Link to the project',
      type: 'url',
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'stackTags'}]}],
    },
  ],
})
