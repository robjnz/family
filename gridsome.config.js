// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Family History',
  plugins: [

    {
      use: "gridsome-plugin-tailwindcss",
      
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-PJS56TL',
        enabled: true,
        debug: true
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './blog/**/*.md',
      },
    },
  ],
  templates: {
    BlogPost: '/blog/:title',
  },
};
  

