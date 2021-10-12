export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61652d37bb82bba6b7dffd4d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v4nxtap2',
                  apiId: '483ccd39-ffef-46cc-a673-67c96ede053a'
                },
                {
                  buildHookId: '61652d370b0775b4dedeae0d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wa5sr1fx',
                  apiId: '013ae6ab-7a04-49af-91f6-337ece5d06cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DWMiller/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wa5sr1fx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
