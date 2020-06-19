// import ProjectService from './services/ProjectService.js'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#217480', height: '3px' },
    /*
     ** Global CSS
     */
    css: ['@/assets/css/fonts.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/libraries.client.js', ssr: false },
        { src: '~/plugins/global.js' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        'nuxt-purgecss',
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyDBnWX3JLvPPpnWbelo9XwptcaHYc30Aw8',
                    authDomain: 'portfolio-wd.firebaseapp.com',
                    databaseURL: 'https://portfolio-wd.firebaseio.com',
                    projectId: 'portfolio-wd',
                    storageBucket: 'portfolio-wd.appspot.com',
                    messagingSenderId: '93922560810',
                    appId: '1:93922560810:web:a37f6ab271d24a8d7a6c53',
                    measurementId: 'G-FMEWDHFNCJ'
                },
                services: {
                    realtimeDb: true
                }
            }
        ]
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        vendor: ['velocity-animate'],
        extend(config, ctx) {}
    }
    /* generate: {
        routes: async () => {
            const response = await ProjectService.getProjects()
            return response.data.map((project) => {
                return '/project/' + project.title
            })
        }
    }, */
}
