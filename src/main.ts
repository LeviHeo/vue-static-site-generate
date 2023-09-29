// @ts-nocheck
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'

//createApp(App).mount('#app')
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState}) => {
    // install plugins etc.
    //app.use(router)
  },
)