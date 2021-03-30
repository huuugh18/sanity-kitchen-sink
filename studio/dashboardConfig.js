export default {
  widgets: [
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
                  buildHookId: '60634ad7064b3011d279ecef',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rv9m38h7',
                  apiId: '4be27241-1122-478b-b2f1-271de34f987f'
                },
                {
                  buildHookId: '60634ad7064b300d6879e8cf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ezzpnj85',
                  apiId: '7f00f0e8-9470-42b6-8a81-c9d31639cd24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huuugh18/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ezzpnj85.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
