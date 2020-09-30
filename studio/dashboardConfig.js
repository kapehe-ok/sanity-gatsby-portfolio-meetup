export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f74af4f7eb9c90a464f4264',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-meetup-studio',
                  apiId: 'b203fa42-83aa-4aa4-845f-5d44e4972963'
                },
                {
                  buildHookId: '5f74af5051d2cf097c8739f5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-meetup',
                  apiId: 'aeb368df-6479-4d35-910b-518ae708c491'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-gatsby-portfolio-meetup',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-meetup.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
