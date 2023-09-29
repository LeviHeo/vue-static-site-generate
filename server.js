import { createSSRApp} from 'vue'
import { renderToString} from '@vue/server-renderer'
import App from './src/App.vue'

exports.render = async function() {
  const app = createSSRApp(App);
  const html = await renderToString(app);
  return html;
};