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
                  buildHookId: '609a145dabddeb766fec0f09',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cpmgf5c4',
                  apiId: '633b8190-4053-4a32-8832-a0f99580d6cb'
                },
                {
                  buildHookId: '609a145d2b48838201157b74',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pibb6to7',
                  apiId: 'e0cb7181-43dd-4dcd-b9b6-8811dc3a9b48'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxa11an/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pibb6to7.netlify.app',
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
