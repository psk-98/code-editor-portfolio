export type SearchParams = {
  file?: string
  folder?: string
  stack?: string
}

export type PortableTextChild = {
  _key?: string
  _type?: 'span'
  text: string
}

export type PortableTextMarkDefinition = {
  _key?: string
  _type: string
  href?: string
}

export type PortableTextBlock = {
  _key: string
  _type?: 'block'
  children: PortableTextChild[]
  listItem?: string
  markDefs?: PortableTextMarkDefinition[]
}

export type FolderDocument = {
  _id: string
  file: string
  folder: string
  socialLink?: string
}

export type AboutMeDocument = FolderDocument & {
  content?: PortableTextBlock[]
}

export type ContactMeDocument = FolderDocument

export type StackTag = {
  _id: string
  iconUrl?: string
  name: string
}

export type Project = {
  _id: string
  category?: string
  coverUrl?: string
  description?: string
  link?: string
  name: string
}

export type ProjectGroup = {
  _id: string
  name: string
  projects: Project[]
}

export type GitHubGist = {
  created_at?: string
  files?: Record<string, unknown>
  owner?: {
    avatar_url: string
    login: string
  }
}

export type FormInputs = {
  email: string
  message: string
  name: string
}
