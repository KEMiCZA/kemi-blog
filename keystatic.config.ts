// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        description: fields.text({ label: 'Description' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/posts',
            publicPath: '../../assets/images/posts',
          },
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        status: fields.select({
            label: 'Status',
            options: [
                { label: 'Active', value: 'active' },
                { label: 'Archived', value: 'archived' },
                { label: 'In Progress', value: 'in_progress' }
            ],
            defaultValue: 'active'
        }),
        link: fields.url({ label: 'Project Link' }),
        description: fields.text({ label: 'Description' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/images/projects',
            publicPath: '../../assets/images/projects',
          },
        }),
      },
    }),
  },
  singletons: {
    bio: singleton({
        label: 'Bio',
        path: 'src/content/bio',
        schema: {
            name: fields.text({ label: 'Name' }),
            role: fields.text({ label: 'Role' }),
            socials: fields.object({
                github: fields.url({ label: 'GitHub URL' }),
                twitter: fields.url({ label: 'Twitter/X URL' }),
                linkedin: fields.url({ label: 'LinkedIn URL' }),
            }),
            about: fields.document({
                label: 'About Me',
                formatting: true,
                dividers: true,
                links: true,
            })
        }
    })
  }
});
