import {defineField, defineType} from 'sanity'

export const stackTags = defineType({
  name: 'stackTags',
  title: 'Stack Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      description: 'Name of framework, programming language, etc',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      description: 'Icon of framework, programming language, etc',
      type: 'image',
    }),
  ],
})
